/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { faCartShopping, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, updateOrderAmount } from "../utils/store/slices/cartSlice";

function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [productAmount, setProductAmount] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [grandTotalAmount, setGrandTotalAmount] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false);
    const products = useSelector(state => state.productsSlice.products);
    const productId = useParams("productId").productId;
    const cartItems = useSelector(state => state.cartSlice.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetching the details of the product with id
        let filteredProduct = [];
        if (products.length) {
            filteredProduct = products.filter(product => product.id.toString() === productId)[0];
        } else {
            // In case user reloads the page so the data of products wont be available in the store so we will take the data from localstorage to keep app running
            const products = JSON.parse(localStorage.getItem("products"));
            filteredProduct = products.filter(product => product.id.toString() === productId)[0];
        }

        // Setting products price and discount amounts
        const grandTotalAmount = Math.floor((filteredProduct.price * 80) - (Math.floor((filteredProduct.price * 80) * (filteredProduct.discountPercentage / 100))));
        setProductAmount(Math.floor(filteredProduct.price * 80));
        setDiscountAmount(Math.floor((filteredProduct.price * 80) * (filteredProduct.discountPercentage / 100)));
        setGrandTotalAmount(grandTotalAmount);

        // Checking product is present in the cart or not
        const bool = cartItems.filter(item => item.id === filteredProduct.id)[0];
        setAddedToCart(bool);

        setProduct(filteredProduct);
    }, [productId]);

    const starRatings = {
        1: "⭐",
        2: "⭐⭐",
        3: "⭐⭐⭐",
        4: "⭐⭐⭐⭐",
        5: "⭐⭐⭐⭐⭐"
    }

    function handleAddToCart(e) {
        dispatch(addToCart({
            ...product,
            quantity: 1
        }));
        dispatch(updateOrderAmount({
            totalAmount: productAmount,
            totalDiscount: discountAmount,
            grandTotal: grandTotalAmount
        }));
        setAddedToCart(true);
    }

    if (!product) {
        return <h1 className="mt-28">Loading Products...</h1>;
    }

    return (
        <section className="mt-10 min-[500px]:mt-20 min-[700px]:mt-28 px-5 flex flex-col min-[700px]:flex-row items-center min-[700px]:items-start gap-x-5">
            <figure>
                <img src={product.images[0]} className="max-w-[300px] min-w-[300px] min-[850px]:max-w-[400px] min-[850px]:min-w-[400px] rounded-xl" />
            </figure>
            <section>
                <h1 className="text-3xl min-[500px]:text-4xl font-bold">{product.title}</h1>
                <section className="mt-3">
                    {
                        product?.tags.map(tag => {
                            return <span key={Math.floor(Math.random() * 1000000)} className="mr-2 text-[12px] font-semibold bg-purple-700 text-white py-1 px-3 rounded-full">{tag.toUpperCase()}</span>
                        })
                    }
                </section>
                <p className="mt-3 font-semibold">
                    Rating: <span>{starRatings[Math.floor(product.rating)]}</span>
                    <span className="ml-2">({product.reviews.length} Reviews)</span>
                </p>
                <p className="flex items-center gap-x-2 mt-3 text-[22px] min-[500px]:text-2xl font-semibold"><FontAwesomeIcon icon={faIndianRupee} /> {grandTotalAmount} <span className="text-base mt-1">({product.discountPercentage} % OFF)</span></p>
                <section className="mt-5 font-semibold text-[20px]">
                    Description:
                    <ul className="mt-2 ml-5 block text-[18px] space-y-2 max-w-[600px]">
                        {
                            product.description.split('. ').map(sentence => <li key={Math.floor(Math.random() * 1000000)} className="text-[15px] min-[500px]:text-base list-disc">{sentence}</li>)

                        }
                    </ul>
                </section>
                <button
                    onClick={handleAddToCart}
                    disabled={!addedToCart ? false : true}
                    className={`${!addedToCart ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-60"} mt-7 font-semibold text-[16px] min-[500px]:text-lg bg-purple-700 text-white py-2 px-4 rounded-lg`}><FontAwesomeIcon icon={faCartShopping} />
                    {!addedToCart ? " Add to Cart" : " Added to Cart"}
                </button>
            </section>
        </section>
    )
}

export default ProductDetails;
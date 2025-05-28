/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons/faIndianRupeeSign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateOrderAmount } from "../utils/store/slices/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductItem({ data }) {
    const [itemAddedToCart, setItemAddedToCart] = useState(false);
    const cartItems = useSelector(state => state.cartSlice.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        // To check if product is already added to the cart or not
        const bool = cartItems.some(item => item.id === data.id)
        setItemAddedToCart(bool);
    }, []);

    const productAmount = Math.floor(data.price * 80);
    const discountAmount = Math.floor(productAmount * (data.discountPercentage / 100));
    const grandTotalAmount = (productAmount - discountAmount);

    function handleAddToCart(e) {
        dispatch(addToCart({
            ...data,
            quantity: 1
        }));
        setItemAddedToCart(true);
        dispatch(updateOrderAmount({
            totalAmount: productAmount,
            totalDiscount: discountAmount,
            grandTotal: grandTotalAmount
        }));
    }

    return (
        <article className="hover:border-2 hover:border-purple-700 border-white border-2 shadow-xl shadow-slate-400 rounded-md px-4 pt-2 pb-4">
            <figure title="Click on title to view more details" className="flex justify-center">
                <Link to={`/product-details/${data?.id}`}>
                    <img className="w-[250px]" src={data?.thumbnail} alt="Product" />
                </Link>
            </figure>
            <article className="mt-3">
                <Link to={`/product-details/${data?.id}`}>
                    <h2 title={data?.title} className="text-xl font-semibold">{data?.title.length <= 25 ? data?.title : data?.title.slice(0, 25) + '...'}</h2>
                </Link>
                <p className="text-[17px]">{data?.rating.toFixed(1)} <FontAwesomeIcon className="text-yellow-600 mt-3" icon={faStar} /></p>
                <p className="mt-2 text-[20px] font-semibold space-x-3">
                    <span>
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {grandTotalAmount}
                    </span>
                    <span className="line-through text-[17.5px]">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {productAmount}
                    </span>
                </p>
                {
                    !itemAddedToCart ?
                        <button
                            onClick={handleAddToCart}
                            className="mt-5 font-semibold bg-purple-700 text-white px-5 py-[7px] rounded-md"
                        >
                            Add to Cart
                        </button>
                        :
                        <button
                            disabled
                            className="mt-5 font-semibold opacity-60 cursor-not-allowed bg-purple-700 text-white px-5 py-[7px] rounded-md"
                        >
                            Added to Cart
                        </button>
                }
            </article>
        </article>
    )
}

export default ProductItem;
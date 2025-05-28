/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faIndianRupeeSign, faMinus, faPlus, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { decrementItemQuantity, incrementItemQuantity, removeFromCart, updateOrderAmount } from "../utils/store/slices/cartSlice";

function CartItem({ data }) {
    const dispatch = useDispatch();

    const productAmount = Math.floor(data.price * 80);
    const discountAmount = Math.floor(productAmount * (data.discountPercentage / 100));
    const grandTotalAmount = (productAmount - discountAmount);

    function removeCartItem(e) {
        // removing item from cart
        dispatch(removeFromCart(data.id));

        // subtracting amount from bill
        dispatch(updateOrderAmount({
            totalAmount: -productAmount,
            totalDiscount: -discountAmount,
            grandTotal: -grandTotalAmount
        }));
    }

    function incrementQuantity(e) {
        // incrementing quantity of item in the cart
        dispatch(incrementItemQuantity(data.id));

        // adding amount to bill
        dispatch(updateOrderAmount({
            totalAmount: productAmount,
            totalDiscount: discountAmount,
            grandTotal: grandTotalAmount
        }));
    }

    function decrementQuantity(e) {
        // if quantity is 1 so rather than reducing quantity by 1 we will remove the item
        if (data.quantity === 1) removeCartItem();
        else {
            // decrementing quantity of item in the cart
            dispatch(decrementItemQuantity(data.id));
            // subtracting amount from bill
            dispatch(updateOrderAmount({
                totalAmount: -productAmount,
                totalDiscount: -discountAmount,
                grandTotal: -grandTotalAmount
            }));
        }
    }

    return (
        <article className="flex flex-col min-[500px]:flex-row gap-x-5 shadow-lg max-w-[700px] rounded-lg">
            <figure>
                <img src={data?.thumbnail} className="w-52 min-[500px]:w-36 object-cover" />
            </figure>

            <article>
                <h1 className="mt-3 font-semibold text-xl">{data?.title}</h1>
                <p className="mt-5 text-[20px] font-semibold space-x-3">
                    <span>
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {grandTotalAmount}
                    </span>
                    <span className="line-through text-[17.5px]">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {productAmount}
                    </span>
                </p>
                <button
                    onClick={removeCartItem}
                    className="mt-3 font-semibold text-[17px] bg-purple-700 text-white py-1 px-3 rounded-sm"
                >
                    <FontAwesomeIcon icon={faTrash} /> Remove
                </button>
            </article>

            <article className="min-[500px]:ml-auto mr-5 mt-4 flex flex-row min-[500px]:flex-col gap-x-3 min-[500px]:gap-y-1">
                <button onClick={incrementQuantity}><FontAwesomeIcon icon={faPlus} className="bg-purple-700 text-white rounded-md w-[60px] py-[8px]" /></button>
                <input
                    type="number"
                    value={data.quantity}
                    readOnly
                    className="ps-1 text-center rounded-md w-[60px] outline-none border-2 border-purple-700"
                />
                <button onClick={decrementQuantity}><FontAwesomeIcon icon={faMinus} className="bg-purple-700 text-white rounded-md w-[60px] py-[8px] mt-1" /></button>
            </article>
        </article>
    )
}

export default CartItem;
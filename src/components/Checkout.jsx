/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllItems } from "../utils/store/slices/cartSlice";

function Checkout() {
    const [openPopup, setOpenPopup] = useState(false);
    const [paymentType, setPaymentType] = useState("");
    const grandTotal = useSelector(state => state.cartSlice.grandTotal);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Once user clicks on any payment button the openPopup state changes, so this effect is triggered which means the popup is visible now, so we will show it for some time and then redirect to the homepage.
        if (openPopup) {
            setTimeout(() => {
                dispatch(removeAllItems())
                navigate("/");
            }, 2000);
        }
    }, [openPopup]);

    // Function when user clicks on any payment method button
    function placeOrder(paymentType) {
        // To change openPopup state to open
        setOpenPopup(true);
        // To set the payment type so when rendering the popup we can show message accordingly
        setPaymentType(paymentType);
    }

    return (
        <>
            <section className="mt-20 min-[500px]:mt-28 px-5 min-h-[396px]">
                <article className="relative">
                    <h1 className="text-3xl min-[500px]:text-4xl font-bold after:absolute after:w-28 after:h-[6px] after:rounded-lg after:bg-purple-700 after:-bottom-2 after:left-0">Checkout</h1>
                </article>
                <section className="mt-10 flex flex-col items-center relative">
                    <section className="shadow-lg py-6 px-5 rounded-xl bg-slate-100">
                        <article>
                            <p className="text-[13px] min-[400px]:text-[15px] min-[600px]:text-[17px] font-semibold">Delivered To</p>
                            <p className="text-[16px] min-[400px]:text-[17px] min-[600px]:text-xl font-semibold rounded-lg bg-white py-1 ps-2 pe-2 shadow-lg">Rishabh Sangal</p>
                        </article>
                        <article className="mt-5">
                            <p className="text-[13px] min-[400px]:text-[15px] min-[600px]:text-[17px] font-semibold">Delivered At</p>
                            <p className="text-[16px] min-[400px]:text-[17px] min-[600px]:text-xl font-semibold rounded-lg bg-white py-1 ps-2 pe-2 shadow-lg">Flat No. 12, Shanti Apartment
                                Plot No. 5, Linking Road
                                shamli , Uttar Pradesh  247776
                                India
                            </p>
                        </article>
                        <article className="mt-5">
                            <p className="text-[13px] min-[400px]:text-[15px] min-[600px]:text-[17px] font-semibold">Total Amount</p>
                            <p className="text-[16px] min-[400px]:text-[17px] min-[600px]:text-xl font-semibold rounded-lg bg-white py-1 ps-2 pe-2 shadow-lg"> <FontAwesomeIcon icon={faIndianRupee} /> {grandTotal}</p>
                        </article>
                        <article className="mt-5">
                            <p className="text-[13px] min-[400px]:text-[15px] min-[600px]:text-[17px] font-semibold">How would you like to pay</p>
                            <button onClick={(e) => placeOrder("upi")} className="text-[14px] min-[600px]:text-base mt-2 bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg mr-3">UPI</button>
                            <button onClick={(e) => placeOrder("cash")} className="text-[14px] min-[600px]:text-base bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg mr-3">Cash on Delivery</button>
                        </article>
                    </section>
                </section>
            </section>
            {
                openPopup &&
                // Popup JSX
                <section className="w-screen h-screen z-10  bg-[rgba(0,0,0,0.3)] flex flex-col justify-center items-center fixed top-0">
                    <section className="bg-white py-4 px-4 border-4 border-green-500 rounded-lg font-semibold">
                        {paymentType === "upi" ? <h1 className="text-2xl">Payment Successful!</h1> : ""}
                        <h1 className="mt-2 text-2xl">Order Confirmed!</h1>
                        <article className="mt-6 flex gap-x-2 items-center">
                            <p className="w-6 h-6 rounded-full border-t-4 border-e-4 border-slate-900 animate-spin"></p>
                            <span>Redirecting to Homepage ...</span>
                        </article>
                    </section>
                </section>

            }
        </>
    )
}

export default Checkout;
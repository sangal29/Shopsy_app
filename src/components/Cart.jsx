import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Cart() {
    const cartItems = useSelector(state => state.cartSlice.cartItems);
    const totalAmount = useSelector(state => state.cartSlice.totalAmount);
    const discountAmount = useSelector(state => state.cartSlice.totalDiscount);
    const grandTotalAmount = useSelector(state => state.cartSlice.grandTotal);

    return (
        <section className="mt-20 min-[500px]:mt-28 px-5">
            <article className="relative">
                <h1 className="text-3xl min-[500px]:text-4xl font-bold after:absolute after:w-12 after:h-[6px] after:rounded-lg after:bg-purple-700 after:-bottom-2 after:left-0">Cart</h1>
            </article>
            {
                cartItems.length ?
                    <section className="mt-8 min-h-[324px] flex flex-col min-[850px]:flex-row items-center min-[850px]:justify-center gap-y-10 min-[850px]:gap-x-5">
                        { /* Cart Items */}
                        <section className="order-2 min-[850px]:order-1 space-y-2">
                            {
                                cartItems?.map(item => <CartItem key={item?.id} data={item} />)
                            }
                        </section>
                        { /* Bill */}
                        <section className="order-1 min-[850px]:order-2 flex flex-col items-center">
                            <section className="border-purple-400 border-2 rounded-md px-5 py-5 h-fit">
                                <article className="text-xl border-b-2 border-purple-400 pb-2 space-y-2">
                                    <article className="flex justify-between">
                                        <p>Subtotal</p>
                                        <p><FontAwesomeIcon icon={faIndianRupee} /> {totalAmount}</p>
                                    </article>
                                    <article className="flex justify-between">
                                        <p>Discount</p>
                                        <p><FontAwesomeIcon icon={faIndianRupee} /> {discountAmount}</p>
                                    </article>
                                </article>
                                <article className="mt-3 space-x-2 flex justify-between text-xl">
                                    <p>Grand Total</p>
                                    <p><FontAwesomeIcon icon={faIndianRupee} /> {grandTotalAmount}</p>
                                </article>
                            </section>
                            <Link to="/checkout"><button className="mt-3 py-1 px-3 text-lg rounded-md bg-purple-700 text-white">Proceed to Payment</button></Link>
                        </section>
                    </section>
                    :
                    // In case cart is empty
                    <section className="mt-10 mb-12 flex flex-col items-center">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="text-[8rem] min-[400px]:text-[10rem]"
                        />
                        <h1 className="mt-5 text-xl min-[400px]:text-2xl font-semibold">Cart is Empty !</h1>
                        <Link to="/">
                            <button className="bg-purple-700 text-white py-2 px-4 rounded-md mt-10 text-lg min-[400px]:text-xl font-semibold">Continue Shopping</button>
                        </Link>
                    </section>
            }
        </section>
    )
}

export default Cart;
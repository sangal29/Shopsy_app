import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const cartItems = useSelector(state => state.cartSlice.cartItems);

    return (
        <header className="fixed top-0 shadow-lg rounded-b-[30px] bg-white z-10 w-full flex items-center justify-between px-5 min-[500px]:px-10">
            <figure>
                <Link to="/">
                    <img className="w-32 min-[500px]:w-52" src="/App Logo.png" />
                </Link>
            </figure>

            <nav>
                <ul className="flex gap-x-6 min-[500px]:-mt-5">
                    <Link to="/"><li className="font-semibold text-lg">Home</li></Link>
                    <Link to="/cart">
                        <li className="relative font-semibold">
                            <FontAwesomeIcon className='mt-1 text-lg text-purple-900' icon={faCartShopping} />
                            <span className='absolute -top-2 -right-3 text-lg'>{cartItems.length ? cartItems.length : 0}</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
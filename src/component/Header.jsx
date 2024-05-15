import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useIsOnline();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header
      className={`border-2 border-b-cyan-900 bg-cyan-100 text-black px-4 py-2  bg-fixed ${
        !isOnline ? "pointer-events-none" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
              <img className="w-16" alt="Logo" src={Logo}></img>
              <span className="ml-2 font-bold text-rose-800 text-3xl text-">SnackDash</span>
          </div>
        </Link>
        <h1 className="text-xl text-black text-center flex-grow">
          Hey there! Order your favorite food now.
        </h1>
        <nav className="flex items-center">
          <ul className="flex space-x-8 text-lg">
            <li className="hover:text-gray-300 font-[poppies]">
              <Link to="/about-us">
                <span className="ml-2 font-semibold">About Us</span>
              </Link>
            </li>
            <li className="hover:text-gray-300 font-[poppies]">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="ml-2 font-semibold">Cart ({cartItems?.length})</span>
              </Link>
            </li>
            <li className="hover:text-gray-300 font-[poppies]">
              <Link to="/sign-in">
                <span className="ml-2 font-semibold">Sign In</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import Logo from "../assets/img/logo.png"; 
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useIsOnline();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header
      className={`bg-white text-black px-4 py-6 h-24 shadow-md bg-fixed ${
        !isOnline ? "pointer-events-none" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="nav-logo" className="w-16" />
        </Link>

        <nav className="mr-4">
          <ul className="flex space-x-14 text-lg ">
            <Link to="/">
              <li className="space-x-2 hover:text-gray-300 font-[poppies]">
                <i className="fa-solid fa-house"></i>
                <a href="#">Home</a>
              </li>
            </Link>

            <Link to="/about-us">
              <li className="space-x-2 hover:text-gray-300 font-[poppies]">
                <i className="fa-solid fa-bars"></i>
                <a href="#"> About Us </a>
              </li>
            </Link>

            <Link to="/cart">
              <li className="font-[poppies]">
                <span className="hover:text-gray-300">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span>({cartItems?.length})</span>
              </li>
            </Link>

            <Link to="/sign-in">
              <li className="space-x-2 hover:text-gray-300 font-[poppies]">
                <i className="fa-solid fa-address-book"></i>
                <a href="#">Sign In</a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

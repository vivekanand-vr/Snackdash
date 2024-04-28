import { Link } from "react-router-dom";
import cartEmptyImg from "../assets/img/cooking.png";

const CartEmpty = () => {
  return (
    <div className="container w-4/12 mx-auto p-4 text-center m-4">
      <img src={cartEmptyImg} alt="empty-cart" className="w-80 mb-4" />
      <h2 className="text-[#535665] font-[poppins] text-xl font-medium text mb-2">
        Your cart is empty
      </h2>

      <p className="text-[#000000] text-base font-[poppins] mb-2">
        You can go to home page to view more restaurants
      </p>

      <Link to="/">
        <button
          type="button"
          className="bg-orange-500 text-white font-semibold px-5 rounded-md cursor-pointer py-2 hover:bg-orange-400 "
        >
          SEE RESTAURANT NEAR YOU
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;

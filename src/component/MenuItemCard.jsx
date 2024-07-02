import { useDispatch } from "react-redux";
import { RESTAURANT_IMG } from "../services/Endpoints";
import { addToCart } from "../redux/Slices/cartSlice";

const MenuItemCard = ({ data }) => {
  const { name, price, description, imageId, defaultPrice } = data?.card?.info;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(data?.card?.info));
  };
  return (
    <div className="flex justify-between items-center relative">
      <div className="py-4 px-2 my-4 border-gray-300 border-b-2 w-9/12">
        <div className="font-[poppins]">
          <h1 className="font-bold text-base">{name}</h1>
          <p className="font-medium">₹ {price / 100 || defaultPrice / 100}</p>
          <span className="font-light text-sm">{description}</span>
        </div>
          <button
            className="absolute bottom-0 right-0 px-6 py-1 bg-white border border-black font-poppins font-extrabold rounded-md hover:bg-black hover:text-white text-green-700"
            onClick={handleAdd}>
            Add
          </button>
      </div>
      {imageId && (<img src={RESTAURANT_IMG + imageId} className="w-2/12 h-24 object-cover"/>)}
    </div>
  );
};

export default MenuItemCard;

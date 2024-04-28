import { useDispatch } from "react-redux";
import { RESTAURANT_IMG } from "../utils/constants";
import { addToCart } from "../feature/cartSlice";

const RestaurantItemsCard = ({ data }) => {
  const { name, price, description, imageId, defaultPrice } = data?.card?.info;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(data?.card?.info));
  };
  return (
    <div className="flex justify-between items-center relative">
      <div className="py-4 px-2 my-4 border-gray-200 border-b-2 w-9/12">
        <div className="font-[poppins]">
          <h1 className="font-bold text-base">{name}</h1>
          <p className="font-medium">₹ {price / 100 || defaultPrice / 100}</p>
          <span className="font-light text-sm">{description}</span>
        </div>
      </div>

      {imageId && (
        <>
          <img
            src={RESTAURANT_IMG + imageId}
            className="w-2/12 h-24 object-cover "
          />

          <button
            className="absolute right-5 bottom-2 px-6 py-1  bg-white font-[#poppins] font-extrabold rounded-md hover:bg-gray-200 text-green-500"
            onClick={handleAdd}
          >
            ADD
          </button>
        </>
      )}
    </div>
  );
};

export default RestaurantItemsCard;

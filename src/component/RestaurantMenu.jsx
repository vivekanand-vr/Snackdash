import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { DELIVERY_ICON } from "../utils/constants";
import RestaurantItems from "./RestaurantItems";
import ShimmerRestaurant from "./ShimmerResturant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) {
    return <ShimmerRestaurant />;
  }

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla: { minDeliveryTime, maxDeliveryTime, lastMileTravelString },
    feeDetails: { totalFee },
  } = restaurantMenu?.cards[2]?.card?.card?.info;

  const restaurantMenus =
    restaurantMenu?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  const finalRestaurantMenus = restaurantMenus.filter(
    (restaurant) =>
      restaurant?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="p-2 w-2/3  mx-auto my-4">
      <div>
        <h1 className="font-bold text-2xl"> {name} </h1>
        <div className="bg-gradient-to-t from-gray-200 to-blue-white  rounded-2xl p-4 ">
          <div className="border-2 bg-white p-4 rounded-2xl">
            <div className="font-semibold space-x-2">
              <i className="fa-solid fa-star text-green-500"></i>
              <span>
                {avgRating} ({totalRatingsString})
              </span>
              <span> {costForTwoMessage} </span>
            </div>
            <p className="text-orange-600 underline font-semibold mb-2 text-sm">
              {cuisines.join(",")}
            </p>
            <div className="space-y-2 font-semibold mb-2">
              <p>Outlet</p>
              <p>
                {minDeliveryTime} - {maxDeliveryTime} mins
              </p>
            </div>
            <hr />
            <div className="mt-2 flex space-x-2">
              <img className="w-5" src={DELIVERY_ICON} alt="" />
              <span>{lastMileTravelString} </span> |
              <span>₹ {totalFee / 100} Delivery fee will apply</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-2">
        {finalRestaurantMenus?.map((item, index) => (
          <RestaurantItems data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

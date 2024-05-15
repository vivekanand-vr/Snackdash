import Restaurant from "./Restaurant";
import SearchRestaurant from "./SearchRestaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantAndFilter from "../hooks/useRestaurantAndFilter";
import InternetConnection from "./InternetConeection";
import useIsOnline from "../hooks/useIsOnline";
import withRestaurantOffer from "./hoc/withRestuarntOffer";

const Body = () => {
  const { restaurants, filterRestaurant, setRestaurants } =
    useRestaurantAndFilter();
  const isOnline = useIsOnline();
  const RestaurantWithOffer = withRestaurantOffer(Restaurant);

  console.log(restaurants);

  return (
    <div
      className={`container bg-amber-50 mx-auto my-10 ${
        !isOnline ? "pointer-events-none" : ""
      }`}
    >
      {!isOnline && <InternetConnection />}
      <div className="w-full my-8">
        <SearchRestaurant
          handleFilter={setRestaurants}
          filterRes={filterRestaurant}
        />
      </div>

      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="container">
          <div className="w-full flex flex-wrap p-5 gap-8">
            {restaurants?.map((restaurant) => (
              <Link
                to={"/restaurant-menu/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                  <RestaurantWithOffer resData={restaurant} />
                ) : (
                  <Restaurant resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;

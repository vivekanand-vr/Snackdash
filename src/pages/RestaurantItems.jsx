import { useState } from "react";
import MenuItemCard from "../component/MenuItemCard";
import downIcon from "../assets/icons/arrow-down.png";
import upIcon from "../assets/icons/arrow-up.png";

const RestaurantItems = ({ data }) => {
  const { title, itemCards } = data?.card?.card;
  const [showItems, setShowItems] = useState(true);

  return (
    <div className="p-4 m-4 shadow-lg cursor-pointer">
      <div onClick={() => setShowItems(!showItems)}>
        <div className="flex justify-between ">
          <span className="font-bold text-lg">
            {title} ({itemCards?.length})
          </span>
          <img
            src={showItems ? downIcon : upIcon}
            alt="down-arrow"
            className="w-4 object-cover"
          />
        </div>
      </div>
      <div>
        {showItems && (
          <div>
            {itemCards.map((item) => (
              <MenuItemCard data={item} key={item?.card?.info?.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantItems;

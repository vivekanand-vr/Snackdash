import { RESTAURANT_IMG } from "../utils/constants";

const Restaurant = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, sla, cuisines } = resData?.info;
  return (
    <div className="w-56 h-80 shadow-xl py-2  cursor-pointer rounded-lg">
      <img
        className="w-full h-1/2 object-cover rounded-xl"
        src={RESTAURANT_IMG + cloudinaryImageId}
      />
      <div className="p-2">
        <h1 className="text-lg font-bold"> {name} </h1>
        <div className="flex space-x-2 font-medium">
          <p>⭐ {avgRating}</p>
          <p> {sla?.slaString} </p>
        </div>
        <div className="text-sm text-gray-500">
          <p> {cuisines.join(", ")} </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

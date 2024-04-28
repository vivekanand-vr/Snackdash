import { useState } from "react";

const SearchRestaurant = ({ handleFilter, filterRes }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    const filter = filterRes.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(search.toLowerCase())
    );

    handleFilter(filter);
  };

  return (
    <div className="items-center border-2  py-3 px-6 flex">
      <input
        type="search"
        placeholder="Search for restaurant"
        className=" outline-none w-full font-semibold"
        onChange={handleInputChange}
      />
      <i
        className="fa-solid fa-magnifying-glass cursor-pointer"
        onClick={handleSearchSubmit}
      ></i>
    </div>
  );
};

export default SearchRestaurant;

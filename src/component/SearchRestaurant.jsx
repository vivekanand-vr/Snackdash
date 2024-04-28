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
    <div className="my-120 mx-auto flex justify-center items-center w-full">
      <input
        type="search"
        placeholder="Search restaurants"
        className="w-[40rem] box-border rounded-l-lg bg-white shadow-md px-12 py-3 border border-gray-600 border-r-0 text-xl font-normal text-black"
        onChange={handleInputChange}
      />
      <button className="text-[21px] font-normal text-base bg-orange-600 rounded-r-lg shadow-md text-white px-6 py-4 ml-[-4px] cursor-pointer border-none outline-none"
       onClick={handleSearchSubmit}> Search </button>
    </div>
  );
};

export default SearchRestaurant;

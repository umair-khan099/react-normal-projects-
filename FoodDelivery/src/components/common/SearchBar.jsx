import React from "react";
import categorys from "../../utils/catogary";

const SearchBar = ({ search, setsearch, filterData }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-2xl">
      {/* Left Section */}
      <div className="flex items-center gap-4 w-full max-w-xl">
        <label className="text-sm font-semibold text-gray-500 whitespace-nowrap">
          Find me
        </label>

        <div className="relative w-full">
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="What would you like to eat today..."
            className="w-full px-5 py-2.5 pr-20 border border-gray-200 rounded-full outline-none 
            focus:ring-2 focus:ring-[#606e03] focus:border-transparent transition text-sm"
          />

          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-1.5 
            bg-[#606e03] text-white text-sm rounded-full hover:opacity-90 transition"
            onClick={() => filterData(search)}
          >
            Search
          </button>
        </div>
      </div>

      {/* Categories */}
      <ul className="flex items-center gap-2 overflow-x-auto no-scrollbar ml-6">
        {categorys.map((category, i) => (
          <li
            key={i}
            className="px-4 py-1.5 text-sm font-medium text-[#606e03] bg-[#f1f2ec] 
            rounded-full cursor-pointer whitespace-nowrap
            hover:bg-[#606e03] hover:text-white transition"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

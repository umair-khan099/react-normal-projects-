import React from "react";
import categorys from "../../utils/catogary";

const SearchBar = ({ filterData }) => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-[#ffffff] shadow-md rounded-xl">
      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-600">Find me</label>
        <input
          className="px-4 py-2 w-74 border border-[#3e460a56] rounded-lg outline-none focus:ring-2 focus:ring-[#606e03] focus:border-transparent transition "
          type="text"
          placeholder="What would you like to eat today"
        />
      </div>

      <ul className="flex items-center gap-3">
        {categorys.map((category) => (
          <li
            onClick={() => filterData(category)}
            key={category}
            className="px-4 py-2 text-sm text-[#606e03] font-medium bg-[#d6d6d4] rounded-full cursor-pointer hover:bg-[#606e03] hover:text-white transition"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MoviesCard = ({ title, posterPath, overview }) => {
  return (
    <div className="min-w-[180px] bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <img
        className="w-full h-64 object-cover"
        src={IMG_CDN_URL + posterPath}
        alt={title}
      />

      <div className="p-3">
        <h2 className="text-sm font-semibold line-clamp-1">{title}</h2>

        <p className="text-xs text-gray-400 mt-1 line-clamp-2">{overview}</p>
      </div>
    </div>
  );
};

export default MoviesCard;

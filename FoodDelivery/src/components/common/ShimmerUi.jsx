import React from "react";

const ShimmerCard = () => {
  return (
    <div className="relative min-w-[300px] rounded-xl overflow-hidden shadow-lg animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-[200px] bg-gray-300"></div>

      {/* Overlay skeleton */}
      <div className="absolute bottom-0 w-full p-4 bg-white/20 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>

            {/* Text */}
            <div className="flex flex-col gap-1">
              <div className="w-24 h-3 bg-gray-300 rounded"></div>
              <div className="w-32 h-2 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Icon */}
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* Offer */}
        <div className="w-40 h-2 bg-gray-300 rounded mt-2"></div>
      </div>
    </div>
  );
};

const RestaurantsShimmer = () => {
  return (
    <div className="py-6 px-6">
      {/* Header skeleton */}
      <div className="flex items-center justify-between">
        <div className="w-72 h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-40 h-10 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>

      {/* Cards */}
      <div className="flex gap-6 py-6 overflow-x-auto">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <ShimmerCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantsShimmer;

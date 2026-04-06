import React from "react";
import { ChevronRight } from "lucide-react";

const RestaurantsCard = ({ data }) => {
  return (
    <div className="py-6 px-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Choose From Trusted Restaurants in{" "}
          <span className="text-[#606e03] font-bold">One Single Order</span>
        </h1>

        <button className="px-5 py-2 bg-[#606e03] rounded-lg text-white font-medium hover:opacity-90">
          Explore Restaurants
        </button>
      </div>

      {/* Cards */}
      <div className="flex gap-6 py-6 overflow-x-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative min-w-[300px] rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={item.img}
              alt=""
              className="w-full h-[200px] object-cover"
            />

            {/* Overlay (Glassmorphism) */}
            <div
              className="absolute bottom-0 w-full p-4 
              bg-white/20 backdrop-blur-md border-t border-white/30"
            >
              <div className="flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-2">
                  {item.logo && (
                    <img
                      src={item.logo}
                      className="w-8 h-8 rounded-full object-cover"
                      alt=""
                    />
                  )}

                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">
                      {item.name}
                    </span>
                    <span className="text-white/80 text-xs">{item.desc}</span>
                  </div>
                </div>

                {/* Right Icon */}
                <ChevronRight className="text-white" size={18} />
              </div>

              {/* Offer */}
              <p className="text-white text-xs mt-2">{item.offer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsCard;

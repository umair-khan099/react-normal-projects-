import React from "react";

const Home = ({ recipes }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🍽️ Recipe Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-3">
              <h2 className="text-lg font-semibold text-gray-800">
                {recipe.name}
              </h2>

              {/* Instructions (short) */}
              <p className="text-sm text-gray-600 line-clamp-2">
                {recipe.instructions?.[0]}
              </p>

              {/* Rating + Time */}
              <div className="flex justify-between items-center text-sm text-gray-700">
                <span className="font-medium">⭐ {recipe.rating}</span>

                <div className="flex gap-2 text-xs">
                  <span className="bg-purple-100 px-2 py-1 rounded">
                    Prep: {recipe.prepTimeMinutes}m
                  </span>
                  <span className="bg-blue-100 px-2 py-1 rounded">
                    Cook: {recipe.cookTimeMinutes}m
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const GptSearch = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Search Section */}
      <div className="flex flex-col items-center justify-center pt-32 px-4">
        
        <h1 className="text-4xl font-bold mb-6 text-center">
          What do you want to watch?
        </h1>

        <div className="w-full max-w-2xl flex bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20">
          <input
            type="text"
            placeholder="Search movies, genres, moods..."
            className="w-full px-4 py-3 bg-transparent outline-none text-white placeholder-gray-300"
          />
          <button className="bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="mt-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Suggestions</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          {/* Dummy cards */}
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg h-40 flex items-center justify-center hover:scale-105 transition cursor-pointer"
              >
                <span className="text-sm text-gray-300">
                  Movie {index + 1}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
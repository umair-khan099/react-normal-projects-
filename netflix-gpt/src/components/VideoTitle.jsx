import React from "react";

const VideoTitle = ({ title, overview ,id }) => {
  return (
    <div className="pt-36 px-20 text-white absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/70 to-transparent">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4 leading-tight">{title}</h1>

        <p className="text-lg text-gray-300 mb-6 line-clamp-3">{overview}</p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-opacity-80 transition">
            ▶ Play
          </button>

          <button className="bg-gray-600/70 px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";
import useVideoBackground from "../hook/useTrailerVideo";
import { useSelector } from "react-redux";


function VideoBackground({movieId}) {
  useVideoBackground(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  if (!trailer) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <iframe
        className="w-full h-full scale-150 pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailer.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" +
          trailer.key
          
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;

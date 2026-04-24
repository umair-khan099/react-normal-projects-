import React from "react";
import MoviesCard from "./MoviesCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4">{title}</h1>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {movies?.map((movie) => (
          <MoviesCard
            key={movie.id}
            title={movie.original_title}
            posterPath={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

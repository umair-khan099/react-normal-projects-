import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hook/usePopularMovies";
import useUpcomingMovies from "../hook/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGptSreach = useSelector((store) => store.gpt.showGptSerch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSreach ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;

import React from "react";
import SearchBar from "../SearchBar";
import OffersBanner from "../../OffersBanner";
import RestaurantsCard from "../RestaurantsCard";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <OffersBanner />
      <RestaurantsCard />
    </div>
  );
};

export default Body;

import React, { useState } from "react";
import SearchBar from "../common/SearchBar";
import OffersBanner from "../../OffersBanner";
import RestaurantsCard from "../RestaurantsCard";
import restorentData from "../../utils/RestoratnData";
const Body = () => {
  const [data, setdata] = useState(restorentData);
  const [filteredData, setFilteredData] = useState([...data]);

  const filterData = (category) => {
    console.log(category);
    let filtered = data.filter((items) => category == items.category);
    setFilteredData(filtered);
  };
  return (
    <div>
      <SearchBar filterData={filterData} />
      <OffersBanner />
      <RestaurantsCard data={filteredData} />
    </div>
  );
};

export default Body;

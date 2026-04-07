import React, { useEffect, useState } from "react";
import SearchBar from "../common/SearchBar";
import OffersBanner from "../../OffersBanner";
import RestaurantsCard from "../RestaurantsCard";
// import restorentData from "../../utils/RestoratnData";
const Body = () => {
  const [data, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [search, setsearch] = useState("");
  console.log(search);
  const fetchData = async () => {
    const res = await fetch("https://www.eatsure.com/v1/api/get_all_brands");
    const json = await res.json();

    setdata(json?.data?.data);
    setFilteredData(json?.data?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = (search) => {
    console.log(search);
    let filtered = data.filter((items) =>
      items.brand_name.toLowerCase().includes(search),
    );
    // setdata(filtered);
    setFilteredData(filtered);
  };

  return (
    <div>
      <SearchBar
        search={search}
        setsearch={setsearch}
        filterData={filterData}
      />
      <OffersBanner />
      <RestaurantsCard data={filteredData} />
    </div>
  );
};

export default Body;

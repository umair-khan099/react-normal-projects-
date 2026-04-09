import SearchBar from "../components/common/SearchBar";
import OffersBanner from "../components/OffersBanner";
import RestaurantsCard from "../components/RestaurantsCard";
import useRestaurants from "../utils/useRestautants";

const Body = () => {
  const { search, setSearch, filteredData } = useRestaurants();

  return (
    <div>
      <SearchBar search={search} setsearch={setSearch} />
      <OffersBanner />
      <RestaurantsCard data={filteredData} />
    </div>
  );
};

export default Body;

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7030425&lng=77.430373&carousel=true&third_party_vendor=1"
      );
      const jsonData = await data.json();
      console.log(jsonData);

      setRestaurantList(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch {
      setRestaurantList(resList?.restaurants);
      setFilteredList(resList?.restaurants);
    }
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              console.log(searchText);

              const searchedList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-top"
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredList(filterList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;

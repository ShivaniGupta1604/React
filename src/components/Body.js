import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  // For static data from mockData.js
  // const [listOfRestaurants, setListOfRestaurant] = useState([resList]);
  // const [filteredRestaurants, setFilteredRestaurant] = useState([resList]);

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  //console.log("IDs in data:", resList.map(item => item.info.id));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
  
    //console.log(json);
  
    const restaurants =
      json?.data?.cards?.find(
        (c) =>
          c?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
    if (restaurants) {
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } else {
      console.error("Could not find restaurant data in API response");
      setListOfRestaurant([]); // fallback to empty list to avoid crash
    }
  };


  //console.log('lis of rest', listOfRestaurants);

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you are offline!! Please check you internet connection</h1>

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 w-48 bg-gray-100 m-4 rounded-lg  hover:bg-gray-300"
            onClick={() => {
              //console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div >
        <div className="m-4 p-4 w-60 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-300"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../Utils/constants";

const RestaurantMenu = () => {
  let [resInfo, setResInfo] = useState(null);


  const params = useParams();
  console.log(params);

  const {resId} = useParams();


  console.log(resId);
  console.log(MENU_URL + resId)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };

  //   console.log(resInfo);
  console.log(resInfo?.cards[2]?.card?.card?.info);

  // Show loading shimmer while data is null
  if (!resInfo) return <Shimmer />;

  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;

  if (!restaurantInfo) {
    return <div>Could not load restaurant information.</div>;
  }

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  console.log("resInfo",resInfo)

  const obj = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

//   console.log("value", resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card)
//   console.log( "ItemCards", itemCards);

//   if (!itemCards) return <Shimmer />;


  function findItemCards(obj) {
    if (typeof obj !== 'object' || obj === null) return null;
  
    if ('itemCards' in obj) {
      return obj.itemCards;
    }
  
    for (const key in obj) {
      const found = findItemCards(obj[key]);
      if (found) return found;
    }
  
    return null;
  }
  
  const itemCards = findItemCards(resInfo);
  console.log("itemCards found:", itemCards);
  

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
            <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

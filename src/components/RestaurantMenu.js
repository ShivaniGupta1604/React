import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //const params = useParams();
  //console.log(params);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const handleShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  //   console.log(resInfo);
  //console.log(resInfo?.cards[2]?.card?.card?.info);

  // Show loading shimmer while data is null
  if (!resInfo) return <Shimmer />;

  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;

  if (!restaurantInfo) {
    return <div>Could not load restaurant information.</div>;
  }

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  //console.log("resInfo",resInfo)

  const obj =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  //console.log("resInfo", resInfo);

  //   console.log("value", resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card)
  //   console.log( "ItemCards", itemCards);

  //   if (!itemCards) return <Shimmer />;

  function findItemCards(obj) {
    if (typeof obj !== "object" || obj === null) return null;

    if ("itemCards" in obj) {
      return obj.itemCards;
    }

    for (const key in obj) {
      const found = findItemCards(obj[key]);
      if (found) return found;
    }

    return null;
  }



  //const itemCards = findItemCards(resInfo);
  //console.log("itemCards found:", itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-3xl">{name}</h1>
      <p className="font-bold my-3 text-">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => handleShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

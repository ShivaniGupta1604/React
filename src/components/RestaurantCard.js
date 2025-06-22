import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  //console.log(props);
  const { resData } = props;

  const {
    cloudinaryImageId,
    cuisines,
    avgRating,
    name,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div
      className="m-4 p-3 w-[310px] rounded-lg bg-gray-100 hover:bg-gray-300"
    >
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />

      <h3 className="font-bold py-3">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating}</h4>
      <h4 className="costForTwo">{costForTwo}</h4>
      <h4 className="time">{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;

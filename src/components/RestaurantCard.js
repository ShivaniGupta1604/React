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
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />

      <h3 className="resName">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating}</h4>
      <h4 className="costForTwo">{costForTwo}</h4>
      <h4 className="time">{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;

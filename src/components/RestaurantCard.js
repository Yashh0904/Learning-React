import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = resData;

  return (
    <div className="restaurant-card">
      <img className="image" src={CARD_IMG_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla.deliveryTime} MINS</h5>
    </div>
  );
};

export default RestaurantCard;

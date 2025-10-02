import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;

  return (
    <div className="restaurant-card">
      <img className="image" src={CARD_IMG_URL}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h5>{deliveryTime} MINS</h5>
    </div>
  );
};

export default RestaurantCard;

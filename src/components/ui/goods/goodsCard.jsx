import React from "react";
import "./goodsCard.scss"
import flower from "../../../assets/img/selected-flower/flower.png";
import cartShop from "../../../assets/svg/cart-shopping.svg";
import { Link } from "react-router-dom";
import { PATHS } from "../../../utils/urls";

export const GoodsCard = ({ name, price }) => {
  return (
    <Link to={PATHS.flower}>
      <div className="flexContainer">
        <div className="goodsCard">
          <img className="goodsCard__img" src={flower} alt="flower is lost.." />
          <h6 className="goodsCard__name">{name}</h6>
          <span className="goodsCard__price">{price}$</span>
          <button href="/" className="goodsCard__addToCard"><img
            src={cartShop}
            alt="cart"
          />Add to cart</button>
        </div>
      </div>
    </Link>
  );
};

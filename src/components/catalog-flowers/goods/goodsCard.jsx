import React from "react";
import { NavLink } from "react-router-dom";

import { PATHS } from "../../../utils/urls";
import { Button } from "../../ui/button/button";
import flower from "../../../assets/img/selected-flower/flower.png";
import cartImg from "../../../assets/svg/cart-shopping.svg";

import "./goodsCard.scss";

export const GoodsCard = () => {
  return (
    <NavLink to={PATHS.flower}>
      <div className="flexContainer">
        <div className="goodsCard">
          <img
            className="goodsCard__img"
            src={flower}
            alt="flower is lost.."
          />
          <h6 className="goodsCard__name">Flower's Name</h6>
          <div className="goodsCard__bottom">
            <span className="goodsCard__price">0$</span>
            <div className="goodsCard__btn">
              <img
                src={cartImg}
                alt="cartImage"
              />
              <Button
                className="button-primary"
                text="Add to cart"
              />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

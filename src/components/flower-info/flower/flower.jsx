import React from "react";

import flowerImg from "../../../assets/img/flower-info/flower.png";
import starImg from "../../../assets/svg/star.svg";
import { Button } from "../../ui/button/button";

export const Flower = ({ flower }) => {
  return (
    <div className="flower-info__wrapper">
      <div className="flower-info__img">
        <img
          src={flowerImg}
          alt="flower"
          width={356}
          height={326}
        />
      </div>
      <div className="flower-info__description">
        <h6 className="title-h6">Sun flower</h6>
        <p className="flower-info__text">
          Make every day brighter with our abundant bouquet of fresh sunflowers.
          These radiant, long-lasting blooms bring that
          just-picked-from-the-meadow feeling to birthdays, get well wishes, or
          any day you want to make someone you care about smile.
        </p>

        <div className="flower-info__rating rating-flower">
          <div className="rating-flower__stars">
            <img
              src={starImg}
              alt="star"
            />
            <span> 4.5</span> / 5
          </div>
          <div className="rating-flower__count">
            (<span>101</span> people opinion)
          </div>
        </div>

        <div className="flower-info__price price-flower">
          <div className="price-flower__price">
            <span>100</span>$ / each
          </div>

          <div className="price-flower__buttons">
            <div className="price-flower__favorite">
              <Button
                type="button"
                className="button-add"
                text="Add to favorite"
              />
            </div>
            <div className="price-flower__cart">
              
              <Button
                type="button"
                className="button-add"
                text="Add to cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

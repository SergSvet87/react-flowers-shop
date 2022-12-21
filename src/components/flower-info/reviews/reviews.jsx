import React from "react";

import avatarImg from "../../../assets/img/flower-info/avatar.jpg";
import starImg from "../../../assets/svg/star.svg";

import "./reviews.scss";

export const Reviews = () => {
  const handleClick = () => {};

  return (
    <div className="flower-info__reviews reviews-flower">
      <div className="reviews-flower__title">
        <h5 className="title-h5">Reviews</h5>
        <button
          className="reviews-flower__button button-primary"
        >Add a review</button>
      </div>
      <ul className="reviews-flower__reviews">
        <li className="reviews-flower__review review">
          <img
            className="review__avatar"
            src={avatarImg}
            alt="avatar"
          />
          <div className="review__description">
            <h5 className="title-h5">Atena</h5>
            <p>
              This flower is the best gift i’ve ever got Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Illo, hic ratione, neque
              commodi, harum ab recusandae qui perspiciatis nihil culpa
              reiciendis fugit quia deserunt doloribus sint a quaerat temporibus
              voluptates aperiam accusantium itaque. Rem, voluptate? Iure qui ea
              repellat sequi?
            </p>
            <div className="review-rating">
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
            </div>
          </div>
        </li>

        <li className="reviews-flower__review review">
          <img
            className="review__avatar"
            src={avatarImg}
            alt="avatar"
          />
          <div className="review__description">
            <h5 className="title-h5">Atena</h5>
            <p>This flower is the best gift i’ve ever got</p>
            <div className="review-rating">
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src={starImg}
                  alt="star"
                />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

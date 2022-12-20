import React from "react";
import { NavLink } from "react-router-dom";

import flowerImg from "../../../assets/img/flower-info/flower.png";

import "./liked.scss";
export const Liked = () => {
  return (
    <div className="flower-info__liked liked-flower">
      <h5 className="title-h5">Maybe you like...</h5>
      <ul className="liked-flower__list list-flowers">
        <li className="list-flowers__item">
          <NavLink>
            <img
              src={flowerImg}
              alt="flower"
              width={240}
              height={225}
            />
          </NavLink>
        </li>
        <li className="list-flowers__item">
          <NavLink>
            <img
              src={flowerImg}
              alt="flower"
              width={240}
              height={225}
            />
          </NavLink>
        </li>
        <li className="list-flowers__item">
          <NavLink>
            <img
              src={flowerImg}
              alt="flower"
              width={240}
              height={225}
            />
          </NavLink>
        </li>
        <li className="list-flowers__item">
          <NavLink>
            <img
              src={flowerImg}
              alt="flower"
              width={240}
              height={225}
            />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

import flowerImg from "../../../assets/img/flower-info/flower.png";

import "./liked.scss";
export const Liked = () => {
  return (
    <div className="flower-info__liked liked-flower">
      <h5 className="title-h5">Maybe you like...</h5>
      <ul className="liked-flower__list list-flowers">
        <li className="list-flowers__item">
          <Link>
            <img
              src={flowerImg}
              alt="flower"
              width={240}
              height={225}
            />
          </Link>
        </li>
        <li className="list-flowers__item">
          <Link>
            <img
              src={flowerImg}
              alt="flower"
              width={240}
              height={225}
            />
          </Link>
        </li>
        <li className="list-flowers__item">
          <Link>
            <img
              src={flowerImg}
              alt="flower"
              width={240}
              height={225}
            />
          </Link>
        </li>
        <li className="list-flowers__item">
          <Link>
            <img
              src={flowerImg}
              alt="flower"
              width={240}
              height={225}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

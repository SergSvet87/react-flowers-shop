import React from "react";

import sortImg from "../../../assets/svg/arrow-down-short.svg";
import filterImg from "../../../assets/svg/filter.svg";
import { Button } from "../button/button";

import "./bar.scss";

export const Bar = () => {
  return (
    <div className="bar">
      <div className="bar__sort">
        <img
          src={filterImg}
          alt=""
        />
        <Button
          className="bar__button"
          type="button"
          text="Filtering"
        />
      </div>
      <div className="bar__search">
        <form
          action=""
          className="bar__form"
        >
          <input
            type="search"
            placeholder="Search.."
          />
        </form>
      </div>
      <div className="bar__filter">
        <img
          src={sortImg}
          alt=""
        />
        <Button
          className="bar__button"
          type="button"
          text="Sorting"
        />
      </div>
    </div>
  );
};

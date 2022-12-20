import React from "react";

import { Flower } from "../flower-info/flower/flower";
import { Reviews } from "../flower-info/reviews/reviews";
import { Liked } from "../flower-info/liked/liked";

import "../flower-info/flower-info.scss";

export const FlowerInfo = ({ flower }) => {
  return (
    <section className="flower-info">
      <div className="container">
        <Flower flower={flower} />
        <div className="flower-info__service">
          <Reviews />
          <Liked />
        </div>
      </div>
    </section>
  );
};

import React from "react";

import { GoodsCard } from "./goods/goodsCard";

import "./catalog.scss";

export const Catalog = () => {
  let arr = Array(10).fill("");
  let content = arr.map((elem, index) => <GoodsCard key={index} />);
  return <div className="catalog">{content}</div>;
};

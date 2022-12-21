import React from "react";
import "./home.scss";
import { Post } from "./Post/post";
import { GoodsCard } from "../../ui/goods/goodsCard";
import { MainTitle } from "./MainTitle/MainTitle";

let arr = Array(4).fill({ name: "Flower's Name", price: 0 });
let bestSellers = arr.map((elem) => (
  <div className="col-3">
    <GoodsCard
      name={elem.name}
      price={elem.price}
    />
  </div>
));

export const Home = () => {
  return (
    <div className="container">
      <MainTitle />
      <h2 className="title-h2">Best selers</h2>
      <div className="row">{bestSellers}</div>
      <h2 className="title-h2">Latest posts</h2>
      <div className="row">
        <div className="col-4">
          <Post />
        </div>
        <div className="col-4">post</div>
        <div className="col-4">post</div>
      </div>
      <h2 className="title-h2">Comments</h2>
      <div className="row">
        <div className="col-4">Comment</div>
        <div className="col-4">Comment</div>
        <div className="col-4">Comment</div>
      </div>
    </div>
  );
};

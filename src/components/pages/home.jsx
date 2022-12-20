import React from "react";

import { Post } from "../home/Post/post";

export const Home = () => {
  return (
    <div className="container">
      <div>Best selers</div>
      <div className="row">
        <div className="col-3">picture</div>
        <div className="col-3">picture</div>
        <div className="col-3">picture</div>
        <div className="col-3">picture</div>
      </div>
      <div>Latest posts</div>
      <div className="row">
        <div className="col-4">
          <Post />
        </div>
        <div className="col-4">post</div>
        <div className="col-4">post</div>
      </div>
      <div>Comments</div>
      <div className="row">
        <div className="col-4">Comment</div>
        <div className="col-4">Comment</div>
        <div className="col-4">Comment</div>
      </div>
    </div>
  );
};

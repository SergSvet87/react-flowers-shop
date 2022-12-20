import React from "react";

import { Post } from "../home/Post/post";

export const Home = () => {
  return (
    <div className="container">
      <h2 className="title-h2">Best selers</h2>
      <div className="row">
        <div className="col-3">picture</div>
        <div className="col-3">picture</div>
        <div className="col-3">picture</div>
        <div className="col-3">picture</div>
      </div>

      <h2 className="title-h2">Latest posts</h2>
      <div></div>
      <div className="row">
        <div className="col-4">
          <Post />
        </div>
        <div className="col-4">post</div>
        <div className="col-4">post</div>
      </div>

      <h2 className="title-h2">Comments</h2>Comments
      <div className="row">
        <div className="col-4">Comment</div>
        <div className="col-4">Comment</div>
        <div className="col-4">Comment</div>
      </div>
    </div>
  );
};

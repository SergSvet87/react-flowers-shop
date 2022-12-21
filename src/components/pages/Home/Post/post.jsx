import React from "react";
import "./post.scss";
import postImg from "../../../../assets/img/post-img/postImg.png";
import ava from "../../../../assets/img/ava/Ava.png";
import eye from "../../../../assets/svg/eye.svg";
import hurt from "../../../../assets/svg/grey_heart.svg";

export const Post = () => {
  return (
    <div className="container post">
      <div className="row post_header">
        <div className="col-6 ">
          <img src={ava} alt="avatar" /> <b>Emily</b>
        </div>
        <div className="col-6 post_header-data">2022/22/8</div>
      </div>
      <div className="post_image">
        <img src={postImg} alt="design" />
      </div>
      <div className="post_description">
        <h6>Best flowers for inside home</h6>
        <p>
          All the flowers are best for your lovly house
          <br /> just get the one you love the most 😊
        </p>
        <div className="row post_footer">
          <div className="col-6 icons">
            <img src={hurt} alt="hurt" className="hurt" />
            15
            <img src={eye} alt="eye" className="eye" /> 2001
          </div>
          <div className="col-6">
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

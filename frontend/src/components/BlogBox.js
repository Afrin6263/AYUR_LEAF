import React from "react";

const BlogBox = ({ imageUrl, title, content }) => {
  return (
    <div className="blog-box">
      <div className="blog-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="blog-details">
        <h4>{title}</h4>
        <p> {content}</p>
        {/* eslint-disable-next-line */}
        <a href="javascript:void(0)">CONTINUE READING</a>
      </div>
    </div>
  );
};

export default BlogBox;

import React from "react";
import "./Post.css";

function PostImage({ image}) {
  return (
    <div className="postImage">
        <img src={image} alt="noimage" />
    </div>
  );
}

export default PostImage;

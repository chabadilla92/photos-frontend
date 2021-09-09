import React from "react";
import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////

  return (
    <div className="imageWrapper">
      <Link to={`/post/${post.id}`}>
        <img src={post.image}/>
      </Link>
    </div>
  );
};

export default Post;
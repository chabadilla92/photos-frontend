import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, match, edit, deletePhoto }) => {
  const id = parseInt(match.params.id); //get the id from url param
  const post = posts.find((post) => post.id === id);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div className="singlepost">
      <img src={post.image}/>
      <div className="divbuttons">
        <button onClick={(event) => edit(post)}>Edit</button>
        <button onClick={(event) => deletePhoto(post)}>Delete</button>
        <Link to="/">
            <button className="goback">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
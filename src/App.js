// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import Nav from "./components/nav"

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

 

  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://ca-photos.herokuapp.com/photos/";

  // State to Hold The List of Posts
  const [posts, setPosts] = useState([]);

  // an object that represents a null todo
const nullPhoto = {
  name: "",
  image: "",
};

const [targetPhoto, setTargetPhoto] = useState(nullPhoto);


  //////////////
  // Functions
  //////////////

  // Function to get list of photos from API
const getPhotos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data);
};

// Function to add photo from form data
const addPhotos = async (newPhoto) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPhoto),
  });

  // get updated list of todos
  getPhotos();
};

// Function to select photo to edit
const getTargetPhoto = (photo) => {
  setTargetPhoto(photo);
  props.history.push("/edit");
};

// Function to edit photo on form submission
const updatePhoto = async (photo) => {
  const response = await fetch(url + photo.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(photo),
  });

  // get updated list of photos
  getPhotos();
};

// Function to edit todo on form submission
const deletePhoto = async (photo) => {
  const response = await fetch(url + photo.id + "/", {
    method: "delete",
  });

  // get updated list of todos
  getPhotos();
  props.history.push("/");
};


  //////////////
  // useEffects
  //////////////

  // useEffect to get list of photos when page loads
useEffect(() => {
  getPhotos();
}, []);

  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div>
      <Switch>
      <Route
        exact
        path="/"
        render={(routerProps) => <AllPosts {...routerProps} posts={posts} />}
      />
      <Route
        path="/post/:id"
        render={(routerProps) => (
      <SinglePost {...routerProps} posts={posts} edit={getTargetPhoto} deletePhoto={deletePhoto}
      />
        )}
      />
      <Route
        path="/new"
        render={(routerProps) => (
        <Form
          {...routerProps}
          initialTodo={nullPhoto}
          handleSubmit={addPhotos}
          buttonLabel="create photo"
        />
        )}
      />
      <Route
        path="/edit"
        render={(routerProps) => (
        <Form
          {...routerProps}
          initialTodo={targetPhoto}
          handleSubmit={updatePhoto}
          buttonLabel="update photo"
        />
        )}
      />
      </Switch>
      <Nav />
    </div>
  );
}

export default App;
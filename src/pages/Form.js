// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialTodo, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialTodo state
  const [formData, setFormData] = useState(initialTodo);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <div className="formdiv">
    <form onSubmit={handleSubmisson}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.image}
        name="image"
      />
      <input type="submit" value={buttonLabel} />
    </form>
    </div>
  );
};

export default Form;
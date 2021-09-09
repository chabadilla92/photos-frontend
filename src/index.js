import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "milligram";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route component={App} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
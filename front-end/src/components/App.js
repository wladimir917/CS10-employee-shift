import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../styles/App.css";

// import {
//   Billing,
//   Calendar,
//   Dashboard,
//   Employees,
//   Landing,
//   Settings,
//   Signin,
// } from "./Pages";
import Landing from "./Pages/Landing";

// TODO: Add routing

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

export default App;

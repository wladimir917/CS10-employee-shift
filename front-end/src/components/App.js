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
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/employees" component={Employees} />
        <Route exact path="/settings" component={Settings} />
      </div>
    );
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import "./styles/index.css";

import { Provider } from "react-redux";
import configureStore from "./store/store.js";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

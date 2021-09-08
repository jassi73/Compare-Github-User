import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import User from "./Components/User";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Provider store={store}>
        <Route path="/" component={App} exact />
        <Route path="/user" component={User} exact />
      </Provider>
    </Switch>
  </Router>,
  document.getElementById("root")
);

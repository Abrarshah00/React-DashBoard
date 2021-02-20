import React from "react";
import Login from "./pages/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

import "./App.scss";
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

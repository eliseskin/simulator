import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Deal from "../components/Deal";
import TypeDeal from "../components/TypeDeal";

const RoutesHome = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/start">
        <Deal />
      </Route>
      <Route exact path="/start/selectDeal">
        <TypeDeal />
      </Route>
    </Switch>
  </Router>
);

export default RoutesHome;

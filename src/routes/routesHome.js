import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Deal from "../components/Deal";
import TypeDeal from "../components/TypeDeal";
import Panel from "../components/panel/index";
import Activo from "../components/panel/activo/Activo";

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
      <Route exact path="/panel">
        <Panel />
      </Route>
      <Route exact path="/panel/activo">
        <Activo />
      </Route>
    </Switch>
  </Router>
);

export default RoutesHome;

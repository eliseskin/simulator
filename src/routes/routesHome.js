import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Deal from "../components/Deal";
import TypeDeal from "../components/TypeDeal";
import Panel from "../components/panel/index";
import Activo from "../components/panel/activo/Activo";
import Inversiones from "../components/panel/inversiones/Inversiones";
import Resumen from "../components/panel/resumcosto/index";
import Salarios from "../components/panel/costofijo/salarios";

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
      <Route exact path="/panel/inversiones">
        <Inversiones />
      </Route>
      <Route exact path="/panel/coste">
        <Resumen />
      </Route>
      <Route exact path="/panel/salarios">
        <Salarios />
      </Route>
    </Switch>
  </Router>
);

export default RoutesHome;

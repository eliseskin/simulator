import React from "react";
import Navigation from "../../routes/navigation";
import { Switch, Route } from "react-router-dom";
import Activo from "../panel/activo/Activo";

const Panel = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/activo">
          <Activo />
        </Route>
      </Switch>
    </>
  );
};

export default Panel;

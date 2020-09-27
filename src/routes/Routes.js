import React from "react";
import { Switch, Route } from "react-router-dom";
import BottomBarHome from "../components/Home/BottomBarHome";
import BottomBarPC from "../components/SistemaPC/BottomBarPC";
import Nosotros from "../pages/Home/Nosotros";
import SistemaPC from "../pages/SistemaPC/VerPC";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <BottomBarHome />
      </Route>
      <Route path="/nosotros" exact>
        <Nosotros />
        <BottomBarHome />
      </Route>
      <Route path="/sistema-computo" exact>
        <SistemaPC />
        <BottomBarPC />
      </Route>
      <Route path="*">
        <h1>Error 404</h1>
      </Route>
    </Switch>
  );
}
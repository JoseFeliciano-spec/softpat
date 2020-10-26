import React, { useState, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import BottomBarHome from "../components/Home/BottomBarHome";
import BottomBarPC from "../components/SistemaPC/BottomBarPC";
import Nosotros from "../pages/Home/Nosotros";
/* import SistemaPC from "../pages/SistemaPC/VerPC"; */

import RegistroPC from "../pages/SistemaPC/RegistroPC";
import EditarPC from "../pages/SistemaPC/EditarPC";

const SistemaPC = lazy(()=>import("../pages/SistemaPC/VerPC"));

export default function Routes(props) {
  const { open, setOpen, user } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact>
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
          <BottomBarPC open={open} setOpen={setOpen} user={user} />
        </Route>
        <Route path="/sistema-computo/editar" exact>
          <EditarPC />
          <BottomBarPC open={open} setOpen={setOpen} user={user} />
        </Route>
        <Route path="*">
          <h1>Error 404</h1>
        </Route>
      </Switch>
    </Suspense>
  );
}

import React from "react";
import { Switch, Route } from "react-router-dom";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/sistema-computo" exact>
        <h1>Sistema cómputo</h1>
      </Route>
      <Route path="*">
        <h1>Error 404</h1>
      </Route>
    </Switch>
  );
}

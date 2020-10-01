import React, { useState } from "react";
import "./BottomBarHome.scss";
import AppBar from "@material-ui/core/AppBar";
import FavoriteIcon from "@material-ui/icons/Favorite";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

function BottomBarHome() {
  let history = useHistory();

  const handlerCambiar = (e) => {
    let id = e.currentTarget.id;
    switch (id) {
      case "inicio":
        history.push("/");
        break;
      case "nosotros":
        history.push("/nosotros");
        break;
    }
  };

  return (
    <div>
      <AppBar position="fixed" color="primary" className="bottombar">
        <BottomNavigation showLabels className="pieBar shadow-lg rounded">
          <BottomNavigationAction
            label="Inicio"
            id="inicio"
            onClick={handlerCambiar}
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="¿Quienes somos?"
            id="nosotros"
            onClick={handlerCambiar}
            icon={<FavoriteIcon />}
          />
        </BottomNavigation>
      </AppBar>
    </div>
  );
}
export default withRouter(BottomBarHome);

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link, withRouter } from "react-router-dom";
import "./BottomBarPC.scss";

export default function BottomBarPC() {
  return (
    <div>
      <AppBar position="fixed" color="primary" className="bottombarPC">
        <BottomNavigation showLabels className="pieBarPC shadow-lg rounded">
          <BottomNavigationAction
            component={Link}
            to="/sistema-computo"
            label="Ver"
            icon={<VisibilityIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/nosotros"
            label="Editar"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            component={Link}
            label="Crear"
            icon={<FavoriteIcon />}
          />
        </BottomNavigation>
      </AppBar>
    </div>
  );
}

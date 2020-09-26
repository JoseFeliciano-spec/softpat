import React, { useState } from "react";
import "./BottomBarHome.scss";
import AppBar from "@material-ui/core/AppBar";
import FavoriteIcon from "@material-ui/icons/Favorite";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link, withRouter } from "react-router-dom";

function BottomBarHome() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <AppBar value={0} position="fixed" color="primary" className="bottombar">
        <BottomNavigation showLabels className="pieBar shadow-lg rounded">
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Inicio"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/nosotros"
            label="¿Quienes somos?"
            icon={<FavoriteIcon />}
          />
        </BottomNavigation>
      </AppBar>
    </div>
  );
}
export default withRouter(BottomBarHome);

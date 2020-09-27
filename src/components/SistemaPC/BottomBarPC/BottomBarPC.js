import React from "react";
import AppBar from "@material-ui/core/AppBar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { NavLink, withRouter } from "react-router-dom";
import "./BottomBarPC.scss";

function BottomBarPC() {
  return (
    <div>
      <AppBar position="fixed" color="primary" className="bottombarPC">
        <BottomNavigation showLabels className="pieBarPC shadow-lg rounded">
          <BottomNavigationAction
            component={NavLink}
            to="/"
            label="Ver"
            icon={<VisibilityIcon />}
          />
          <BottomNavigationAction
            component={NavLink}
            to="/"
            label="Editar"
            icon={<CreateIcon />}
          />
          <BottomNavigationAction label="Crear" icon={<AddCircleIcon />} />
        </BottomNavigation>
      </AppBar>
    </div>
  );
}
export default withRouter(BottomBarPC);

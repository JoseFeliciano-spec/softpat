import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./BottomBarPC.scss";
import RegistroPC from "../../../pages/SistemaPC/RegistroPC";

function BottomBarPC() {
  const [open, setOpen] = useState(false);

  let history = useHistory();
  const onClick = (e) => {
    history.push("/");
  };

  const handlerCambiar = (e) => {
    let id = e.currentTarget.id;
    switch (id) {
      case "verBarraPC":
        history.push("/sistema-computo");
        break;
      case "editarBarraPC":
        history.push("/");
        break;
    }
  };

  const handlerOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="fixed" color="primary" className="bottombarPC">
        <BottomNavigation showLabels className="pieBarPC shadow-lg rounded">
          <BottomNavigationAction
            label="Ver"
            onClick={handlerCambiar}
            id="verBarraPC"
            icon={<VisibilityIcon />}
          />
          <BottomNavigationAction
            label="Editar"
            id="editarBarraPC"
            onClick={handlerCambiar}
            icon={<CreateIcon />}
          />
          <BottomNavigationAction
            label="Crear"
            onClick={handlerOpen}
            icon={<AddCircleIcon />}
          />
        </BottomNavigation>
      </AppBar>

      <RegistroPC open={open} setOpen={setOpen} />
    </div>
  );
}
export default withRouter(BottomBarPC);

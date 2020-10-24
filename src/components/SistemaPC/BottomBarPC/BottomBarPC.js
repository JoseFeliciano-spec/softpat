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
import { ToastContainer } from "react-toastify";



function BottomBarPC(props) {
  /* Const user pasado por props */
  const {user} = props;
  /* Abrir y cerrar el componente registro */
  const [open, setOpen] = useState(false);

  /* Ver el historial */
  let history = useHistory();
  const onClick = (e) => {
    history.push("/");
  };


  /* Cambiar de barra */
  const handlerCambiar = (e) => {
    let id = e.currentTarget.id;
    switch (id) {
      case "verBarraPC":
        history.push("/sistema-computo");
        break;
      case "editarBarraPC":
        history.push("/sistema-computo/editar");
        break;
    }
  };

  /* Abrir y no abrir el componente RegistroPC */
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

      <ToastContainer
        position="bottom-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RegistroPC open={open} user={user} setOpen={setOpen} />
    </div>
  );
}
export default withRouter(BottomBarPC);

import React from "react";
/*Drawer */
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./MenuLeft.scss";

function MenuLeft(props) {
  let history = useHistory();
  const { boton, setBoton } = props;
  const handlerSetClose = () => {
    setBoton(!boton);
  };
  const handlerCambiar = (e) => {
    let id = e.currentTarget.id;
    switch (id) {
      case "inicio":
        history.push("/");
        setBoton(!boton);
        break;
      case "sistema-computo":
        /* history.replace("/sistema-computo"); */
        history.push("/sistema-computo");
        setBoton(!boton);
        break;
    }
  };

  return (
    <>
      <Drawer open={boton} onClose={handlerSetClose} className="Drawer-op">
        <List className="list">
          <ListItem
            button
            onClick={handlerCambiar}
            id="inicio" /* component={NavLink} to="/" */
          >
            <ListItemIcon>
              <FavoriteIcon className="theme-icon" />
            </ListItemIcon>
            <ListItemText className="theme-text">Inicio</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={handlerCambiar}
            id="sistema-computo"
            /* component={NavLink}
            to="/sistema-computo" */
          >
            <ListItemIcon>
              <FavoriteIcon className="theme-icon" />
            </ListItemIcon>
            <ListItemText className="theme-text">Sistema cómputo</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
export default withRouter(MenuLeft);

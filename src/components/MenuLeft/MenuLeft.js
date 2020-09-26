import React from "react";
/*Drawer */
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link, withRouter } from "react-router-dom";
import "./MenuLeft.scss";

function MenuLeft(props) {
  const { boton, setBoton } = props;

  const handlerSetClose = () => {
    setBoton(!boton);
  };

  return (
    <>
      <Drawer open={boton} onClose={handlerSetClose} className="Drawer-op">
        <List className="list">
          <ListItem button onClick={handlerSetClose} component={Link} to="/">
            <ListItemIcon>
              <FavoriteIcon className="theme-icon" />
            </ListItemIcon>
            <ListItemText className="theme-text">Inicio</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={handlerSetClose}
            component={Link}
            to="/sistema-computo"
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

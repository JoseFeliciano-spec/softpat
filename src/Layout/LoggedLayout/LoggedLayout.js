import React from "react";
import Grid from "@material-ui/core/Grid";
import "./LoggedLayout.scss";
import AppBar from "@material-ui/core/AppBar";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from "../../utils/Firebase";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },

  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1.5),
  },
  "@media(maxHeight: 700px)": {
    menuButton: {
      marginTop: theme.spacing(0.5),
    },
    botton: {
      marginTop: theme.spacing(0.5),
    },
    title: {
      marginTop: theme.spacing(0.5),
    },
  },
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(1.5),
  },
  botton: {
    marginTop: theme.spacing(1.5),
  },
}));

const salir = () => {
  firebase.auth().signOut();
};

export default function LoggedLayout(props) {
  const { user } = props;
  console.log(user);
  const classes = useStyles();

  const [value, setValue] = React.useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar className="appbar">
          <Toolbar>
            <IconButton
              edge="start"
              className="posicionamiento"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="titulo">
              News
            </Typography>
            <Button color="inherit" className="posicionamiento" onClick={salir}>
              Salir
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container direction="column">
        <Grid item className="primero"></Grid>
        <Grid item className="segundo">
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
          <h1 className=" text-center mt-4">Hola</h1>
        </Grid>
        <AppBar position="fixed" color="primary" className="bottombar">
          <BottomNavigation
            value={value}
            showLabels
            className="pieBar shadow-lg rounded"
          >
            <BottomNavigationAction
              onclick={() => {
                setValue("/");
              }}
              value={"/"}
              label="Recents"
              icon={<RestoreIcon />}
            />
            <BottomNavigationAction
              onclick={() => {
                setValue("/home");
              }}
              value={"/home"}
              label="Favorites"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              onclick={() => {
                setValue("/art");
              }}
              value={"/art"}
              label="Nearby"
              icon={<LocationOnIcon />}
            />
          </BottomNavigation>
        </AppBar>
      </Grid>
    </div>
  );
}

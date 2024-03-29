import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./LoggedLayout.scss";
import AppBar from "@material-ui/core/AppBar";
/* import FavoriteIcon from "@material-ui/icons/Favorite"; */
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from "../../utils/Firebase";
import "firebase/firestore";
import MenuLeft from "../../components/MenuLeft";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes/Routes";
/* import RegistroPC from "../../pages/SistemaPC/RegistroPC"; */
import Avatar from '@material-ui/core/Avatar';
import DialogUser from '../../components/DialogUser';
import { ToastContainer } from "react-toastify";
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: "center",
    justifyContent: "space-beewten",
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1.5),
  },
}));

/* const salir = () => {
  firebase.auth().signOut();
}; */

const db = firebase.firestore(firebase);

export default function LoggedLayout(props) {
  const { user } = props;

  const classes = useStyles();

  const [admin, setAdmin] = useState(false);
  /* const [value, setValue] = React.useState("/"); */
  const [boton, setBoton] = useState(false);
  const [open, setOpen] = useState(false);

  /* const handleChange = (event, newValue) => {
    setValue(newValue);
  }; */

  const handleMenuLeft = () => {
    setBoton(!boton);
  };

  const handlerDialogUser = () => {
    setOpen(true);
  };

  const existeAdmin = async () => {
    await db.collection("admin").doc(user.uid)
      .onSnapshot(function (value) {
        setAdmin(value.exists);
      });
    /* console.log(hola.exists); */
  };

  useEffect(() => {
    existeAdmin();
  }, [])


  return (
    <Router>
      <div className={classes.root}>
        <AppBar className="appbar">
          <Toolbar>
            <IconButton
              edge="start"
              className="boton-bar"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuLeft}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="titulo">
              SoftPat
            </Typography>
            {admin ? <Chip label="Administrador" className="chip-bar" /> :
              <Chip label="Cliente" className="chip-bar-cliente" />}
            <Button color="inherit" className="boton-bar" onClick={handlerDialogUser}>
              {!user.photoURL ?
                <Avatar className="avatar-app">
                  {user.displayName.charAt(0)}
                </Avatar> :
                <Avatar src={user.photoURL} />
              }
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container direction="column">
        <Grid item className="primero"></Grid>
        <Grid item className="segundo">
          <Routes user={user} />
        </Grid>
      </Grid>
      <MenuLeft boton={boton} setBoton={setBoton} />
      <DialogUser open={open} setOpen={setOpen} user={user} />
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
    </Router>
  );
}

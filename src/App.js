import React, { useState } from "react";
import Auth from "./pages/Auth";
import "./App.scss";
import firebase from "./utils/Firebase";
import "firebase/auth";
import ReactDOM from "react-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Usuario logueado</h1>
      <button onClick={salir}>Cerrar sesión</button>
    </div>
  );
};

const Load = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <CircularProgress />
    </div>
  );
};

const salir = () => {
  firebase.auth().signOut();
};

function App() {
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((cliente) => {
    if (cliente?.emailVerified) {
      setUser(cliente);
      console.log("usuario logeado");
      ReactDOM.render(<Login user={user} />, document.getElementById("root"));
    } else if (!cliente?.emailVerified) {
      firebase.auth().signOut();
      setUser(null);
      console.log("usuario no logeado");
      ReactDOM.render(<Auth />, document.getElementById("root"));
    }
  });

  return (
    <>
      {/* {!user ? <Auth /> : <Login />} */} <Load />{" "}
    </>
  );
}

export default App;

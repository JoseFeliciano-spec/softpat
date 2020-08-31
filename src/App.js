import React, { useState } from "react";
import Auth from "./pages/Auth";
import "./App.scss";
import firebase from "./utils/Firebase";
import "firebase/auth";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import CircularProgress from "@material-ui/core/CircularProgress";
=======
>>>>>>> c4b12e40dd01515039302045e0f67c746748c422
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
<<<<<<< HEAD

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
=======
>>>>>>> c4b12e40dd01515039302045e0f67c746748c422

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
<<<<<<< HEAD
      console.log("usuario logeado");
      ReactDOM.render(<Login user={user} />, document.getElementById("root"));
    } else if (!cliente?.emailVerified) {
      firebase.auth().signOut();
      setUser(null);
      console.log("usuario no logeado");
      ReactDOM.render(<Auth />, document.getElementById("root"));
=======
    }else{
      firebase.auth().signOut();
      setUser(null);
>>>>>>> c4b12e40dd01515039302045e0f67c746748c422
    }
  });

  
  return (
<<<<<<< HEAD
    <>
      {/* {!user ? <Auth /> : <Login />} */} <Load />{" "}
    </>
=======
    <div>
        {!user ?   <Auth/> : <Login/> }
        
    </div>
  );
}

function Login(){
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
>>>>>>> c4b12e40dd01515039302045e0f67c746748c422
  );
}


export default App;

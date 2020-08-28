import React, { useState } from "react";
import Auth from "./pages/Auth";
import "./App.scss";
import firebase from "./utils/Firebase";
import "firebase/auth";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const salir = () => {
  firebase.auth().signOut();
};

function App() {
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((cliente) => {
    if (cliente?.emailVerified) {
      setUser(cliente);
    }else{
      firebase.auth().signOut();
      setUser(null);
    }
  });

  
  return (
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
  );
}


export default App;

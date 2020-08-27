import React, { useState } from "react";
import Auth from "./pages/Auth";
import "./App.scss";
import firebase from "./utils/Firebase";
import "firebase/auth";

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

const salir = () => {
  firebase.auth().signOut();
};

function App() {
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((cliente) => {
    if (cliente) {
      setUser(cliente);
    } else {
      setUser(null);
    }
  });

  const handlerInterface = () => {
    if (!user) {
      return <Auth />;
    }

    return <Login />;
  };

  return <>{handlerInterface()}</>;
}

export default App;

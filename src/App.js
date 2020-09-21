import React from "react";
import Auth from "./pages/Auth";
import "./App.scss";
import firebase from "./utils/Firebase";
import "firebase/auth";
import ReactDOM from "react-dom";
import PreAuth from "./components/Auth/PreAuth";
import { ToastContainer } from "react-toastify";

/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"; */

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
  setTimeout(() => {
    firebase.auth().onAuthStateChanged((cliente) => {
      if (cliente?.emailVerified) {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        //setUser(cliente);
        console.log("usuario logeado");
        console.log(cliente);
        ReactDOM.render(
          <Login user={cliente} />,
          document.getElementById("root")
        );
      } else if (!cliente?.emailVerified) {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        firebase.auth().signOut();
        //setUser(null);
        console.log("usuario no logeado");
        ReactDOM.render(<Auth />, document.getElementById("root"));
      }
    });
  }, 500);

  return (
    <>
      <PreAuth />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

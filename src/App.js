import React from "react";
import Auth from "./pages/Auth";
import "./App.scss";
import firebase from "./utils/Firebase";
import "firebase/auth";
import ReactDOM from "react-dom";
import PreAuth from "./components/Auth/PreAuth";
import { ToastContainer } from "react-toastify";
import LoggedLayout from "./layout/LoggedLayout";



function App() {

  firebase.auth().onAuthStateChanged((cliente) => {
    if (cliente?.emailVerified) {
      //setUser(cliente);
      /* console.log("usuario logeado");
      console.log(cliente); */
      ReactDOM.render(
        <LoggedLayout user={cliente} />,
        document.getElementById("root")
      );
    } else if (!cliente?.emailVerified) {
      firebase.auth().signOut();
      /* console.log("usuario no logeado"); */
      ReactDOM.render(<Auth />, document.getElementById("root"));
    }
  });


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

import React, { useEffect, useState, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import BottomBarHome from "../components/Home/BottomBarHome";
import BottomBarPC from "../components/SistemaPC/BottomBarPC";
import Nosotros from "../pages/Home/Nosotros";
/* import SistemaPC from "../pages/SistemaPC/VerPC"; */
import Inicio from "../pages/Home/Inicio";
/* import RegistroPC from "../pages/SistemaPC/RegistroPC"; */
import EditarPC from "../pages/SistemaPC/EditarPC";
import firebase from "../utils/Firebase";
import "firebase/firestore";
import Error from "../pages/Error";

const SistemaPC = lazy(() => import("../pages/SistemaPC/VerPC"));

const db = firebase.firestore(firebase);

export default function Routes(props) {
  const { open, setOpen, user } = props;
  const [adminZone, setAdmin] = useState(false);
  /* console.log(user.uid); */


  const existeAdmin = async () => {
    const hola = await db.collection("admin").doc(user.uid)
      .onSnapshot(function (value) {
        setAdmin(value.exists);
      });
    /* console.log(hola.exists); */
  };

  useEffect(() => {
    existeAdmin();
  }, [])

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Switch>
        <Route path="/" exact>
          <Inicio user={user} />
          <BottomBarHome />
        </Route>
        <Route path="/nosotros" exact>
          <Nosotros />
          <BottomBarHome />
        </Route>
        <Route path="/sistema-computo" exact>
          <SistemaPC />
          <BottomBarPC open={open} setOpen={setOpen} user={user} />
        </Route>
        {
          adminZone && (
            <Route path="/sistema-computo/editar" exact>
              <EditarPC />
              <BottomBarPC open={open} setOpen={setOpen} user={user} />
            </Route>
          )
        }
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Suspense>
  );
}

import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import "./AuthForm.scss";
import { ToastContainer } from "react-toastify";
import Typewriter from 'typewriter-effect';
//import { toast } from "react-toastify";
//import { setEmail, getEmail } from "../../../utils/ema../../../utils/email";
import BackgroundSlider from 'react-background-slider'
import firebase from '../../../utils/Firebase';
import "firebase/storage";
import inicio from '../../../assets/jpg/inicio.jpg';
import inicio2 from '../../../assets/jpg/inicio2.jpg';
import logo from "../../../assets/png/logo2.png";

export default function AuthForm() {
  //Hook para abrir el registro
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handlerDialog = () => {
    setOpen(!open);
  };
  const handlerDialog2 = () => {
    setOpen2(!open2);
  };

  const fondos = () => {

  };

  useEffect(() => {
    fondos();
  }, [])

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} className="background-principal">
          <img src={logo} className="imagen-logo" />
          <BackgroundSlider
            images={[inicio, inicio2]}
            duration={10} transition={2} />
        </Grid>
        <Grid item xs={12} md={6} className="background-secundario">
          <div className="background-secundario__box">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center mb-3">
                    <Typewriter
                      options={{
                        strings: ['Bienvenidos a SoftPat', 'SoftPat Es Seguro', 'SoftPat Es Confiable', 'Descuento del 20%', 'El 3 nos hizo fuertes'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <Button
                    className="button-principal mt-5"
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    onClick={handlerDialog}
                  >
                    Regístrate
                  </Button>
                </div>
                <div className="col-12">
                  <Button
                    className="button-secundario mt-2"
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    onClick={handlerDialog2}
                  >
                    Iniciar sesión
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

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
      <RegisterForm open={open} setOpen={setOpen} setOpen2={setOpen2} />
      <LoginForm open={open2} setOpen={setOpen2} />
    </div>
  );
}

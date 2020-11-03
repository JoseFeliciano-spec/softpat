import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import "./AuthForm.scss";
import { ToastContainer } from "react-toastify";
import Typewriter from 'typewriter-effect';
//import { toast } from "react-toastify";
//import { setEmail, getEmail } from "../../../utils/ema../../../utils/email";

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

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} className="background-principal"></Grid>
        <Grid item xs={12} md={6} className="background-secundario">
          <div className="background-secundario__box">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center mb-3">
                    <Typewriter
                      options={{
                        strings: ['Bienvenidos a SoftPat', 'La mejor empresa de gestión de hojas de vida', 'Pensamos en tí y en tu comodidad'],
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

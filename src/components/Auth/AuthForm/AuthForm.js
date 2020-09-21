import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import "./AuthForm.scss";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export default function AuthForm() {
  //Hook para abrir el registro
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handlerDialog = () => {
    setOpen(!open);
    toast.success("Entrando al menú de registro");
  };
  const handlerDialog2 = () => {
    setOpen2(!open2);
    toast.success("Entrando al menú de login");
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
                  <h1 className="text-center mb-3">Bienvenidos a softpat</h1>
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
      <RegisterForm open={open} setOpen={setOpen} />
      <LoginForm open={open2} setOpen={setOpen2} />
    </div>
  );
}

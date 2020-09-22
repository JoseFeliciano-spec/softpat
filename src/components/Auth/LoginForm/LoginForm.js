import React, { useState } from "react";
import "./LoginForm.scss";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import firebase from "../../../utils/Firebase";
import "firebase/auth";
import validarCorreo from "../../../utils/ValidarCorreo";
import { toast } from "react-toastify";
//import { ToastContainer } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function resendVerificationEmail(user) {
  user
    .sendEmailVerification()
    .then(() => {
      toast.success("Se ha enviado el email de verification");
    })
    .catch((err) => {
      //error
      handlerError(err.code);
    });
}

export default function LoginForm(props) {
  const { open, setOpen } = props;

  //Hook de cambiar ser visible la contraseña
  const [showPassword, setShowPassword] = useState(false);

  //Hook de datos
  const [dataForm, setDataForm] = useState(dataLogin());

  //Hook de los errores
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    setOpen(!open);
  };

  //Función para cambiar de texto a contraseña y el ícono del input de la contraseña
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    console.log(dataForm);
  };

  const onSubmit = () => {
    let ok = true;
    let errors = {};
    if (!validarCorreo(dataForm.email)) {
      errors.email = true;
      ok = false;
    }
    if (dataForm.password.length < 7) {
      errors.password = true;
      ok = false;
    }
    setErrors(errors);
    if (ok) {
      firebase
        .auth()
        .signInWithEmailAndPassword(dataForm.email, dataForm.password)
        .then((response) => {
          if (!response.user.emailVerified) {
            toast.warning("el correo electrónicon no está verificado");
            resendVerificationEmail(response.user);
          }
        })
        .catch((err) => {
          handlerError(err.code);
        });
    }
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="background-login">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <IconButton className="boton-salir" onClick={handleClose}>
                  <ArrowBackIosIcon />
                </IconButton>
              </div>
              <div className="col-12">
                <h2 className="text-center">Iniciar sesión</h2>
              </div>
            </div>
          </div>

          <div className="container w-porcentaje">
            <div className="row justify-content-center">
              <div className="col-12">
                <TextField
                  label="Correo electrónico"
                  id="outlined-margin-dense"
                  name="email"
                  className="mt-4 color-input w-100"
                  variant="outlined"
                  onChange={onChange}
                />
              </div>
              {errors.email && (
                <span className="error-text mt-2">El email no es válido.</span>
              )}
              <div className="col-12">
                <FormControl
                  variant="outlined"
                  className="color-input mt-4 w-100"
                  label="Contraseña"
                >
                  <InputLabel htmlFor="passwordLogin">Contra</InputLabel>
                  <OutlinedInput
                    id="passwordLogin"
                    onChange={onChange}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          className="color-icono "
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
              </div>
              {errors.password && (
                <span className="error-text mt-2">
                  La contraseña es muy corta.
                </span>
              )}
              <div className="col-12">
                <Button
                  onClick={onSubmit}
                  className="w-100 boton-login mb-5 mt-4"
                >
                  Iniciar sesión
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function handlerError(code) {
  switch (code) {
    case "auth/wrong-password":
      toast.warning("El usuario o la contraseña son erróneos");
      break;
    case "auth/too-many-requests":
      toast.warning(
        "Has hecho demasiadas solicitudes de reenvio de correo electrónico de verificación"
      );
      break;
    case "auth/user-not-found":
      toast.warning("El usuario o la contraseña son erróneos");
      break;
    default:
      break;
  }
}
function dataLogin() {
  return {
    email: " ",
    password: " ",
  };
}

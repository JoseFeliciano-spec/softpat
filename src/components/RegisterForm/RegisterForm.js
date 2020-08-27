import React, { useState } from "react";
import "./RegisterForm.scss";
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
import firebase from "../../utils/Firebase";
import "firebase/auth";
import validarCorreo from "../../utils/ValidarCorreo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegisterForm(props) {
  const { open, setOpen } = props;

  //Hook de cambiar ser visible la contraseña
  const [showPassword, setShowPassword] = useState(false);

  //Hook de datos
  const [dataForm, setDataForm] = useState(dataRegister());

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
    if (dataForm.password.length < 5) {
      errors.password = true;
      ok = false;
    }

    if (!dataForm.nameu) {
      errors.nameu = true;
      ok = false;
    }
    setErrors(errors);
    console.log(ok);
    if (ok) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(dataForm.email, dataForm.password)
        .then(() => {
          addName();
          sendEmailVerificacion();
        });
    }
  };

  const addName = () => {
    firebase.auth().currentUser.updateProfile({
      displayName: dataForm.name,
    });
  };

  const sendEmailVerificacion = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        console.log("se envió correctamente");
      });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="background-registro">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <IconButton className="boton-salir" onClick={handleClose}>
                  <ArrowBackIosIcon />
                </IconButton>
              </div>
              <div className="col-12">
                <h2 className="text-center">Registro</h2>
              </div>
            </div>
          </div>

          <div className="container w-75">
            <div className="row justify-content-center">
              <div className="col-12">
                <TextField
                  label="Correo electrónico"
                  id="outlined-margin-dense"
                  name="email"
                  helperText="Some important text"
                  className="mt-4 color-input w-100"
                  variant="outlined"
                  onChange={onChange}
                />
              </div>
              <div className="col-12">
                <FormControl
                  variant="outlined"
                  className="color-input mb-4 w-100"
                  label="Contraseña"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Contra
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
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

              <div className="col-12">
                <TextField
                  label="Nombre"
                  id="outlined-margin-dense"
                  onChange={onChange}
                  helperText="Some important text"
                  className="color-input w-100 "
                  variant="outlined"
                  name="nameu"
                />
              </div>

              <div className="col-12">
                <Button
                  onClick={onSubmit}
                  className="w-100 boton-registro mb-5"
                >
                  Regístrarte
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function dataRegister() {
  return {
    email: " ",
    password: " ",
    nameu: " ",
  };
}

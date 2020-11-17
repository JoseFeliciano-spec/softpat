import React, { useState } from "react";
import "./RegistroPC.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PrimeraFase from "../../../components/SistemaPC/ComponentsRegistro/PrimeraFase";
import SegundaFase from "../../../components/SistemaPC/ComponentsRegistro/SegundaFase";
import TerceraFase from "../../../components/SistemaPC/ComponentsRegistro/TerceraFase";
import firebase from "../../../utils/Firebase";
import "firebase/storage";
import "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Primeros datos a recolectar del pc",
    "Segundos datos",
    "Terminando los datos",
  ];
}

const db = firebase.firestore(firebase);

export default function RegistroPC(props) {
  const { open, setOpen, user } = props;

  /* console.log(user); */
  const [activeStep, setActiveStep] = React.useState(0);
  const [dataFormPC, setDataFormPC] = useState(dataRegistoPC());
  const [file, setFile] = useState(null);
  const [banner, setBanner] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  /* const [okUse, setOkUse] = useState(true); */

  const handlerOpen = () => {
    setOpen(!open);
  };

  const uploadImage = (fileName) => {
    const ref = firebase.storage().ref().child(`sistemapc/${fileName}`);

    return ref.put(file);
  };


  async function onSubmit() {
    let ok = true;
    /* Código para saber si el noSerie está ocupado */
    await db.collection("sistemapc").where("noSerie", "==", dataFormPC.noSerie)
      .get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          toast.warning("El noSerie está en uso.");
          ok = false;
          console.log(ok);
        });
      })

    if (dataFormPC.tipoComputadora === '') { ok = false; }

    if (dataFormPC.nombreEquipo === '') { ok = false; }

    if (dataFormPC.memoriaRam === '') { ok = false; }

    if (dataFormPC.resolucionPantalla === '') { ok = false; }

    if (dataFormPC.discoDuro === '') { ok = false; }

    if (dataFormPC.marcaProcesador === '') { ok = false; }

    if (dataFormPC.fechaEquipo == null) { ok = false; }

    if (dataFormPC.marca === '') { ok = false; }

    if (dataFormPC.marcaGrafica === '') { ok = false; }

    if (dataFormPC.estado == '') { ok = false; }

    if (dataFormPC.modelo == '') { ok = false; }

    if (dataFormPC.noSerie == '') { ok = false; }

    if (dataFormPC.owned == '') { ok = false; }

    if (dataFormPC.lectordvd == '') { ok = false; }

    if (dataFormPC.puertohdmi == '') { ok = false; }

    if (dataFormPC.puertousb == '') { ok = false; }

    if (dataFormPC.observaciones == '') { ok = false; }

    if (file == null) { ok = false; }

    if (!ok) {
      toast.warning("Hay campos vacios, revisa todos los campos.");
    }

    if (ok) {
      setIsLoad(true);
      toast.success("Subiendo los datos y la imagen...");
      const fileName = uuidv4();
      uploadImage(fileName).then(() => {
        db.collection("sistemapc")
          .add({
            registrador: user.displayName,
            estadoVigente: true,
            tipoComputadora: dataFormPC.tipoComputadora,
            nombreEquipo: dataFormPC.nombreEquipo,
            memoriaRam: dataFormPC.memoriaRam,
            resolucionPantalla: dataFormPC.resolucionPantalla,
            discoDuro: dataFormPC.discoDuro,
            marcaProcesador: dataFormPC.marcaProcesador,
            fechaEquipo: dataFormPC.fechaEquipo,
            marca: dataFormPC.marca,
            marcaGrafica: dataFormPC.marcaGrafica,
            estado: dataFormPC.estado,
            modelo: dataFormPC.modelo,
            noSerie: dataFormPC.noSerie,
            owned: dataFormPC.owned,
            lectordvd: dataFormPC.lectordvd,
            puertohdmi: dataFormPC.puertohdmi,
            puertousb: dataFormPC.puertousb,
            image: fileName,
            observaciones: dataFormPC.observaciones
          })
          .then(() => {
            toast.success("Se ha registrado correctamente")
            setIsLoad(false);
            setDataFormPC(dataRegistoPC);
            setActiveStep(0);
            setFile(null);
          });
      })
    }
  }

  /* const onSubmit = ()=>{
    
  } */

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <PrimeraFase banner={banner} setBanner={setBanner} file={file} setFile={setFile} dataFormPC={dataFormPC} setDataFormPC={setDataFormPC} />;
      case 1:
        return <SegundaFase banner={banner} setBanner={setBanner} file={file} setFile={setFile} dataFormPC={dataFormPC} setDataFormPC={setDataFormPC} />;
      case 2:
        return <TerceraFase banner={banner} setBanner={setBanner} file={file} setFile={setFile} dataFormPC={dataFormPC} setDataFormPC={setDataFormPC} />;
      default:
        return "Paso inválido";
    }
  }

  const classes = useStyles();

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handlerOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="background-registro-pc">
          <div className="w-100 background-registro-pc__box">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className="label-registro-pc">{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>

              <div>
                <Typography
                  className={classes.instructions}
                  component={"span"}
                  variant={"body2"}
                >
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    /* disabled={isLoad == true} */
                    className="buttonColorBack"
                  >
                    Atrás
                    </Button>
                  {activeStep === steps.length - 1 ?
                    <Button
                      variant="contained"
                      color="primary"
                      className="mt-3 mb-3"
                      disabled={isLoad == true}
                      onClick={onSubmit}
                    >
                      Registrar
                      </Button> :
                    <Button
                      variant="contained"
                      color="primary"
                      className="mt-3 mb-3"
                      onClick={handleNext}
                    >
                      Siguiente
                      </Button>
                  }
                </div>
              </div>

            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function dataRegistoPC() {
  return {
    tipoComputadora: "",
    nombreEquipo: "",
    memoriaRam: "",
    resolucionPantalla: "",
    discoDuro: "",
    marcaProcesador: "",
    fechaEquipo: new Date(),
    marca: "",
    marcaGrafica: "",
    estado: "",
    modelo: "",
    noSerie: "",
    owned: "",
    lectordvd: "",
    puertohdmi: "",
    puertousb: "",
    observaciones: ""
  };
}
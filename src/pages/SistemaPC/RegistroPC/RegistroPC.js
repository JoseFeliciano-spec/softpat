import React, {useState} from "react";
import "./RegistroPC.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
/* import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl"; */
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
/* import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import validarCorreo from "../../../utils/ValidarCorreo";
import { toast } from "react-toastify"; */
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PrimeraFase from "../../../components/SistemaPC/ComponentsRegistro/PrimeraFase";
import SegundaFase from "../../../components/SistemaPC/ComponentsRegistro/SegundaFase";
import TerceraFase from "../../../components/SistemaPC/ComponentsRegistro/TerceraFase";

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

/* function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PrimeraFase />;
    case 1:
      return <SegundaFase />;
    case 2:
      return <TerceraFase />;
    default:
      return "Paso inválido";
  }
} */

export default function RegistroPC(props) {
  const { open, setOpen } = props;

  const [dataFormPC, setDataFormPC] = useState(dataRegistoPC());

  const handlerOpen = () => {
    setOpen(!open);
  };

  const getStepContent = (stepIndex)=> {
    switch (stepIndex) {
      case 0:
        return <PrimeraFase dataFormPC={dataFormPC} setDataFormPC={setDataFormPC} />;
      case 1:
        return <SegundaFase dataFormPC={dataFormPC} setDataFormPC={setDataFormPC} />;
      case 2:
        return <TerceraFase dataFormPC={dataFormPC} setDataFormPC={setDataFormPC} />;
      default:
        return "Paso inválido";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
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
              {activeStep === steps.length ? (
                <div>
                  <Typography
                    className={classes.instructions}
                    component={"span"}
                    variant={"body2"}
                  >
                    All steps completed
                  </Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
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
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className="mt-3 mb-3"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              )}
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
    fechaEquipo: new Date()
  };
}
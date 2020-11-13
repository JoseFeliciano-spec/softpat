import React from 'react';
import "./DialogUser.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
/* import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl"; */
import Slide from "@material-ui/core/Slide";
/* import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import firebase from "../../utils/Firebase"; */
import "firebase/auth";
/* import validarCorreo from "../../../utils/ValidarCorreo";
import { toast } from "react-toastify"; */

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogUser(props) {
    const { open, setOpen } = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => { setOpen(!open) }}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className="background-dialog">
                    <h1>
                        Hola
                    </h1>
                </DialogContent>
            </Dialog>
        </div>
    )
}

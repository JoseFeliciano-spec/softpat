import React, { useState, useCallback } from 'react';
import "./DialogUser.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
/* import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl"; */
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
/*import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";*/
import firebase from "../../utils/Firebase";
import "firebase/auth";
import "firebase/storage";
/* import validarCorreo from "../../../utils/ValidarCorreo"; */
import { toast } from "react-toastify";
import Avatar from '@material-ui/core/Avatar';
import { useDropzone } from 'react-dropzone';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogUser(props) {
    const { open, setOpen, user, setRealoadApp } = props;
    /* Imagenes */
    const [file, setFile] = useState(null);
    const [banner, setBanner] = useState(null);
    const onDrop = useCallback(acceptedFile => {
        const file = acceptedFile[0];
        /* console.log(file); */
        setFile(file);
        setBanner(URL.createObjectURL(file));
        setUpload(file).then(() => {
            updateUpload();
        });
    });

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    });


    const updateUpload = () => {
        firebase
            .storage()
            .ref(`avatar/${user.uid}`)
            .getDownloadURL()
            .then(async (response) => {
                await firebase.auth()
                    .currentUser
                    .updateProfile({
                        photoURL: response
                    })
                setRealoadApp(result => !result);
            }).catch(() => {
                console.log("No se ha actualizado");
            });
    };

    const setUpload = (file) => {
        const ref = firebase
            .storage()
            .ref()
            .child(`avatar/${user.uid}`);
        return ref.put(file);
    };

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
                    <div className="container">
                        <div className="row">
                            <div className="col-12 contenido-image">
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {!user.photoURL ?
                                        !banner ?
                                            <Avatar className="avatar-user">
                                                <span className="event-user">
                                                    {user.displayName.charAt(0)}
                                                </span>
                                            </Avatar>
                                            :
                                            <Avatar className="avatar-user" src={banner} />
                                        :
                                        !banner ?
                                            <Avatar src={user.photoURL} className="avatar-user" />
                                            :
                                            <Avatar className="avatar-user" src={banner} />
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-4">
                                    <h2 className="text-center">Bienvenido {user.displayName}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

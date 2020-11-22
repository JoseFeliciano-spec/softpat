import React, { useState, useCallback } from 'react';
import "./DialogUser.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import firebase from "../../utils/Firebase";
import TextField from "@material-ui/core/TextField";
import "firebase/auth";
import "firebase/storage";
import { toast } from "react-toastify";
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Avatar from '@material-ui/core/Avatar';
import { useDropzone } from 'react-dropzone';
import SendIcon from '@material-ui/icons/Send';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const salirLogout = () => {
    firebase.auth().signOut();
}

export default function DialogUser(props) {
    const { open, setOpen, user } = props;

    const datosUser = () => {
        return {
            nombre: user.displayName
        }
    };

    /* Datos del usuario */
    const [datosU, setDatosU] = useState(datosUser);

    /* Imagenes */
    const [file, setFile] = useState(null);

    const [estado, setEstado] = useState(true);

    const [banner, setBanner] = useState(null);
    const onDrop = useCallback(acceptedFile => {

        let ok = true;
        const file = acceptedFile[0];
        if (!file.type === 'image/jpeg') {
            ok = false;
            toast.warning("El archivo seleccionado no es una imagen");
        }
        if (file.size > 750000) {
            ok = false;
            toast.warning("El archivo excede el máximo de 750kb");
        }
        if (ok) {
            setFile(file);
            setBanner(URL.createObjectURL(file));
            setUpload(file).then(() => {
                updateUpload();
            });
        }
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
                /* setRealoadApp(result => !result); */
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

    const onChange = (e) => {
        setDatosU({ ...datosU, [e.target.name]: e.target.value });
    }


    const updateName = () => {
        firebase
            .auth()
            .currentUser
            .updateProfile({
                displayName: datosU.nombre
            })
            .then(() => {
                toast.success("Se ha actualizado el nombre.");
                /* setOpen(!open);                */
            });
    }

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
                            <div className="col-12">
                                <TextField
                                    label="Editar Su Nombre"
                                    //id="outlined-margin-dense"
                                    disabled={estado}
                                    name="nombre"
                                    className="mt-4 color-input-r w-100"
                                    variant="outlined"
                                    onChange={onChange}
                                    value={
                                        datosU.nombre
                                    }
                                />
                                <IconButton
                                    aria-label="Editar nombre"
                                    onClick={
                                        () => {
                                            setEstado(!estado)
                                        }
                                    }
                                >
                                    <CreateIcon className="item-actualizar-pc" />
                                </IconButton>


                                <IconButton
                                    aria-label="Enviar nombre"
                                    onClick={updateName}
                                >
                                    <SendIcon className="item-actualizar-pc" />
                                </IconButton>

                            </div>
                            <div className="col-12 mt-4 mb-3">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth={true}
                                    className="button-salir "
                                    onClick={salirLogout}
                                >
                                    Cerrar sesión
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}



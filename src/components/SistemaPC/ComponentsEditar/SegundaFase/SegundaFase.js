import React, {useState, useCallback, useEffect} from "react";
import "./SegundaFase.scss";
import {useDropzone} from 'react-dropzone';
import NoImage from '../../../../assets/png/no-image.png';
import firebase from "../../../../utils/Firebase";
import "firebase/storage";


export default function SegundaFase(props) {

  const {dataFormPC, setDataFormPC, file, setFile, banner, setBanner}  = props;

  /* const [file, setFile] = useState(null);
  const [banner, setBanner] = useState(null); */
  /* console.log(dataFormPC); */
  /* Drop */
  const onDrop = useCallback(acceptedFile => {
    const file = acceptedFile[0];
    console.log(file);
    setFile(file);
    setBanner(URL.createObjectURL(file));
  });

  /*  */
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop
  });


  const [imageInicial, setimageInicial] = useState(null);

  useEffect(() => {
    firebase.storage()
            .ref(`sistemapc/${dataFormPC.image}`)
            .getDownloadURL()
            .then((image) =>{setimageInicial(image)});
  }, [])


  return (
    <div>
      <div {...getRootProps()} className="container contenedor-img-pc">
        <input {...getInputProps()} />
        {!banner ? <img src={imageInicial} className="image-pc" /> :  <img src={banner} className="image-pc" />}
      </div>
    </div>
  );
}

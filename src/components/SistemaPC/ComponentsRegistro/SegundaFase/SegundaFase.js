import React, { useState, useCallback } from "react";
import "./SegundaFase.scss";
import { useDropzone } from 'react-dropzone';
import NoImage from '../../../../assets/png/no-image.png';
import { toast } from "react-toastify";
import imageCompression from 'browser-image-compression';

export default function SegundaFase(props) {

  const { dataFormPC, setDataFormPC, file, setFile, banner, setBanner } = props;

  /* const [file, setFile] = useState(null);
  const [banner, setBanner] = useState(null); */
  /* console.log(dataFormPC); */
  /* Drop */

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 430,
    useWebWorker: true
  }

  const onDrop = useCallback(acceptedFile => {
    let ok = true;
    const file = acceptedFile[0];
    if (!file.type === 'image/jpeg') {
      ok = false;
      toast.warning("El archivo seleccionado no es una imagen");
    }
    if (file.size > 1000000) {
      ok = false;
      toast.warning("El archivo excede el máximo de 1mb");
    }
    if (ok) {
      imageCompression(file, options)
        .then(function (compressedFile) {
          setFile(compressedFile);
          setBanner(URL.createObjectURL(compressedFile));
        })
        .catch(function (error) {
          toast.warning("No se pudo comprimir");
        });
    }
  });

  /*  */
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop
  });

  return (
    <div>
      <div {...getRootProps()} className="container contenedor-img-pc">
        <input {...getInputProps()} />
        {!banner ? <img src={NoImage} className="image-pc" /> : <img src={banner} className="image-pc" />}
      </div>
    </div>
  );
}

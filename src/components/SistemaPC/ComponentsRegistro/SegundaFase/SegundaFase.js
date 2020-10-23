import React, {useState} from "react";
import "./SegundaFase.scss";

export default function SegundaFase(props) {

  const {dataFormPC, setDataFormPC}  = props;
  console.log(dataFormPC);

  return (
    <div>
      <h1 className="text-center text-black-50">Segunda fase</h1>
    </div>
  );
}

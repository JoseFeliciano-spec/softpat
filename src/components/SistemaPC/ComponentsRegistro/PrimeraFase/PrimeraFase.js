import React from "react";
import TextField from "@material-ui/core/TextField";
import "./PrimeraFase.scss";

export default function PrimeraFase() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <TextField
              label="Prueba"
              //id="outlined-margin-dense"
              name="Prueba"
              className="color-input-pc w-100"
              variant="outlined"
              /* onChange={onChange}
              value={dataForm.email} */
            />
          </div>
          <div className="col-12 mt-4 mt-md-0 col-md-6">
            <TextField
              label="Prueba"
              //id="outlined-margin-dense"
              name="Prueba"
              className="color-input-pc w-100"
              variant="outlined"
              /* onChange={onChange}
              value={dataForm.email} */
            />
          </div>
          <div className="col-12 col-md-6">
            <TextField
              label="Prueba"
              //id="outlined-margin-dense"
              name="Prueba"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              /* onChange={onChange}
              value={dataForm.email} */
            />
          </div>
          <div className="col-12 col-md-6">
            <TextField
              label="Prueba"
              //id="outlined-margin-dense"
              name="Prueba"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              /* onChange={onChange}
              value={dataForm.email} */
            />
          </div>
          <div className="col-12 col-md-6">
            <TextField
              label="Prueba"
              //id="outlined-margin-dense"
              name="Prueba"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              /* onChange={onChange}
              value={dataForm.email} */
            />
          </div>
        </div>
      </div>
    </div>
  );
}

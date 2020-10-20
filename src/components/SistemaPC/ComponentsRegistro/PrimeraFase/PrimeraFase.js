import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import "./PrimeraFase.scss";

export default function PrimeraFase() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
          <FormControl variant="outlined" className="w-100 form-select-pf">
            <InputLabel htmlFor="outlined-tipocomputadora-select">TIPO COMPUTADORA</InputLabel>
            <Select
              native
              /* value={state.age}
              onChange={handleChange} */
              label="TIPO COMPUTADORA"
              inputProps={{
                name: 'tipoComputadora',
                id: 'outlined-tipocomputadora-select',
              }}
            >
              <option aria-label="None" value="" />
              <option value={20}>Sobremesa</option>
              <option value={10}>Portátil</option>
            </Select>
          </FormControl>
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

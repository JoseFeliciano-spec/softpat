import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import "./TerceraFase.scss";

export default function TerceraFase(props) {
  const {dataFormPC, setDataFormPC}  = props;

  const onChange = (e)=>{
    setDataFormPC({...dataFormPC, [e.target.name] : e.target.value});
    /* console.log(e.target.name + ": " + e.target.value); */
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <FormControl variant="outlined" className="w-100 form-select-pf">
              <InputLabel htmlFor="outlined-estado-select">ESTADO</InputLabel>
              <Select
                native
                value={dataFormPC.estado}
                onChange={onChange}
                label="ESTADO"
                inputProps={{
                  name: 'estado',
                  id: 'outlined-estado-select',
                }}
              >
                <option aria-label="None" value="" />
                <option value="nuevo">Nuevo</option>
                <option value="usado" >Usados</option>
              </Select>
            </FormControl>
          </div>
          
          <div className="col-12 col-md-6">
            <TextField
              label="MODELO"
              //id="outlined-margin-dense"
              name="modelo"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              onChange={onChange}
              value={dataFormPC.modelo}
            />
          </div>
          <div className="col-12 col-md-6">
            <TextField
              label="NO SERIE"
              //id="outlined-margin-dense"
              name="noSerie"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              onChange={onChange}
              value={dataFormPC.noSerie}
            />
          </div>
          <div className="col-12 col-md-6">
            <TextField
              label="DUEÑO"
              //id="outlined-margin-dense"
              name="owned"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              onChange={onChange}
              value={dataFormPC.owned}
            />
          </div>
          <div className="col-12 col-md-6">
            <FormControl variant="outlined" className="w-100 form-select-pf mt-4">
                <InputLabel htmlFor="outlined-lectordvd-select">LECTOR DVD</InputLabel>
                <Select
                  native
                  value={dataFormPC.lectordvd}
                  onChange={onChange}
                  label="LECTOR DVD"
                  inputProps={{
                    name: 'lectordvd',
                    id: 'outlined-lectordvd-select',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="si">Si</option>
                  <option value="no" >No</option>
                </Select>
            </FormControl>
          </div>

          <div className="col-12 col-md-6">
            <FormControl variant="outlined" className="w-100 form-select-pf mt-4">
                <InputLabel htmlFor="outlined-puertousb-select">PUERTO USB</InputLabel>
                <Select
                  native
                  value={dataFormPC.puertousb}
                  onChange={onChange}
                  label="PUERTO USB"
                  inputProps={{
                    name: 'puertousb',
                    id: 'outlined-puertousb-select',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="si">Si</option>
                  <option value="no" >No</option>
                </Select>
            </FormControl>
          </div>


          <div className="col-12 col-md-6">
            <FormControl variant="outlined" className="w-100 form-select-pf mt-4">
                <InputLabel htmlFor="outlined-puertohdmi-select">PUERTO HDMI</InputLabel>
                <Select
                  native
                  value={dataFormPC.puertohdmi}
                  onChange={onChange}
                  label="LECTOR DVD"
                  inputProps={{
                    name: 'puertohdmi',
                    id: 'outlined-puertohdmi-select',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="si">Si</option>
                  <option value="no" >No</option>
                </Select>
            </FormControl>
          </div>

        </div>
      </div>
    </div>
  );
}

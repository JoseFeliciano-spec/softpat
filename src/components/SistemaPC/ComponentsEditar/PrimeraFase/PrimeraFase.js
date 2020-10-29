import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import "./PrimeraFase.scss";

export default function PrimeraFase(props) {

  const {dataFormPC, setDataFormPC}  = props;
  /* console.log(dataFormPC.fechaEquipo.toDate()); */

  const onChange = (e)=>{
    setDataFormPC({...dataFormPC, [e.target.name] : e.target.value});
    /* console.log(e.target.name + ": " + e.target.value); */
  }

  /* const onChangeTime = (time)=>{
    setDataFormPC({...dataFormPC, fechaEquipo: time } )
    console.log(dataFormPC.fechaEquipo);
  } */

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <FormControl variant="outlined" className="w-100 form-select-pf">
              <InputLabel htmlFor="outlined-tipocomputadora-select">TIPO COMPUTADORA</InputLabel>
              <Select
                native
                value={dataFormPC.tipoComputadora}
                onChange={onChange}
                label="TIPO COMPUTADORA"
                inputProps={{
                  name: 'tipoComputadora',
                  id: 'outlined-tipocomputadora-select',
                }}
              >
                <option aria-label="None" value="" />
                <option value="sobremesa">Sobremesa</option>
                <option value="portatil" >Portátil</option>
              </Select>
            </FormControl>
          </div>
          
          <div className="col-12 col-md-6">
            <TextField
              label="NOMBRE DEL EQUIPO"
              //id="outlined-margin-dense"
              name="nombreEquipo"
              className="color-input-pc w-100"
              variant="outlined"
              onChange={onChange}
              value={dataFormPC.nombreEquipo}
            />
          </div>
          <div className="col-12 col-md-6">
            <TextField
              label="MEMORIA RAM"
              //id="outlined-margin-dense"
              name="memoriaRam"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              onChange={onChange}
              value={dataFormPC.memoriaRam}
            />
          </div>
          <div className="col-12 col-md-6">
            <TextField
              label="RESOLUCIÓN DE PANTALLA"
              //id="outlined-margin-dense"
              name="resolucionPantalla"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              onChange={onChange}
              value={dataFormPC.resolucionPantalla}
            />
          </div>
          <div className="col-12 col-md-6">
            <TextField
              label="DISCO DURO"
              //id="outlined-margin-dense"
              name="discoDuro"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              onChange={onChange}
              value={dataFormPC.discoDuro}
            />
          </div>

          <div className="col-12 col-md-6">
            <FormControl variant="outlined" className="w-100 mt-4 form-select-pf">
              <InputLabel htmlFor="outlined-marcaprocesador-select">MARCA DEL PROCESADOR</InputLabel>
              <Select
                native
                value={dataFormPC.marcaProcesador}
                onChange={onChange}
                label="MARCA DEL PROCESADOR"
                inputProps={{
                  name: 'marcaProcesador',
                  id: 'outlined-marcaprocesador-select',
                }}
              >
                <option aria-label="None" value="" />
                <option value="intel" >Intel</option>
                <option value="amd">Amd</option>
                <option value="arm">Arm</option>
              </Select>
            </FormControl>
          </div>
          
          <div className="col-12 col-md-6">
            <TextField
              label="MARCA"
              //id="outlined-margin-dense"
              name="marca"
              className="mt-4 color-input-pc w-100"
              variant="outlined"
              onChange={onChange}
              value={dataFormPC.marca}
            />
          </div>
          
          <div className="col-12 col-md-6">
            <FormControl variant="outlined" className="w-100 mt-4 form-select-pf">
              <InputLabel htmlFor="outlined-marcagrafica-select">MARCA DE LA GRÁFICA</InputLabel>
              <Select
                native
                value={dataFormPC.marcaGrafica}
                onChange={onChange}
                label="MARCA DE LA GRÁFICA"
                inputProps={{
                  name: 'marcaGrafica',
                  id: 'outlined-marcagrafica-select',
                }}
              >
                <option aria-label="None" value="" />
                <option value="intel" >Intel</option>
                <option value="amd">Amd</option>
                <option value="nvidia">Nvidia</option>
              </Select>
            </FormControl>
          </div>

        </div>
      </div>
    </div>
  );
}

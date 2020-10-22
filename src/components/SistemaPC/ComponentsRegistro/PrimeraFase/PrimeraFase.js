import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import "./PrimeraFase.scss";

export default function PrimeraFase() {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
            <MuiPickersUtilsProvider className="muipicker" utils={DateFnsUtils}>
            <KeyboardDatePicker
              id="date-picker-dialog"
              label="SELECCIONAR FECHA"
              format="MM/dd/yyyy"
              className="date-pc-r"
              invalidDateMessage="Datos inválidos."
              maxDateMessage="Supera el tope máximo."
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'Cambiar los Datos',
              }}
            />
            </MuiPickersUtilsProvider>
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

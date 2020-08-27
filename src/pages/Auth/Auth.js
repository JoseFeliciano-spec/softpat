/* Clase auth, el componente principal donde se alberga la los componentes hijos Register y Login
    
*/

import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "../../scss/index.scss";
import "./Auth.scss";

export default function Auth() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} className="background-principal"></Grid>
        <Grid item xs={12} md={6} className="background-secundario">
          <div className="background-secundario__box">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Button
                    className="button-principal mt-5"
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                  >
                    Regístrate
                  </Button>
                </div>
                <div className="col-12">
                  <Button
                    className="button-secundario mt-1"
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                  >
                    Iniciar sesión
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import "./Error.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Error() {
    let history = useHistory();
    const [estado404, setEstado404] = useState(false);

    const estadoInicial = () => {
        setTimeout(() => {
            setEstado404(true);
        }, 1800);
    };

    useEffect(() => {
        estadoInicial();
    }, [])

    const onClick = () => {
        history.push("/");
    }

    return (
        <div className="error-404">
            <h1 className="text-center">Error 404 - Página no encontrada</h1>
            {
                !estado404
                    ? <CircularProgress className="spinner-404" />
                    : <Button
                        className="button-principal-error mt-2"
                        variant="contained"
                        color="primary"
                        onClick={onClick}
                    >
                        Volver
                  </Button>
            }
        </div>
    )
}
export default withRouter(Error);
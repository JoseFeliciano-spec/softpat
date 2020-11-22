import React from 'react';
import "./Inicio.scss";
import Typewriter from 'typewriter-effect';

export default function Inicio(props) {
    const { user } = props;

    let array = [
        `${user.displayName}, Nos complace tenerte en SoftPat has escogido la mejor empresa de gestión empresarial a nivel internacional nuestra expertís se encuentra en el manejo eficiente de los equipos lo cuales nos proporcionan y garantizamos totalmente su seguridad además de tenemos a cliente de renombre internacional que nos respalda`
    ]

    return (
        <div>
            <h1 className="text-center mt-4">
                Inicio <br />
                <span>(Bienvenido {user.displayName})</span>
            </h1>


            <div className="contenedor-final container">
                <h3 className="top-write text-center mt-2">
                    <Typewriter
                        options={{
                            strings: array,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h3>
            </div>

        </div>
    )
}

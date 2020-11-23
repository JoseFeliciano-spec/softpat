import React from "react";
import "./Nosotros.scss";
import Weymar from '../../../assets/jpg/weymar.jpg';
import Anderson from '../../../assets/png/anderson.png';
import Isaac from '../../../assets/jpg/issac.jpg';
import Jesus from '../../../assets/jpg/jesus.jpg';
import Jose from '../../../assets/jpg/jose.jpg';

export default function Nosotros() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-4">¿Quiénes Somos?</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <section className="w-100">
              <img src={Weymar} alt="weymar" />
              <div className="bottom-box mt-2">
                <blockquote>
                  <p className="text-center">El éxito empresarial nace de una simple idea.</p>
                </blockquote>
                <div className="test-details">
                  <p><span>Weymar de la hoz</span><br />Los Angeles, CA (CTO SOFTPAT)</p>
                </div>
              </div>
            </section>
          </div>

          <div className="col-12 mt-0 col-md-4">
            <section className="w-100">
              <img src={Anderson} alt="anderson" />
              <div className="bottom-box mt-2">
                <blockquote>
                  <p className="text-center">El pepe, [...] No pierdas ni un segundo de tiempo, pues es tu activo más valioso.</p>
                </blockquote>
                <div className="test-details">
                  <p><span>Anderson Rodriguez</span><br />Los Angeles, CA (HEAD ENGINEER SOFTPAT)</p>
                </div>
              </div>
            </section>
          </div>

          <div className="col-12 mt-0 col-md-4">
            <section className="w-100">
              <img src={Isaac} alt="anderson" />
              <div className="bottom-box mt-2">
                <blockquote>
                  <p className="text-center">
                    Nacimos para ser felices, no para ser perfectos.
                  </p>
                </blockquote>
                <div className="test-details">
                  <p><span>Isaac</span><br />Los Angeles, CA (UX ENGINEER SOFTPAT)</p>
                </div>
              </div>
            </section>
          </div>

          <div className="col-12 mt-0 col-md-6">
            <section className="w-100">
              <img src={Jesus} alt="jesus" />
              <div className="bottom-box mt-2">
                <blockquote>
                  <p className="text-center">
                    Mientras estemos en el presente, el futuro será investigado
                  </p>
                </blockquote>
                <div className="test-details">
                  <p><span>Jesus de Ávila</span><br />Los Angeles, CA (SECURITY ENGINEER SOFTPAT)</p>
                </div>
              </div>
            </section>
          </div>


          <div className="col-12 mt-0 col-md-6">
            <section className="w-100">
              <img src={Jose} alt="Jose" />
              <div className="bottom-box mt-2">
                <blockquote>
                  <p className="text-center">
                    Para mañana es simplemente tarde.
                  </p>
                </blockquote>
                <div className="test-details">
                  <p><span>José Feliciano</span><br />Los Angeles, CA (CEO SOFTPAT)</p>
                </div>
              </div>
            </section>
          </div>


        </div>
      </div>
    </div>
  );
}

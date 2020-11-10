import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faClock,
  faPhoneSquareAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="seccion oscuro">
        <div className="footer contenedor">
          <div className="footer__institucional">
            <h5>INSTITUCIONAL</h5>
            <div className="linea"></div>
            <ul>
              <li>
                <a href="">
                  <div className="ico">
                    <i>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </i>
                  </div>
                  <div className="txt">
                    Urb. Los Vientos 235
                    <br />
                    Arequipa - Arequipa - Perú
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="ico">
                    <i>
                      <FontAwesomeIcon icon={faPhoneSquareAlt} />
                    </i>
                  </div>
                  <div className="txt">
                    (054) 256365 - 564542 - 548789 anexo 111
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="ico">
                    <i>
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                  </div>
                  <div className="txt">
                    L.V. 8:00 a 15:00 hrs. <br />
                    S. 9:00 a 13:00 hrs.
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__alumnos">
            <h5>ALUMNOS</h5>
            <div className="linea"></div>
            <ul>
              <li>
                <a href="">
                  <div className="ico">
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </div>
                  <div className="txt">Registro de Notas</div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="ico">
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </div>
                  <div className="txt">Registro de Asistencias</div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="ico">
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </div>
                  <div className="txt">Cursos</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__logo"></div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

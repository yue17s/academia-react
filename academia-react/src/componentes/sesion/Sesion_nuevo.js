import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imgs from "../imgs";

const Sesion_nuevo = () => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[8].imagen} />
            </div>
          </div>
        </div>
      </header>
      <min>
        <main>
          <section class="seccion bg2">
            <div class="inisesion contenedor">
              <div class="formulario__cabecera">
                <h4>Regístrate</h4>
              </div>
              <form action="./alumno-sesion.html" target="_self">
                <div class="frm__input">
                  <i>
                    <FontAwesomeIcon icon={faUserTie} />
                  </i>
                  <input placeholder="Nombre de Usuario*" />
                </div>
                <div class="frm__input">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <input placeholder="Correo electrónico*" />
                </div>
                <div class="frm__input">
                  <i>
                    <FontAwesomeIcon icon={faLock} />
                  </i>
                  <input placeholder="Contraseña*" />
                </div>
                <div class="frm__input">
                  <i>
                    <FontAwesomeIcon icon={faLock} />
                  </i>
                  <input placeholder="Confirmar Contraseña*" />
                </div>
                <button type="submit" class="iniciar" id="iniciar">
                  Crear Registro
                </button>
                <Link to="/Sesion">
                  <a href="">
                    <p class="frm__link">
                      ¿Ya tienes una cuenta? Inicia Sesión
                    </p>
                  </a>
                </Link>
              </form>
            </div>
          </section>
        </main>
      </min>
    </>
  );
};

export default Sesion_nuevo;

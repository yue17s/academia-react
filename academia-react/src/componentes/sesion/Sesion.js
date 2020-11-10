import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imgs from "../imgs";

const Sesion = () => {
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
      <main>
        <section class="seccion">
          <div class="inisesion contenedor">
            <div class="formulario__cabecera">
              <h4>Iniciar Sesión</h4>
            </div>
            <form action="./alumno-sesion.html" target="_self">
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
              <button type="submit" class="iniciar" id="iniciar">
                Iniciar Sesión
              </button>
              <a href="">
                <p class="frm__link">Recordar usuario o contraseña</p>
              </a>
              <Link to="/Sesion_nuevo">
                <a href="">
                  <p class="frm__link">
                    ¿No tienes una cuenta? Registrate aquí
                  </p>
                </a>
              </Link>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sesion;

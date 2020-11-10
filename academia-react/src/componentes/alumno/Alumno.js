import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";

const Alumno = (props) => {
  const goAlumnoSesion = () => {
    props.history.push("/Alumno_sesion");
  };
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[1].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="seccion">
          <div className="inisesion contenedor">
            <div className="formulario__cabecera">
              <h4>Sesión de Alumno</h4>
            </div>
            <form action="./alumno-sesion.html" target="_self">
              <div className="frm__input">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>{" "}
                <input placeholder="Matricula*" />
              </div>
              <div className="frm__input">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>{" "}
                <input placeholder="Contraseña*" />
              </div>
              <button
                type="submit"
                className="iniciar"
                id="iniciar"
                onClick={goAlumnoSesion}
              >
                Iniciar Sesión
              </button>
              <a href="">
                <p className="frm__link">Recordar Matrícula</p>
              </a>
              <a href="">
                <p className="frm__link">¿Olvidó su contraseña? Ingrese aquí</p>
              </a>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Alumno;

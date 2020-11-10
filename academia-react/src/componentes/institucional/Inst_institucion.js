import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgs from "../imgs";

const Inst_institucion = () => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[6].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="seccion">
          <div className="institucion contenedor">
            <div className="institucion__titulo">
              <h3>Institución</h3>
              <h6>Bienvenido a la ACADEMIA</h6>
            </div>
            <div className="institucion__complementario">
              <div className="institucion__institucion">
                DATOS DE LOS DIRECTORES
                <ul>
                  <li>Director</li>
                  <li>Sub-director</li>
                  <li>Plana Docente</li>
                  <li>Areas Administrativas</li>
                  <li>Tesoreria</li>
                  <li>Otros</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="seccion claro">
          <div className="institucion contenedor">
            <div className="institucion__titulo">
              <h3>NORMATIVIDAD</h3>
              <h6>
                Porque el orden y la disciplina es muy importante para nosotros.
              </h6>
            </div>
            <div className="institucion__complementario">
              <div class="institucion__institucion">
                DATOS DE LOS DIRECTORES
                <ul>
                  <li>Normas Institucionales</li>
                  <li>Normas para el Docente</li>
                  <li>Normas del Alumno</li>
                  <li>Normas de las Actividades Academicas</li>
                  <li>Otros</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="seccion oscuro">
          <div className="local contenedor">
            <div className="local__contenido">
              <div className="contenido">
                <h5>Brindamos Calidad</h5>
                <h2>
                  LOCAL
                  <br />
                  <span>INSTITUCIONAL</span>
                </h2>
                <div className="contenido__txt">
                  <h4>Trabajamos para ti</h4>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>
              </div>
            </div>
            <div className="local__vision">
              <div className="vision__cont">
                <div className="vision__txt">
                  <ul>
                    <li>
                      <a href="">01. Local principal</a>
                    </li>
                    <li>
                      <a href="">02. Canchas Recreativas</a>
                    </li>
                  </ul>
                </div>
                <div className="vision__img">
                  <img src={imgs[14].imagen} />
                  <img src="./img/local/index-local.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="seccion">
          <div className="institucion contenedor">
            <div className="institucion__titulo">
              <h3>FORMAS DE PAGO</h3>
              <h6>No se que poner Aquí</h6>
            </div>
            <div className="institucion__complementario">
              <div className="institucion__institucion">
                ALGO IRA AQUI, PIENSA, PIENSA!!!
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Inst_institucion;

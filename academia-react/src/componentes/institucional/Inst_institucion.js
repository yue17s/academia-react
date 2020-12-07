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
              <div className="institucion__datos">
                <div className="institucion_txt">
                  <p>
                    La Academia renueva su compromiso de brindar el más alto
                    nivel académico y la mejor preparación pre universitaria
                    actualizada a las exigencias de las universidades de nuestra
                    región y del país. Nuestra propuesta integral basada en
                    resultados y en brindar un servicio de calidad se desarrolla
                    en beneficio de los miles de jóvenes que año tras año buscan
                    su ingreso a un centro superior de estudios, nosotros en la
                    Academia complementamos esta formación de manera continua
                    con un alto estándar de exigencia que permite la interacción
                    y preparación oportuna para asegurar su ingreso. En todo
                    este tiempo hemos aportado un entorno de calidad educativa,
                    y tenemos la satisfacción de ser recomendados por las
                    generaciones de alumnos que han pasado por nuestras aulas y
                    que hoy son grandes profesionales y excelentes personas que
                    afrontan exitosamente los retos de la vida.
                  </p>
                </div>
                <div className="institucion__img">
                  <img src={imgs[23].imagen} />
                </div>
              </div>
              <div className="institucion__institucion">
                <p>
                  <b>DATOS DE LOS DIRECTORES</b>
                </p>
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
              <h6>
                {" "}
                Recuerda que ahora tienes 2 opciones para realizar tu pago
              </h6>
              <p>
                Puedes hacer tu pago desde tu matrícula web, con total seguridad
                y rapidez, usando tus Tarjetas de Crédito o Débito Visa,
                Mastercard y American Express. O puedes acudir con tu código a
                cualquiera de los siguientes bancos o agentes: Scotiabank,
                Interbank, BCP, BBVA Continental o Banbif. Y recuerda, no es
                necesario que tengas una tarjeta de estos bancos, basta que
                presentes tu código de pago.
              </p>
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

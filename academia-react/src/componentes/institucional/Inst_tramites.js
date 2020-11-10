import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgs from "../imgs";

const Inst_tramites = () => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[9].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="seccion">
          <div className="tramites contenedor">
            <div className="tramites__titulo">
              <h3>Tramites</h3>
              <h6>Informate sobre los tramites institucionales</h6>
            </div>
            <div className="tramites__tramites">
              <div className="tra__documentos">
                <ul>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Examen de Admición</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Traslado de Alumnos</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Cursos de Nivelación</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Cursos de Verano</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Constancia de Notas</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Desarrolla tu Talento</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tra__contenido">
                <div className="tra__tipo">
                  <div className="tra__top">
                    <div className="ico">
                      <div className="counter count1" data-target="5080">
                        0
                      </div>
                    </div>
                    <div className="titu">
                      <span>alumnos</span>
                      <div className="linea"></div>
                    </div>
                  </div>
                  <div className="tra__botton">
                    <p>Es un hecho establecido hace demasiado tiempo.</p>
                  </div>
                </div>
                <div className="tra__tipo">
                  <div className="tra__top">
                    <div className="ico">
                      <div className="counter count2" data-target="180">
                        0
                      </div>
                    </div>
                    <div className="titu">
                      <span>Docentes</span>
                      <div className="linea"></div>
                    </div>
                  </div>
                  <div className="tra__botton">
                    <p>Es un hecho establecido hace demasiado.</p>
                  </div>
                </div>
                <div className="tra__tipo">
                  <div className="tra__top">
                    <div className="ico">
                      <div className="counter count3" data-target="15">
                        0
                      </div>
                    </div>
                    <div className="titu">
                      <span>Cursos</span>
                      <div className="linea"></div>
                    </div>
                  </div>
                  <div className="tra__botton">
                    <p>Es un hecho establecido hace demasiado tiempo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Inst_tramites;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import imgs from "../imgs";

const Cur_complementarios = () => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[4].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="oscuro">
          <div className="barra contenedor">
            <div className="barra__texto">
              <label>Seleccionar mes del Curso: </label>
            </div>
            <div className="barra__seleccionar">
              <div className="barra__ico">
                <i>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </i>
              </div>
              <select name="" id="">
                <option value="">Todos 2020</option>
                <option value="">Enero</option>
                <option value="">Febrero</option>
                <option value="">Marzo</option>
                <option value="">Abril</option>
                <option value="">Mayo</option>
                <option value="">Junio</option>
                <option value="">Julio</option>
                <option value="">Agosto</option>
                <option value="">Setiembre</option>
                <option value="">Octubre</option>
                <option value="">Noviembre</option>
                <option value="">Diciembre</option>
              </select>
            </div>
          </div>
        </section>
        <section class="seccion claro">
          <div class="cursos contenedor">
            <div class="cursos__titulo">
              <h3>COMPLEMENTARIOS</h3>
              <h6>Selección: TODOS</h6>
            </div>
            <div className="cursos__complementario">
              <div className="cursos__cursos">
                <div className="curso" id="curso">
                  <a href="">
                    <div className="cardcur">
                      <div className="cardcur__imagen">
                        <img src={imgs[16].imagen} alt="" />
                      </div>
                      <div className="cardcur__nombre">
                        <h6>CHARLA</h6>
                      </div>
                      <div className="cardcur__subnombre">
                        <div className="sub">
                          Facultad Discresional de la Administracion Tributaria
                          en el Marco del Proceso de Fiscalizacion
                        </div>
                        <div className="cont">
                          <div className="datos">
                            <span>Inicio: Jueves 20 de agosto 2020</span>
                            <br />
                            <span>
                              Docente: Ing. Belarde Goitizolo Cabrejos
                            </span>
                            <br />
                            <span>Precio: S/ 30.00</span>
                            <br />
                            <span>Plataforma: Zoom</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="curso" id="curso">
                  <a href="">
                    <div className="cardcur">
                      <div className="cardcur__imagen">
                        <img src={imgs[17].imagen} alt="" />
                      </div>
                      <div className="cardcur__nombre">
                        <h6>SEMINARIO</h6>
                      </div>
                      <div className="cardcur__subnombre">
                        <div className="sub">
                          Facultad Discresional de la Administracion Tributaria
                          en el Marco del Proceso de Fiscalizacion
                        </div>
                        <div className="cont">
                          <div className="datos">
                            <span>Fecha: Jueves 20 de agosto 2020</span>
                            <br />
                            <span>
                              Docente: Ing. Belarde Goitizolo Cabrejos
                            </span>
                            <br />
                            <span>Precio: S/ 30.00</span>
                            <br />
                            <span>Modalidad: Virtual</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="curso" id="curso">
                  <a href="">
                    <div className="cardcur">
                      <div className="cardcur__imagen">
                        <img src={imgs[18].imagen} alt="" />
                      </div>
                      <div className="cardcur__nombre">
                        <h6>TALLER</h6>
                      </div>
                      <div className="cardcur__subnombre">
                        <div className="sub">
                          Módulos de la Matematica aplicado a la Informática
                        </div>
                        <div className="cont">
                          <div className="datos">
                            <span>Inicio: Martes 16 de agosto 2020</span>
                            <br />
                            <span>
                              Docente: Ing. Belarde Goitizolo Cabrejos
                            </span>
                            <br />
                            <span>Precio: S/ 250.00</span>
                            <br />
                            <span>Modalidad: Presencial</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="curso" id="curso">
                  <a href="">
                    <div className="cardcur">
                      <div className="cardcur__imagen">
                        <img src={imgs[16].imagen} alt="" />
                      </div>
                      <div className="cardcur__nombre">
                        <h6>CURSO</h6>
                      </div>
                      <div className="cardcur__subnombre">
                        <div className="sub">
                          Módulos de la Matematica aplicado a la Informática
                        </div>
                        <div className="cont">
                          <div className="datos">
                            <span>Inicio: Martes 16 de agosto 2020</span>
                            <br />
                            <span>
                              Docente: Ing. Belarde Goitizolo Cabrejos
                            </span>
                            <br />
                            <span>Precio: S/ 250.00</span>
                            <br />
                            <span>Modalidad: Presencial</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cur_complementarios;

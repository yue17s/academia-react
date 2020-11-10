import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";

const Alumno_sesion = () => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[2].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="seccion">
          <div className="alumnos contenedor">
            <div className="alumnos__titulo">
              <h3>ALUMNO</h3>
              <h6>Selección: TODOS</h6>
            </div>
            <div className="alumnos__complementario">
              <div className="alumnos__alumno">
                <div className="alumnos__left">
                  <div className="alumnos__imagen">
                    <img src={imgs[11].imagen} alt="" />
                  </div>
                  <div className="alumnos__descarga">
                    <button>VER ASISTENCIAS</button>
                    <button>VER NOTAS</button>
                    <button>CERRAR SESIÓN</button>
                  </div>
                </div>
                <div className="alumnos__right">
                  <div className="alumnos__informacion">
                    <table>
                      <thead>
                        <tr>
                          <th colspan="2">Información Personal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>D.N.I:</td>
                          <td>44523301</td>
                        </tr>
                        <tr>
                          <td>Apellidos:</td>
                          <td>Yagua Yepez</td>
                        </tr>
                        <tr>
                          <td>Nombre(s):</td>
                          <td>Miguel Alejandro</td>
                        </tr>
                        <tr>
                          <td>Dirección:</td>
                          <td>D-4 Urb. Las Brizas #456</td>
                        </tr>
                        <tr>
                          <td>Distrito:</td>
                          <td>Jose Luis Bustamante y Rivero</td>
                        </tr>
                        <tr>
                          <td>Fecha de Nacimiento:</td>
                          <td>25/05/1990</td>
                        </tr>
                        <tr>
                          <td>Edad:</td>
                          <td>17</td>
                        </tr>
                        <tr>
                          <td>Teléfono:</td>
                          <td>952145236</td>
                        </tr>
                        <tr>
                          <td>Correo:</td>
                          <td>miguelito@hotmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <th colspan="2">Información Apoderado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Apellidos:</td>
                          <td>Yagua Chirinos</td>
                        </tr>
                        <tr>
                          <td>Nombre(s):</td>
                          <td>Paul Alex</td>
                        </tr>
                        <tr>
                          <td>Teléfono:</td>
                          <td>986222236</td>
                        </tr>
                        <tr>
                          <td>Parentesco:</td>
                          <td>Pápa</td>
                        </tr>
                        <tr>
                          <td>Correo:</td>
                          <td>papademiguelito@hotmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <th colspan="2">Información Académica</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Sección:</td>
                          <td>
                            5A -{" "}
                            <a href="./cur_horarios.html">
                              Ver horarios (clic)
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pagos:</td>
                          <td>5 cuotas</td>
                        </tr>
                        <tr>
                          <td>Deuda:</td>
                          <td>
                            4 cuotas (S/ 300.00) -{" "}
                            <a href="./cur_horarios.html">
                              Formas de pago (clic)
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Alumno_sesion;

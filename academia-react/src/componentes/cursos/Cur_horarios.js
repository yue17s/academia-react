import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";

import imgs from "../imgs";

const Cur_horarios = () => {
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
              <label>Seleccionar sección del alumno: </label>
            </div>
            <div className="barra__seleccionar">
              <div className="barra__ico">
                <i>
                  <FontAwesomeIcon icon={faFont} />
                </i>
              </div>
              <select name="" id="">
                <option value="">1A</option>
                <option value="">1B</option>
                <option value="">1C</option>
                <option value="">2A</option>
                <option value="">2B</option>
                <option value="">2C</option>
              </select>
            </div>
          </div>
        </section>
        <section className="seccion">
          <div className="cursos contenedor">
            <div className="cursos__titulo">
              <h3>HORARIO</h3>
              <h6>Sección: 1A</h6>
            </div>
            <div className="cursos__curso">
              <div className="cursos__tabla">
                <table>
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Horas</th>
                      <th>Lunes</th>
                      <th>Martes</th>
                      <th>Miércoles</th>
                      <th>Jueves</th>
                      <th>Sábado</th>
                      <th>Domingo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>7:15</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>8:00</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>8:45</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>9:30</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                    <tr>
                      <td colspan="8">RECESO</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>10:00</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>10:45</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>11:30</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>12:15</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>13:00</td>
                      <td>XX</td>
                      <td>YY</td>
                      <td>ZZ</td>
                      <td>AA</td>
                      <td>BB</td>
                      <td>CC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cur_horarios;

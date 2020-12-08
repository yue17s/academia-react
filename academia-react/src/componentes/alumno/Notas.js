import imgs from "../imgs";
import React, { useContext, useEffect, useState } from "react";
import Alumno_sesion from "./Alumno_sesion";
import Alumno from "./Alumno";
import AuthContext from "../../context/auth/authContext";
import { withRouter } from "react-router-dom";
import NotasService from "../../services/notasService";
import normalize from "./notas.css";
import notasContext from "./NotasContext";

export const Notas = ({ history }) => {
  const {
    imagen_alu,
    nom_alu,
    nota1_nota,
    nota2_nota,
    id_nota,
    promedio_nota,
    ape_alu,
    alumnosNotasMatricula,
    alumnosNotasCurso,
  } = useContext(AuthContext);

  const Notas = () => history.push("/Notas");
  const goLogin = () => history.push("/Alumno");

  return (
    <header>
      <div className="presentacion">
        <div className="presen__banner">
          <div className="presen__imagen">
            <img src={imgs[2].imagen} />
          </div>
        </div>
      </div>
      <div className="alumnos__complementario">
        <div className="alumnos__alumno">
          <div className="alumnos__left">
            <div className="alumnos__imagen">
              <img src={imagen_alu} alt="" />
            </div>
            <div className="alumnos__descarga"></div>
          </div>
          <div className="alumnos__right">
            <div className="alumnos__informacion">
              <table>
                <thead>
                  <tr>
                    <th colspan="2" className="al__titulo">
                      Informacion Academica
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <table>
                    <tr>
                      <th scope="col">Matricula</th>
                      <th scope="col">Curso</th>
                      <th scope="col">Nota1</th>
                      <th scope="col">Nota2</th>
                      <th scope="col">Promedio</th>
                    </tr>
                    <tr>
                      <td>{alumnosNotasMatricula}</td>
                      <td>{alumnosNotasCurso}</td>
                      <td>{nota1_nota}</td>
                      <td>{nota2_nota}</td>
                      <td>{promedio_nota}</td>
                    </tr>
                  </table>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Notas;

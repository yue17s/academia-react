import imgs from "../imgs";
import React, { useContext, useEffect, useState } from "react";
import Alumno_sesion from "./Alumno_sesion";
import Alumno from "./Alumno";
import AuthContext from "../../context/auth/authContext";
import { getNotas } from "../../services/notasServices";
import { withRouter } from "react-router-dom";
import normalize from "./notas.css";

const Notas = ({ history }) => {
  const {
    autenticado,
    tiposesion,
    codigo_alu,
    imagen_alu,
    nom_alu,
    nota1_nota,
    nota2_nota,
    id_nota,
    promedio_nota,
    ape_alu,
    alumnosNotasAlumnos,
    alumnosNotasMatricula,
    alumnosNotasCurso,
  } = useContext(AuthContext);

  const [notas, setNotas] = useState([]);
  console.log("PROBA: ");
  console.log(notas);
  const traerNotas = async (objAl) => {
    console.log("CODIGO ALUMNO");
    console.log(objAl);
    const data = await getNotas(objAl);
    setNotas(data.alumnosNotasAlumnos);
    //console.log("SET NOTAS:");
    //console.log(data.alumnosNotasAlumnos);
  };

  useEffect(() => {
    console.log("TRAER NOTAS: ");
    console.log(AuthContext);
    traerNotas("AL002"); // aqui probar
  }, []);

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
              <h6>
                {nom_alu} {ape_alu} - {codigo_alu}
              </h6>
            </div>
            {autenticado ? (
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
                            <thead>
                              <tr>
                                <th scope="col">Matricula</th>
                                <th scope="col">Curso</th>
                                <th scope="col">Nota1</th>
                                <th scope="col">Nota2</th>
                                <th scope="col">Promedio</th>
                              </tr>
                            </thead>
                            <tbody>
                              {notas.map((objNota) => {
                                return (
                                  <tr>
                                    <td>0001</td>
                                    <td>{objNota.alumnosNotasCurso}</td>
                                    <td>{objNota.nota1_nota}</td>
                                    <td>{objNota.nota2_nota}</td>
                                    <td>{objNota.promedio_nota}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>No tiene notas</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default withRouter(Notas);

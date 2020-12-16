import imgs from "../imgs";
import React, { useContext, useEffect, useState } from "react";
import Alumno_sesion from "./Alumno_sesion";
import Alumno from "./Alumno";
import AuthContext from "../../context/auth/authContext";
import { getNotas } from "../../services/notasServices";
import { withRouter } from "react-router-dom";
import normalize from "./notas.css";
import AuthState from "../../context/auth/authState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Notas = ({ history }) => {
  const {
    autenticado,
    tiposesion,
    codigo_alu,
    imagen_alu,
    nom_alu,
    email_alu,
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

  const traerNotas = async (objAlum) => {
    const data = await getNotas(objAlum);
    setNotas(data.alumnosNotasAlumnos);
  };

  useEffect(() => {
    if (codigo_alu == null) {
      console.log("ERROR");
    } else {
      traerNotas(codigo_alu);
    }
  }, [codigo_alu]);

  const goLogin = () => history.push("/Alumno");
  const goAlumno = () => history.push("/Alumno_sesion");

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
              <h3>Registro de Notas</h3>
            </div>
            {autenticado ? (
              <div className="alumnos__datos">
                <div className="al__img">
                  <img src={imagen_alu} alt="" />
                </div>
                <div className="al__datos">
                  <ul>
                    <li>
                      <b>Código:</b> {codigo_alu}
                    </li>
                    <li>
                      <b>Apellidos y nombres:</b> {ape_alu}, {nom_alu}
                    </li>
                    <li>
                      <b>Correo:</b> {email_alu}
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          goAlumno();
                        }}
                      >
                        Ver datos del alumno
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="alumnos__null">
                <h6>Para ver sus notas debe estar registrado como ALUMNO</h6>
              </div>
            )}

            {autenticado ? (
              <div className="alumnos__complementario">
                <div className="alumnos__alumno">
                  <div className="alumnos__informacion">
                    <table>
                      <tbody>
                        <table>
                          <thead>
                            <tr className="al__titulo">
                              <th scope="col">Matri.</th>
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
                                  <td>{objNota.alumnosNotasMatricula}</td>
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
            ) : (
              <div className="alumnos__null">
                <div className="alumnos__sesion">
                  <button
                    onClick={() => {
                      goLogin();
                    }}
                  >
                    <i>
                      <FontAwesomeIcon icon={faUser} />
                    </i>{" "}
                    Iniciar sesión de ALumno
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default withRouter(Notas);

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserLock,
  faBookReader,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import AuthContext from "../../context/auth/authContext";
//import { withRouter } from "react-router-dom";

const Alumno_sesion = ({ history }) => {
  const {
    autenticado,
    tiposesion,
    codigo_alu,
    imagen_alu,
    dni_alu,
    ape_alu,
    nom_alu,
    dire_alu,
    celular_alu,
    email_alu,
    papa_alu,
    mama_alu,
  } = useContext(AuthContext);
  const { cerrarSesion } = useContext(AuthContext);
  const goLogin = () => history.push("/Alumno");
  const goMain = () => history.push("/");
  const goNotas = () => history.push("/Notas");
  const goAsistencias = () => history.push("/Asistencias");

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
                {nom_alu} {ape_alu}
              </h6>
            </div>
            {autenticado ? (
              <div className="alumnos__complementario">
                <div className="alumnos__alumno">
                  <div className="alumnos__left">
                    <div className="alumnos__imagen">
                      <img src={imagen_alu} alt="" />
                    </div>
                    <div className="alumnos__descarga">
                      <button
                        onClick={() => {
                          {
                            autenticado ? goAsistencias(codigo_alu) : goMain();
                          }
                        }}
                      >
                        <i>
                          <FontAwesomeIcon icon={faClipboard} />
                        </i>{" "}
                        VER ASISTENCIAS
                      </button>
                      <button
                        onClick={() => {
                          {
                            autenticado ? goNotas(codigo_alu) : goMain();
                          }
                        }}
                      >
                        <i>
                          <FontAwesomeIcon icon={faBookReader} />
                        </i>{" "}
                        VER NOTAS
                      </button>
                      <button
                        onClick={() => {
                          cerrarSesion();
                          goMain();
                        }}
                      >
                        <i>
                          <FontAwesomeIcon icon={faUserLock} />
                        </i>{" "}
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                  <div className="alumnos__right">
                    <div className="alumnos__informacion">
                      <table>
                        <thead>
                          <tr>
                            <th colspan="2" className="al__titulo">
                              Información Personal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="estatico al_subtitulo">D.N.I:</td>
                            <td>{dni_alu}</td>
                          </tr>
                          <tr>
                            <td className="al_subtitulo">Apellidos:</td>
                            <td>{ape_alu}</td>
                          </tr>
                          <tr>
                            <td className="al_subtitulo">Nombre(s):</td>
                            <td>{nom_alu}</td>
                          </tr>
                          <tr>
                            <td className="al_subtitulo">Dirección:</td>
                            <td>{dire_alu}</td>
                          </tr>
                          <tr>
                            <td className="al_subtitulo">Celular:</td>
                            <td>{celular_alu}</td>
                          </tr>
                          <tr>
                            <td className="al_subtitulo">Correo:</td>
                            <td>{email_alu}</td>
                          </tr>
                        </tbody>
                      </table>
                      <br></br>
                      <br></br>
                      <table>
                        <thead>
                          <tr>
                            <th colspan="2" className="al__titulo">
                              Información Apoderado(s)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="estatico al_subtitulo">Padre:</td>
                            <td>{papa_alu}</td>
                          </tr>
                          <tr>
                            <td className="al_subtitulo">Madre:</td>
                            <td>{mama_alu}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Alumno_sesion;

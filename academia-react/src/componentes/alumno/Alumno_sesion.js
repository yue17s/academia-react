import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import AuthContext from "../../context/auth/authContext";
import { withRouter } from "react-router-dom";

const Alumno_sesion = ({ history }) => {
  const {
    autenticado,
    tiposesion,
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
  const goLogin = () => history.push("/Alumno");

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
                {nom_alu} {ape_alu} Bienvenido
              </h6>
            </div>
            <div className="alumnos__complementario">
              <div className="alumnos__alumno">
                <div className="alumnos__left">
                  <div className="alumnos__imagen">
                    <img src={imagen_alu} alt="" />
                  </div>
                  <div className="alumnos__descarga">
                    <button>VER ASISTENCIAS</button>
                    <button>VER NOTAS</button>
                    <button>CERRAR SESIÓN</button>
                  </div>
                </div>
                <div className="alumnos__right">
                  {autenticado ? (
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
                            <td>{dni_alu}</td>
                          </tr>
                          <tr>
                            <td>Apellidos:</td>
                            <td>{ape_alu}</td>
                          </tr>
                          <tr>
                            <td>Nombre(s):</td>
                            <td>{nom_alu}</td>
                          </tr>
                          <tr>
                            <td>Dirección:</td>
                            <td>{dire_alu}</td>
                          </tr>
                          <tr>
                            <td>Celular:</td>
                            <td>{celular_alu}</td>
                          </tr>
                          <tr>
                            <td>Correo:</td>
                            <td>{email_alu}</td>
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
                            <td>Padre o Apoderado:</td>
                            <td>{papa_alu}</td>
                          </tr>
                          <tr>
                            <td>Madre:</td>
                            <td>{mama_alu}</td>
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
                  ) : (
                    <button
                      onClick={() => {
                        goLogin();
                      }}
                    >
                      <i>
                        <FontAwesomeIcon icon={faUser} />
                      </i>{" "}
                      Iniciar sesión
                    </button>
                  )}
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

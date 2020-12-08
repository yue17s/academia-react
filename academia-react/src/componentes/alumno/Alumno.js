import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import { getAlumno, postLogin } from "../../services/authService";
//import AuthState from "../../context/auth/authState";
import AuthContext from "../../context/auth/authContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Alumno = ({ history }) => {
  const goAlumnoSesion = () => {
    //props.history.push("/Alumno_sesion");
    getAlumno();
  };

  const { iniciarSesionState } = useContext(AuthContext);
  //
  const [formulario, setFormulario] = useState({
    codalum: "",
    password: "",
    tiposesion: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const MySwal = withReactContent(Swal);
    if (formulario.codalum == "") {
      MySwal.fire({
        title: <p>Campo "Código de alumno" en blanco</p>,
        footer: "Academia 2020",
        /*didOpen: () => {
              MySwal.clickConfirm();
            },*/
      });
      /*.then(() => {
         return MySwal.fire(<p>Shorthand works too</p>);
        });*/
    }
    e.preventDefault();
    getAlumno(formulario).then((rpta) => {
      if (!rpta.detail) {
        console.log(rpta);
        console.log("EXITO YEAH!!!");
        iniciarSesionState(rpta);
        history.push("/Alumno_sesion");
      } else {
        console.log("USUARIO INCORRECTO");

        MySwal.fire({
          title: <p>Codigo de alumno incorrecto</p>,
          footer: "Academia 2020",
          /*didOpen: () => {
                MySwal.clickConfirm();
              },*/
        });
        /*.then(() => {
           return MySwal.fire(<p>Shorthand works too</p>);
          });*/
      }
    });
  };

  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[1].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="seccion">
          <div className="inisesion contenedor">
            <div className="formulario__cabecera">
              <h4>Sesión de Alumno</h4>
            </div>
            <form onSubmit={handleSubmit} target="_self">
              <div className="frm__input">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>{" "}
                <input
                  type="text"
                  name="codalum"
                  value={formulario.codalum}
                  onChange={handleChange}
                  placeholder="Codigo de alumno*"
                />
              </div>
              <div className="frm__input">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>{" "}
                <input
                  type="password"
                  name="passalu"
                  value={formulario.passalu}
                  onChange={handleChange}
                  placeholder="Contraseña*"
                />
              </div>
              <button
                type="submit"
                className="iniciar"
                id="iniciar"
                //onClick={goAlumnoSesion}
              >
                Iniciar Sesión
              </button>
              <a href="">
                <p className="frm__link">Recordar Matrícula</p>
              </a>
              <a href="">
                <p className="frm__link">¿Olvidó su contraseña? Ingrese aquí</p>
              </a>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Alumno;

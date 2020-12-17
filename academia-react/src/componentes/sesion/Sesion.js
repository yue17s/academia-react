import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imgs from "../imgs";
import AuthContext from "../../context/auth/authContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getUsuario } from "../../services/authService";

const Sesion = ({ history }) => {
  const { iniciarSesionState } = useContext(AuthContext);

  const [formulario, setFormulario] = useState({
    emailusu: "",
    passusu: "",
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
    if (formulario.emailusu == "" || formulario.passusu == "") {
      MySwal.fire({
        title: <p>¡Campo(s) vacios!<br />verifique</p>,
        footer: "Academia 2020",
      });
    }
    e.preventDefault();

    getUsuario(formulario).then((rpta) => {
      if (!rpta.detail) {
        console.log("EXITO!!!");
        iniciarSesionState(rpta);
        history.push("/Libreria");
      } else {
        console.log("USUARIO INCORRECTO");
        MySwal.fire({
          title: <p>¡Email o contraseña incorrecto!<br />verifique</p>,
          footer: "Academia 2020",
        });
      }
    });
  };
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[8].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="seccion bg2">
          <div class="inisesion contenedor">
            <div class="formulario__cabecera">
              <h4>Iniciar Sesión</h4>
            </div>
            <form onSubmit={handleSubmit} target="_self">
              <div class="frm__input">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <input
                  type="text"
                  name="emailusu"
                  value={formulario.emailusu}
                  onChange={handleChange}
                  placeholder="Correo electrónico*"
                />
              </div>
              <div class="frm__input">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input
                  type="password"
                  name="passusu"
                  value={formulario.passusu}
                  onChange={handleChange}
                  placeholder="Contraseña*"
                />
              </div>
              <button type="submit" class="iniciar" id="iniciar">
                Iniciar Sesión
              </button>
              <a href="">
                <p class="frm__link">Recordar usuario o contraseña</p>
              </a>
              <Link to="/Sesion_nuevo">
                <a href="">
                  <p class="frm__link">
                    ¿No tienes una cuenta? Registrate aquí
                  </p>
                </a>
              </Link>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sesion;

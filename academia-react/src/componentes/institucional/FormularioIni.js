import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faShoppingCart,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import imgs from "../imgs";

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
  });

  const handleChangeF = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitF = (e) => {
    const MySwal = withReactContent(Swal);
    if (
      formulario.nombre == "" ||
      formulario.email == "" ||
      formulario.telefono == "" ||
      formulario.consulta == ""
    ) {
      MySwal.fire({
        title: (
          <p>
            ¡Campo(s) vacios!
            <br />
            verifique
          </p>
        ),
        footer: "Academia 2020",
      });
    }
    e.preventDefault();
  };
  return (
    <>
      <section className="seccion">
        <div className="institucional contenedor">
          <div className="inst__contenido">
            <div className="inst__tipo">
              <div className="inst__top">
                <div className="ico">
                  <i>
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                  </i>
                </div>
                <div className="titu">
                  <span>
                    <Link to="/Inst_docentes">
                      <a href="./inst_docentes.html">DOCENTES</a>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="inst__botton">
                <p>
                  It is a long established fact that a reader will be distracted
                </p>
              </div>
            </div>
            <div className="inst__tipo">
              <div className="inst__top">
                <div className="ico">
                  <i>
                    <FontAwesomeIcon icon={faUserGraduate} />
                  </i>
                </div>
                <div className="titu">
                  <span>
                    <Link to="/Alumno">
                      <a href="./alumno.html">ALUMNO</a>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="inst__botton">
                <p>
                  It is a long established fact that a reader will be distracted
                </p>
              </div>
            </div>
            <div className="inst__tipo">
              <div className="inst__top">
                <div className="ico">
                  <i>
                    <FontAwesomeIcon icon={faBook} />
                  </i>
                </div>
                <div className="titu">
                  <span>
                    <Link to="/Inst_biblioteca">
                      <a href="./inst_biblioteca.html">BIBLIOTECA</a>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="inst__botton">
                <p>
                  It is a long established fact that a reader will be distracted
                </p>
              </div>
            </div>
          </div>
          <div className="inst__consulta">
            <div className="inst__cont">
              <h3>Dejanos tu Consulta</h3>
              <h6>Puedes contactarte con nosotros las 24 horas.</h6>
              <form onSubmit={handleSubmitF} className="form1">
                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChangeF}
                  placeholder="Nombre"
                />
                <br />
                <input
                  type="email"
                  name="email"
                  value={formulario.email}
                  onChange={handleChangeF}
                  placeholder="Email"
                />
                <br />
                <input
                  type="tel"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={handleChangeF}
                  placeholder="Telefono"
                />
                <br />
                <textarea
                  name="consulta"
                  value={formulario.consulta}
                  onChange={handleChangeF}
                  placeholder="Tu consulta"
                ></textarea>
                <br />
                <div className="boton">
                  <button>Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formulario;

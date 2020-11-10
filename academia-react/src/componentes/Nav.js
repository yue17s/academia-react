import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faAngleDown,
  faSchool,
  faPaperclip,
  faChalkboardTeacher,
  faBook,
  faBookReader,
  faBookOpen,
  faAlignJustify,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/style.css";
const Nav = () => {
  const [oscuro, setOscuro] = useState("navegador");
  const navRef = useRef();
  navRef.current = oscuro;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY;
      //const show = window.scrollY > 350;
      //if (navRef.current !== show) {
      if (show > 170) {
        setOscuro("navegador oscuro");
      } else {
        setOscuro("navegador");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <section id="sesion" className="sesion">
        <div className="contenedor">
          <div className="ses__usuario">
            <div className="ses__session">
              <div className="iniciar">
                <Link to="/Sesion">
                  <a href="./sesion.html">
                    <i>
                      <FontAwesomeIcon icon={faUser} />
                    </i>{" "}
                    Iniciar sesión
                  </a>
                </Link>
              </div>
            </div>
            <div className="linea-right"></div>
            <div className="ses__carrito">
              <div className="carrito">
                <Link to="/Carrito">
                  <a href="./carrito.html">
                    <i>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="navegador" className={oscuro}>
        <div className="contenedor">
          <div className="nav__barra">
            <div className="logo">
              <a href="./">ACADEMIA</a>
            </div>
            <div className="enlaces">
              <ul>
                <li className="activo">
                  <a href="./">Inicio</a>
                </li>
                <li>
                  <a>
                    Institucional{" "}
                    <i>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </i>
                  </a>
                  <ul className="sub__menu">
                    <li>
                      <Link to="/Inst_institucion">
                        <a href="./inst_institucion.html">
                          <i>
                            <FontAwesomeIcon icon={faSchool} />
                          </i>{" "}
                          Institución
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Inst_tramites">
                        <a href="./inst_tramites.html">
                          <i>
                            <FontAwesomeIcon icon={faPaperclip} />
                          </i>{" "}
                          Tramites
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Inst_docentes">
                        <a href="./inst_docentes.html">
                          <i>
                            <FontAwesomeIcon icon={faChalkboardTeacher} />
                          </i>{" "}
                          Docentes
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Inst_biblioteca">
                        <a href="./inst_biblioteca.html">
                          <i>
                            <FontAwesomeIcon icon={faBook} />
                          </i>{" "}
                          Biblioteca
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/Alumno">
                    <a href="./alumno.html">Alumno</a>
                  </Link>
                </li>
                <li>
                  <a>
                    Cursos{" "}
                    <i>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </i>
                  </a>
                  <ul className="sub__menu">
                    <li>
                      <Link to="/Cur_horarios">
                        <a href="./cur_horarios.html">
                          <i>
                            <FontAwesomeIcon icon={faBookReader} />
                          </i>{" "}
                          Horarios
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Cur_complementarios">
                        <a href="./cur_complementarios.html">
                          <i>
                            <FontAwesomeIcon icon={faBookOpen} />
                          </i>{" "}
                          Complementarios
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/Libreria">
                    <a href="./libreria.html">Librería</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav__movil">
            <div className="enlaces">
              <ul className="nav__lista__m">
                <li>
                  <i>
                    <FontAwesomeIcon icon={faAlignJustify} />
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Nav;

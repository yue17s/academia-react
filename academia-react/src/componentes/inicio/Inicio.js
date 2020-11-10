import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faShoppingCart,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import CardCarousel from "../libreria/Libreria_carousel";
import InstInsEveaca from "../institucional/Intitucion_eveaca";

const Inicio = () => {
  return (
    <>
      <Header />
      <main>
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
                    It is a long established fact that a reader will be
                    distracted
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
                    It is a long established fact that a reader will be
                    distracted
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
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                </div>
              </div>
            </div>
            <div className="inst__consulta">
              <div className="inst__cont">
                <h3>Dejanos tu Consulta</h3>
                <h6>Puedes contactarte con nosotros las 24 horas.</h6>
                <form action="" className="form1">
                  <input type="text" placeholder="Nombre" />
                  <br />
                  <input type="email" placeholder="Email" />
                  <br />
                  <input type="tel" placeholder="Telefono" />
                  <br />
                  <textarea placeholder="Tu consulta"></textarea>
                  <br />
                  <div className="boton">
                    <button>Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="seccion oscuro">
          <div className="local contenedor">
            <div className="local__contenido">
              <div className="contenido">
                <h5>Brindamos Calidad</h5>
                <h2>
                  LOCAL
                  <br />
                  <span>INSTITUCIONAL</span>
                </h2>
                <div className="contenido__txt">
                  <h4>Trabajamos para ti</h4>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>
              </div>
            </div>
            <div className="local__vision">
              <div className="vision__cont">
                <div className="vision__txt">
                  <ul>
                    <li>
                      <a href="">01. Local principal</a>
                    </li>
                    <li>
                      <a href="">02. Canchas Recreativas</a>
                    </li>
                  </ul>
                </div>
                <div className="vision__img">
                  <img src={imgs[14].imagen} />
                  <img src="./img/local/index-local.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CardCarousel />
        <section className="seccion">
          <div className="tramites contenedor">
            <div className="tramites__titulo">
              <h3>Tramites</h3>
              <h6>Informate sobre los tramites institucionales</h6>
            </div>
            <div className="tramites__tramites">
              <div className="tra__documentos">
                <ul>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Examen de Admición</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Traslado de Alumnos</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Cursos de Nivelación</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Cursos de Verano</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Constancia de Notas</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="vineta"></div>
                      <div className="enlace">Desarrolla tu Talento</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tra__contenido">
                <div className="tra__tipo">
                  <div className="tra__top">
                    <div className="ico">
                      <div className="counter count1" data-target="5080">
                        0
                      </div>
                    </div>
                    <div className="titu">
                      <span>alumnos</span>
                      <div className="linea"></div>
                    </div>
                  </div>
                  <div className="tra__botton">
                    <p>Es un hecho establecido hace demasiado tiempo.</p>
                  </div>
                </div>
                <div className="tra__tipo">
                  <div className="tra__top">
                    <div className="ico">
                      <div className="counter count2" data-target="180">
                        0
                      </div>
                    </div>
                    <div className="titu">
                      <span>Docentes</span>
                      <div className="linea"></div>
                    </div>
                  </div>
                  <div className="tra__botton">
                    <p>Es un hecho establecido hace demasiado.</p>
                  </div>
                </div>
                <div className="tra__tipo">
                  <div className="tra__top">
                    <div className="ico">
                      <div className="counter count3" data-target="15">
                        0
                      </div>
                    </div>
                    <div className="titu">
                      <span>Cursos</span>
                      <div className="linea"></div>
                    </div>
                  </div>
                  <div className="tra__botton">
                    <p>Es un hecho establecido hace demasiado tiempo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <InstInsEveaca />
      </main>
    </>
  );
};

export default Inicio;

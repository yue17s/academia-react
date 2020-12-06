import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import Bibliotecas from "./Bibliotecas";
import { geteMaterias } from "../../services/services";

const Inst_biblioteca = () => {
  const [bibliotecaSeleccionado, setBibliotecaSeleccionada] = useState(null);
  const [materias, setMaterias] = useState([]);
  useEffect(() => {
    geteMaterias().then((arregloMaterias) => {
      setMaterias(arregloMaterias.data);
    });
  }, []);

  return (
    <>
      <header>
        <div classNameName="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[0].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="oscuro">
          <div className="barra contenedor">
            <div className="barra__seleccionar">
              <div className="barra__ico">
                <i>
                  <FontAwesomeIcon icon={faBook} />
                </i>
              </div>
              <select name="" id="materia__opt"></select>
            </div>
            <div className="barra__buscar">
              <input
                type="text"
                placeholder="Buscar por título | autor | editorial"
              />
              <div className="barra__ico">
                <i>
                  <FontAwesomeIcon icon={faSearch} />
                </i>
              </div>
            </div>
          </div>
        </section>
        <section className="seccion">
          <div className="biblioteca contenedor">
            <div className="biblioteca__titulo">
              <h3>BIBLIOTECA</h3>
              <h6>
                Materia Seleccionada: <span id="biblioteca__mate"></span>
              </h6>
            </div>
            <div className="biblioteca__biblio" id="biblioteca__biblio">
              <table className="contenido__tabla" id="contenido__tabla">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Imagen</th>
                    <th>Datos</th>
                    <th>Disponible</th>
                  </tr>
                </thead>
                <tbody className="biblioteca__libros" id="biblioteca__libros">
                  <Bibliotecas />
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Inst_biblioteca;

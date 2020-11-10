import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import Docentes from "./Docentes";
import DocenteDetalle from "./DocenteDetalle";
import { getMaterias } from "../../services/services";

const Inst_docentes = () => {
  const [docenteSeleccionado, setDocenteSeleccionado] = useState(null);
  const [materias, setMaterias] = useState([]);
  useEffect(() => {
    getMaterias().then((arregloMaterias) => {
      setMaterias(arregloMaterias.data);
    });
  }, []);
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[5].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="oscuro">
          <div className="barra contenedor">
            <div className="barra__texto">
              <label>Seleccione la especialidad: </label>
            </div>
            <div className="barra__seleccionar">
              <div className="barra__ico">
                <i>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </i>
              </div>
              <select name="" id="">
                <option value="">Todos</option>
                {materias.map((objMateria) => {
                  return (
                    <option
                      key={objMateria.id_mate}
                      value={objMateria.materia_mate}
                    >
                      {objMateria.materia_mate}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </section>
        <section className="seccion claro">
          <div className="docentes contenedor">
            <div className="docentes__titulo">
              <h3>DOCENTES</h3>
              <h6>Selección: TODOS</h6>
            </div>
            <div className="docentes__complementario">
              <div className="docentes__docente">
                <Docentes setDocenteSeleccionado={setDocenteSeleccionado} />
                <DocenteDetalle docenteSeleccionado={docenteSeleccionado} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Inst_docentes;

import React from "react";
import Docente from "./Docente";
import imgs from "../imgs";

const DocenteDetalle = ({ docenteSeleccionado }) => {
  return docenteSeleccionado ? (
    <Docente objDocente={docenteSeleccionado} />
  ) : (
    <div className="docentes__one">
      <div class="docentes__one">
        <div class="docenteone" id="docenteone">
          <a>
            <div class="carddocone">
              <div class="carddocone__imagen">
                <img src={imgs[10].imagen} alt="" />
              </div>

              <div class="carddocone__subnombre">
                <div class="sub">Seleccione un Docente</div>

              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocenteDetalle;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import LibreriaMaterias from "./LibreriaMaterias";
import LibreriaLibros from "./LibreriaLibros";
import LibreriaCarrito from "./LibreriaCarrito";

const Libreria = (props) => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[7].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="oscuro">
          <div className="barra contenedor">
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
        <section class="seccion claro">
          <div className="libreria contenedor">
            <div className="libreria__titulo">
              <h3>LIBRERÍA</h3>
              <div className="libreria__subtitu">
                <h6>
                  <i>
                    <FontAwesomeIcon icon={faBook} />
                  </i>{" "}
                  Tipo de libro:
                </h6>
              </div>
              <div className="libreria__materias">
                <LibreriaMaterias />
              </div>
            </div>
            <div className="libros__libros" id="libros__libros">
              <div className="libros__all">
                <LibreriaLibros />
              </div>
              <div className="libros__one">
                <LibreriaCarrito />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Libreria;

import React from "react";
import { useContext } from "react";
import LibreriaContext from "../../context/libreria/libreriaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";

const LibreriaLibro = ({ objLibreria }) => {
  const { agregarAlCarrito } = useContext(LibreriaContext);

  return (
    <>
      <div className="card">
        <div className="card__card">
          <div className="card__imagen">
            <img src={objLibreria.imagen_libre} alt="" />
          </div>
          <div className="card__nombre">
            <h6>
              <a>{objLibreria.titulo_libre}</a>
            </h6>
          </div>
          <div className="card__subnombre">
            <div className="sub">{objLibreria.nom_libremate}</div>
            <div className="cont">
              <div className="precio">
                <span>{objLibreria.precio_libre}</span>
              </div>
              <div className="btn">
                <button
                  className="agregar"
                  onClick={() => {
                    agregarAlCarrito(objLibreria);
                  }}
                >
                  <i>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </i>{" "}
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibreriaLibro;

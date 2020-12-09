import React from "react";
import { useContext } from "react";
import LibreriaContext from "../../context/libreria/libreriaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CarritoLibro = ({ objLibreria }) => {
  const { agregarAlCarrito } = useContext(LibreriaContext);
  return (
    <div>
      <li className="carrito__detalle">
        <div className="carri__img">
          <img alt="" />
        </div>
        <div className="carri__nombre">
          <div className="carri__nom">
            <a href="">
              Buenas Escrituras de la sociedad contemporanea de lima y arequipa
              en el siglo XX
            </a>
          </div>
          <div className="carri__btn">
            <div className="carri__cant">
              Cantidad:
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <button className="oscuro">
              <i>
                <FontAwesomeIcon icon={faTrashAlt} />
              </i>{" "}
              Eliminar
            </button>
          </div>
        </div>
        <div className="carri__precio">
          <span>S/ 9999.00</span>
        </div>
      </li>
    </div>
  );
};

export default CarritoLibro;

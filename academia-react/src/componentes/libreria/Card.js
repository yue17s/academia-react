import React, { useContext } from "react";
import imgs from "../imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import LibreriaContext from "../../context/libreria/libreriaContext";

const Card = ({ number, objLibreria }) => {
  //const { agregarAlCarrito } = useContext(LibreriaContext);

  return (
    <>
      <div className=" carousel__lista">
        <div class="carousel__elemento">
          <div class="card">
            <div class="card__imagen">
            <img src={objLibreria.imagen_libre} alt="" />
            </div>
            <div class="card__nombre">
              <h6>
                <a href="">Buenos Libros</a>
              </h6>
            </div>
            <div class="card__subnombre">
              <div class="sub">LITERATURA {number}</div>
              <div class="cont">
                <div class="precio">
                  <span>S/ 20.00</span>
                </div>
                <div class="btn">
                  <button class="agregar">
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
      </div>
    </>
  );
};

export default Card;

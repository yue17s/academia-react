import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ number, objLibreria }) => {

  return (
    <>
      <div className=" carousel__lista">
        <div class="carousel__elemento">
          <div className="card__card">
            <div class="card">
              <div class="card__imagen">
                <img src={objLibreria.imagen_libre} alt="" />
              </div>
              <div class="card__nombre">
                <h6>
                  <a href="">{objLibreria.titulo_libre}</a>
                </h6>
              </div>
              <div class="card__subnombre">
                <div class="sub">{objLibreria.nom_libremate}</div>
                <div class="cont">
                  <div class="precio">
                    <span>S/ {objLibreria.precio_libre}</span>
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
      </div>
    </>
  );
};

export default Card;

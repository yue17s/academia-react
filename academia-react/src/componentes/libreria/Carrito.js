import React from "react";
import imgs from "../imgs";
import { withRouter } from "react-router-dom"; // recibe las propiedades del enrutamiento (goLogin)
import CarritoLibros from "./CarritoLibros";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faShuttleVan,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import Libreria from "./Libreria";
import LibreriaCarrito from "./LibreriaCarrito";

const Carrito = () => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[3].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="gris">
          <div className=" contenedor">
            <div className="carrito__pasos">
              <div className="pasouno pactivo">
                <div className="ptop">
                  <i>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </i>{" "}
                  <span>
                    <b>Paso 1</b>
                  </span>
                </div>
                <div className="pbotton">
                  <small>Carrito de compras</small>
                </div>
              </div>
              <div className="pasodos">
                <div className="ptop">
                  <i>
                    <FontAwesomeIcon icon={faShuttleVan} />
                  </i>{" "}
                  <span>
                    <b>Paso 2</b>
                  </span>
                </div>
                <div className="pbotton">
                  <small>Envio | Despacho</small>
                </div>
              </div>
              <div className="pasotres">
                <div className="ptop">
                  <i>
                    <FontAwesomeIcon icon={faCashRegister} />
                  </i>{" "}
                  <span>
                    <b>Paso 3</b>
                  </span>
                </div>
                <div className="pbotton">
                  <small>Pago seguro | Caja</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="seccion">
          <div className="carrito contenedor">
            <div className="carrito__tit">
              <h5>Carrito de compras:</h5>
            </div>
            <CarritoLibros />
          </div>
        </section>
      </main>
    </>
  );
};

export default withRouter(Carrito);

import React from "react";
import imgs from "../imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuttleVan,
  faSchool,
  faCalendarCheck,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";

const Carrito_final = () => {
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
              <div className="pasodos pactivo">
                <div className="ptop">
                  <i>
                    <FontAwesomeIcon icon={faCalendarCheck} />
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
            <div className="final">
              <div className="carrito__tit">
                <h5>Elije tus opciones de despacho:</h5>
              </div>
              <div className="final__despacho">
                <div className="final__left">
                  <p>
                    {" "}
                    <i>
                      <FontAwesomeIcon icon={faSchool} />
                    </i>{" "}
                    Retiro en Colegio o tiendas
                  </p>
                </div>
                <div className="final__right">
                  <p>
                    <i>
                      <FontAwesomeIcon icon={faShuttleVan} />
                    </i>{" "}
                    Entrega a domicilio
                  </p>
                </div>
              </div>
              <div className="final__lugar">
                <div className="final__titu">
                  <p>
                    Selecciona el departamento, provincia y distrito donde
                    quiere recojer sus productos
                  </p>
                </div>
                <div className="final__depa">
                  <select name="" id="">
                    <option value="">Departamento *</option>
                    <option>Arequipa</option>
                  </select>
                  <select name="" id="">
                    <option value="">Provincia *</option>
                    <option>Arequipa</option>
                  </select>
                  <select name="" id="">
                    <option value="">Distrito *</option>
                    <option>Arequipa</option>
                  </select>
                </div>
              </div>
              <div className="final__titu">
                <p>Hay 1 tienda en tu ciudad, encuentra la más cercana a tí.</p>
              </div>
              <div className="final__mapa">
                <h5>Aqui va un mapa de google</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Carrito_final;

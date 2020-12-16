import React, { useContext } from "react";
import imgs from "../imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuttleVan,
  faSchool,
  faCalendarCheck,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/auth/authContext";
//import { withRouter } from "react-router-dom";

const Carrito_final = ({ history }) => {
  const {
    imagen_usu,
    ape_usu,
    nom_usu,
    celular_usu,
    dni_usu,
    dire_usu,
  } = useContext(AuthContext);

  const goPasarela = () => history.push("/Pasarela");

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
                    <i>
                      <FontAwesomeIcon icon={faShuttleVan} />
                    </i>{" "}
                    Entrega a domicilio
                  </p>
                </div>
                <div className="final__right">
                  <p>
                    {" "}
                    <i>
                      <FontAwesomeIcon icon={faSchool} />
                    </i>{" "}
                    Retiro en Colegio o tiendas
                  </p>
                </div>
              </div>
              <div className="final__lugar">
                <div className="final__titu">
                  <p>Tu libreta de direcciones:</p>
                </div>
                <div className="final__datos">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <img src={imagen_usu}></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Entregar a: </b>
                          {nom_usu} {ape_usu}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Al domicilio: </b>
                          {dire_usu}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Celular:</b> {celular_usu}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>D.N.I.:</b> {dni_usu}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="final__btn">
                    <button
                      onClick={() => {
                        goPasarela();
                      }}
                    >
                      <i>
                        <FontAwesomeIcon icon={faCashRegister} />
                      </i>{" "}
                      Continuar con el pago
                    </button>
                  </div>
                </div>
              </div>
              <div className="final__titu">
                <p>Costo de envío: S/ 15.00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Carrito_final;

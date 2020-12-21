import React, { useContext } from "react";
import { postLibrosPasarela } from "../../services/librosServices";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CulqiProvider, Culqi } from "react-culqi";
import LibreriaContext from "../../context/libreria/libreriaContext";

const Pasarela = ({ history }) => {
  const { carrito } = useContext(LibreriaContext);
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
        <section>
          <div className="contenedor">
            <div className="App">
              <CulqiProvider
                publicKey="pk_test_6fHVu257xmONLDas"
                amount={72.0}
                title="CULQI"
                description="Llene sus datos"
                onToken={(token) => {
                  console.log("token received", token);
                }}
                onError={(error) => {
                  console.error("something bad happened", error);
                }}
                // Uncomment `options` to see customizations take place
                options={{
                  style: {
                    maincolor: "turquoise",
                    buttontext: "black",
                    maintext: "black",
                    desctext: "black",
                    logo: "//placekitten.com/400/406",
                  },
                }}
              >
                <div>
                  <section className="seccion">
                    <div className="contenedor">
                      <div className="carrito__tit">
                        <h5>Carrito de compras:</h5>
                      </div>
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
                            <div className="pasotres pactivo">
                              <div className="ptop">
                                <i>
                                  <FontAwesomeIcon icon={faCalendarCheck} />
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
                      <div>
                        {carrito.map((objLibroCarrito) => (
                          <li
                            className="carrito__detalle"
                            key={objLibroCarrito.id_libre}
                          >
                            <div className="carri__img">
                              <img src={objLibroCarrito.imagen_libre} alt="" />
                            </div>
                            <div className="carri__nombre">
                              <div className="carri__nom">
                                <a href="">{objLibroCarrito.titulo_libre}</a>
                              </div>
                              <div className="carri__btn">
                                <div className="carri__cant">
                                  Cant.:
                                  <imput>
                                    <b> {objLibroCarrito.cant} </b>
                                    <small>unid. </small>
                                  </imput>
                                </div>
                                <button className="oscuro">Eliminar</button>
                              </div>
                            </div>
                            <div className="carri__precio">
                              <span>S/ {objLibroCarrito.precio_libre}</span>
                            </div>
                          </li>
                        ))}
                      </div>
                      <Culqi>
                        {({ openCulqi, setAmount, amount }) => {
                          return (
                            <div className="pasarela__pago gris">
                              <div className="pasarela__monto">
                                <h5>Total a Pagar: S/ {amount}</h5>
                              </div>
                              <div className="pasarela__btn">
                                <button
                                  onClick={openCulqi}
                                  className="btn-rojo"
                                >
                                  <i>
                                    <FontAwesomeIcon icon={faCreditCard} />
                                  </i>{" "}
                                  Realizar Pago
                                </button>
                              </div>
                            </div>
                          );
                        }}
                      </Culqi>
                    </div>
                  </section>
                </div>
              </CulqiProvider>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pasarela;

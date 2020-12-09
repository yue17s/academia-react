import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import LibreriaContext from "../../context/libreria/libreriaContext";

import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faPrint } from "@fortawesome/free-solid-svg-icons";
import CarritoLibro from "./CarritoLibro";

const CarritoLibros = ({ history }) => {
  const { carrito } = useContext(LibreriaContext);

  const {
    autenticado,
    ape_alu,
    ape_usu,
    tiposesion,
    cerrarSesion,
    cargando,
  } = useContext(AuthContext);

  const goSesion = () => history.push("/Sesion");
  const goCarritoFinal = () => history.push("/CarritoFinal");
  return (
    <>
      <div className="carrito__compras">
        <div className="carrito__left">
          <ul className="carrito__listcontenedor">
            <li className="carrito__detalle">
              <div className="carri__img ctitu">
                <span>Imagen</span>
              </div>
              <div className="carri__nombre ctitu">
                <span>Compra</span>
              </div>
              <div className="carri__precio ctitu">
                <span>Precio</span>
              </div>
            </li>

            {carrito.map((objLibroCarrito) => (
              <li className="carrito__detalle" key={objLibroCarrito.id_libre}>
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
          </ul>
        </div>
        <div className="carrito__right">
          <table>
            <tbody>
              <tr>
                <td className="carri__txt">Total items:</td>
                <td className="carri__deta">3</td>
              </tr>
              <tr>
                <td className="carri__txt">Subtotal: S/</td>
                <td className="carri__deta">5500.00</td>
              </tr>
            </tbody>
          </table>
          {autenticado ? (
            <button
              className="btn-rojo"
              onClick={() => {
                goCarritoFinal();
              }}
            >
              <i>
                <FontAwesomeIcon icon={faCashRegister} />
              </i>{" "}
              Pasar por caja
            </button>
          ) : (
            <button
              className="btn-rojo"
              onClick={() => {
                goSesion();
              }}
            >
              <i>
                <FontAwesomeIcon icon={faCashRegister} />
              </i>{" "}
              Pasar por caja
            </button>
          )}

          <button>
            <i>
              <FontAwesomeIcon icon={faPrint} />
            </i>{" "}
            Cotización
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(CarritoLibros);

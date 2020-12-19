import React, { useContext } from "react";
import LibreriaContext from "../../context/libreria/libreriaContext";
import AuthContext from "../../context/auth/authContext";
import { withRouter } from "react-router-dom"; // recibe las propiedades del enrutamiento (goLogin)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";

const LibreriaCarrito = ({ history }) => {
  const { carrito } = useContext(LibreriaContext);

  const {
    autenticado,
    ape_alu,
    ape_usu,
    tiposesion,
    cerrarSesion,
    cargando,
  } = useContext(AuthContext);
  const goCarrito = () => history.push("/Carrito");
  const goCarritoFinal = () => history.push("/CarritoFinal");

  return (
    <>
      <div className="libre__carrito__right">
        <div className="carrito__finalizar">
          <button
            className="btn-rojo"
            onClick={() => {
              goCarrito();
            }}
          >
            <i>
              <FontAwesomeIcon icon={faShoppingCart} />
            </i>{" "}
            Ver Carrito
          </button>
        </div>
        <div className="carrito__final">
          <p>
            Total items: <b>10</b>{" "}
          </p>
          <p>
            Subtotal: <b>S/ 1000 </b>{" "}
          </p>
        </div>
        <div className="carrito__finaldetalles">
          <table>
            <thead>
              <tr>
                <td className="libre__carri__titu lib" colSpan="2">
                  Pedidos
                </td>
                <td className="libre__carri__titu cant">Cant.</td>
              </tr>
            </thead>
            <tbody>
              {carrito.map((objLibroCarrito, id) => (
                <tr key={objLibroCarrito.id_libre}>
                  <td className="libre__carri__img">
                    <img src={objLibroCarrito.imagen_libre} alt="" />
                  </td>
                  <td className="libre__carri__txt">
                    {objLibroCarrito.titulo_libre}
                    <br />
                    <small>
                      <b>S/ {objLibroCarrito.precio_libre}</b>
                    </small>
                  </td>
                  <td className="libre__carri__deta">{objLibroCarrito.cant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default withRouter(LibreriaCarrito);

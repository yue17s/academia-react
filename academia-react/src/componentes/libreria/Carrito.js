import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faPrint } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";
import { withRouter } from "react-router-dom"; // recibe las propiedades del enrutamiento (goLogin)

const Carrito = ({ history }) => {
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
        <section className="seccion">
          <div className="carrito contenedor">
            <div className="carrito__titulo">
              <h3>Carrito de Compras</h3>
            </div>
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
                  <li className="carrito__detalle">
                    <div className="carri__img">
                      <img src={imgs[12].imagen} alt="" />
                    </div>
                    <div className="carri__nombre">
                      <div className="carri__nom">
                        <a href="">
                          Buenas Escrituras de la sociedad contemporanea de lima
                          y arequipa en el siglo XX
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
                        <button className="oscuro">Eliminar</button>
                      </div>
                    </div>
                    <div className="carri__precio">
                      <span>S/ 9999.00</span>
                    </div>
                  </li>
                  <li className="carrito__detalle">
                    <div className="carri__img">
                      <img src={imgs[12].imagen} alt="" />
                    </div>
                    <div className="carri__nombre">
                      <div className="carri__nom">
                        <a href="">
                          Buenas Escrituras de la sociedad contemporanea de lima
                          y arequipa en el siglo XX
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
                        <button className="oscuro">Eliminar</button>
                      </div>
                    </div>
                    <div className="carri__precio">
                      <span>S/ 989.00</span>
                    </div>
                  </li>
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
                  <button  className="btn-rojo"
                  onClick={() => {
                    goCarritoFinal();
                  }}>
                    <i>
                      <FontAwesomeIcon icon={faCashRegister} />
                    </i>{" "}
                    Pasar por caja
                  </button>
                ) : (
                  <button  className="btn-rojo"
                  onClick={() => {
                    goSesion();
                  }}>
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
          </div>
        </section>
      </main>
    </>
  );
};

export default withRouter(Carrito);

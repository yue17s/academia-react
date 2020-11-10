import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faPrint } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";

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
        <section class="seccion">
          <div class="carrito contenedor">
            <div class="carrito__titulo">
              <h3>Carrito de Compras</h3>
            </div>
            <div class="carrito__compras">
              <div class="carrito__left">
                <ul class="carrito__listcontenedor">
                  <li class="carrito__detalle">
                    <div class="carri__img ctitu">
                      <span>Imagen</span>
                    </div>
                    <div class="carri__nombre ctitu">
                      <span>Compra</span>
                    </div>
                    <div class="carri__precio ctitu">
                      <span>Precio</span>
                    </div>
                  </li>
                  <li class="carrito__detalle">
                    <div class="carri__img">
                      <img src={imgs[12].imagen} alt="" />
                    </div>
                    <div class="carri__nombre">
                      <div class="carri__nom">
                        <a href="">
                          Buenas Escrituras de la sociedad contemporanea de lima
                          y arequipa en el siglo XX
                        </a>
                      </div>
                      <div class="carri__btn">
                        <div class="carri__cant">
                          Cantidad:
                          <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                        <button class="oscuro">Eliminar</button>
                      </div>
                    </div>
                    <div class="carri__precio">
                      <span>S/ 9999.00</span>
                    </div>
                  </li>
                  <li class="carrito__detalle">
                    <div class="carri__img">
                      <img src={imgs[12].imagen} alt="" />
                    </div>
                    <div class="carri__nombre">
                      <div class="carri__nom">
                        <a href="">
                          Buenas Escrituras de la sociedad contemporanea de lima
                          y arequipa en el siglo XX
                        </a>
                      </div>
                      <div class="carri__btn">
                        <div class="carri__cant">
                          Cantidad:
                          <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                        <button class="oscuro">Eliminar</button>
                      </div>
                    </div>
                    <div class="carri__precio">
                      <span>S/ 989.00</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="carrito__right">
                <table>
                  <tbody>
                    <tr>
                      <td class="carri__txt">Total items:</td>
                      <td class="carri__deta">3</td>
                    </tr>
                    <tr>
                      <td class="carri__txt">Subtotal: S/</td>
                      <td class="carri__deta">5500.00</td>
                    </tr>
                  </tbody>
                </table>
                <button>
                  <i>
                    <FontAwesomeIcon icon={faCashRegister} />
                  </i>{" "}
                  Pasar por caja
                </button>
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

export default Carrito;

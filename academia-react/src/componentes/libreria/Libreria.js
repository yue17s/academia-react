import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";

const Libreria = () => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[7].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="oscuro">
          <div className="barra contenedor">
            <div className="barra__seleccionar">
              <div className="barra__ico">
                <i>
                  <FontAwesomeIcon icon={faBook} />
                </i>
              </div>
              <select name="" id="">
                <option value="">Todos</option>
                <option value="">Matematicas</option>
                <option value="">Literatura</option>
                <option value="">Recomendados</option>
              </select>
            </div>
            <div className="barra__buscar">
              <input
                type="text"
                placeholder="Buscar por título | autor | editorial"
              />
              <div className="barra__ico">
                <i>
                  <FontAwesomeIcon icon={faSearch} />
                </i>
              </div>
            </div>
          </div>
        </section>
        <section class="seccion claro">
          <div className="libreria contenedor">
            <div className="libreria__titulo">
              <h3>LIBRERÍA</h3>
              <h6>Tipo de Libro: TODOS</h6>
            </div>
            <div className="libros__libros" id="libros__libros">
              <div className="card">
                <div className="card__imagen">
                  <img src={imgs[12].imagen} alt="" />
                </div>
                <div className="card__nombre">
                  <h6>
                    <a href="">Buenas Escrituras</a>
                  </h6>
                </div>
                <div className="card__subnombre">
                  <div className="sub">LITERATURA</div>
                  <div className="cont">
                    <div className="precio">
                      <span>S/ 20.00</span>
                    </div>
                    <div className="btn">
                      <button className="agregar">
                        <i className="fas fa-shopping-cart"></i> Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__imagen">
                  <img src={imgs[12].imagen} alt="" />
                </div>
                <div className="card__nombre">
                  <h6>
                    <a href="">Buenas Escrituras</a>
                  </h6>
                </div>
                <div className="card__subnombre">
                  <div className="sub">LITERATURA</div>
                  <div className="cont">
                    <div className="precio">
                      <span>S/ 50.00</span>
                    </div>
                    <div className="btn">
                      <button className="agregar">
                        <i className="fas fa-shopping-cart"></i> Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__imagen">
                  <img src={imgs[12].imagen} alt="" />
                </div>
                <div className="card__nombre">
                  <h6>
                    <a href="">Buenas Escrituras</a>
                  </h6>
                </div>
                <div className="card__subnombre">
                  <div className="sub">LITERATURA</div>
                  <div className="cont">
                    <div className="precio">
                      <span>S/ 320.00</span>
                    </div>
                    <div className="btn">
                      <button className="agregar">
                        <i className="fas fa-shopping-cart"></i> Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__imagen">
                  <img src={imgs[12].imagen} alt="" />
                </div>
                <div className="card__nombre">
                  <h6>
                    <a href="">Buenas Escrituras</a>
                  </h6>
                </div>
                <div className="card__subnombre">
                  <div className="sub">MATEMATICA</div>
                  <div className="cont">
                    <div className="precio">
                      <span>S/ 330.00</span>
                    </div>
                    <div className="btn">
                      <button className="agregar">
                        <i className="fas fa-shopping-cart"></i> Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__imagen">
                  <img src={imgs[12].imagen} alt="" />
                </div>
                <div className="card__nombre">
                  <h6>
                    <a href="">Buenas Escrituras</a>
                  </h6>
                </div>
                <div className="card__subnombre">
                  <div className="sub">LITERATURA</div>
                  <div className="cont">
                    <div className="precio">
                      <span>S/ 230.00</span>
                    </div>
                    <div className="btn">
                      <button className="agregar">
                        <i className="fas fa-shopping-cart"></i> Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Libreria;

import React from "react";
import imgs from "../imgs";

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
        <section className="seccion">
          <div className="final contenedor">
            <h2>Recoger en Tienda por COVID</h2>
            <div className="final__mapa">
            <h5>Aqui va un mapa de google</h5>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Carrito_final;

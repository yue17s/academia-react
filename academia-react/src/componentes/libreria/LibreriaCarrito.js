import React, { useContext } from "react";
import LibreriaContext from "../../context/libreria/libreriaContext";

const LibreriaCarrito = () => {
  const { carrito } = useContext(LibreriaContext);

  return (
    <>
      <div className="libre__carrito__right">
        <div className="carrito__final">
          <p>
            Total de articulos: <b>10</b>{" "}
          </p>
          <p>
            Subtotal del carrito: <b>S/ 100 </b>{" "}
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
              {carrito.map((objLibroCarrito) => (
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

export default LibreriaCarrito;

import React, { useReducer, useState } from "react";
import { act } from "react-dom/test-utils";
import LibreriaContext from "./libreriaContext";

const libreriaReducer = (stateActual, action) => {
  if (action.type === "SET_GLOBAL_MATERIA") {
    return {
      ...stateActual,
      globalMateria: action.data,
    };
  }
  // CARRITO
  if (action.type === "ACTUALIZAR_CARRITO") {
    return {
      ...stateActual,
      carrito: action.data,
    };
  }
  /* Cualquier objeto o valor que retorne el reducer, es el valor de la nueva variable de estado */
  return stateActual;
};

const LibreriaState = (props) => {
  const [state, dispatch] = useReducer(libreriaReducer, {
    globalMateria: null,
    carrito: [],
  });

  const seleccionarMateriaGlobal = (objMateria) => {
    dispatch({
      type: "SET_GLOBAL_MATERIA",
      data: objMateria,
    });
  };

  const totales = () => {
    let { carrito } = state;
    carrito = carrito.map((objLibroCarrito) => {
      objLibroCarrito.sudo = objLibroCarrito.sudo + objLibroCarrito.subtotal;
    });
  };

  const agregarAlCarrito = (objLibro) => {
    let { carrito } = state;

    if (
      carrito.find(
        (objLibroCarrito) => objLibroCarrito.id_libre === objLibro.id_libre
      )
    ) {
      // SI HAY LIBRO EN EL CARRITO
      carrito = carrito.map((objLibroCarrito) => {
        if (objLibroCarrito.id_libre === objLibro.id_libre) {
          objLibroCarrito.cant++;
          objLibroCarrito.subtotal =
            objLibroCarrito.precio_libre * objLibroCarrito.cant;
          objLibroCarrito.subtotal = 1;
          objLibroCarrito.subtotal =
            objLibroCarrito.cant * objLibroCarrito.precio_libre;
        }
        return objLibroCarrito;
      });
    } else {
      // NO HAY LIBRO EN EL CARRITO
      carrito.push({
        ...objLibro,
        cant: 1,
        subcant: 1,
        subtotal: objLibro.precio_libre,
      });
    }
    dispatch({
      type: "ACTUALIZAR_CARRITO",
      data: [...carrito],
    });
  };

  return (
    <LibreriaContext.Provider
      value={{
        globalMateria: state.globalMateria,
        carrito: state.carrito,
        agregarAlCarrito: agregarAlCarrito,
        seleccionarMateriaGlobal: seleccionarMateriaGlobal,
      }}
    >
      {props.children}
    </LibreriaContext.Provider>
  );
};

export default LibreriaState;

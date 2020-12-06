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

  const agregarAlCarrito = (objLibro) => {
    let { carrito } = state;
    if (carrito.find((objLibroCarrito) => objLibroCarrito.id_libre === objLibro.id_libre)) {
      // SI HAY LIBRO
      carrito = carrito.map((objLibroCarrito) => {
        if (objLibroCarrito.id_libre === objLibro.id_libre) {
          objLibroCarrito.cant++;
        }
        return objLibroCarrito;
      });
    } else {
      // NO HAY LIBRO
      carrito.push({
        ...objLibro,
        cant: 1,
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

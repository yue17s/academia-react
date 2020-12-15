import React, { useEffect, useReducer } from "react";
import AuthContext from "./authContext";

const authReducer = (stateActual, action) => {
  if (action.type === "INICIAR_SESION") {
    return {
      ...stateActual,
      ...action.data,
      autenticado: true,
      //cargando: false,
    };
  }
  if (action.type === "CERRAR_SESION") {
    return {
      //cargando: false,
      autenticado: false,
      tiposesion: null,
      codigo_alu: null,
      pass_alu: null,
      ape_alu: null,
      nom_alu: null,
      dni_alu: null,
      dire_alu: null,
      barra_alu: null,
      email_alu: null,
      celular_alu: null,
      papa_alu: null,
      mama_alu: null,
      imagen_alu: null,
    };
  }
};

const AuthState = (props) => {
  const [state, dispatch] = useReducer(authReducer, {
    //cargando: true,
    autenticado: false,
    tiposesion: null,
    codigo_alu: null,
    pass_alu: null,
    ape_alu: null,
    nom_alu: null,
    dni_alu: null,
    dire_alu: null,
    celular_alu: null,
    email_alu: null,
    papa_alu: null,
    mama_alu: null,
    barra_alu: null,
    imagen_alu: null,

    dni_usu: null,
    pass_usu: null,
    ape_usu: null,
    nom_usu: null,
    dire_usu: null,
    email_usu: null,
    celular_usu: null,
    imagen_usu: null,
    activo: null,
  });

  const iniciarSesionState = (objSesion) => {
    localStorage.setItem("sesion", JSON.stringify(objSesion));
    dispatch({
      type: "INICIAR_SESION",
      data: { ...objSesion },
    });
  };

  const cerrarSesion = () => {
    localStorage.removeItem("sesion");
    dispatch({
      type: "CERRAR_SESION",
    });
  };

  const iniciarSesionConLocalStorage = () => {
    const stringSesion = localStorage.getItem("sesion");
    if (stringSesion) {
      const objSesion = JSON.parse(stringSesion);
      console.log(objSesion);
      // setTimeout(() => {
      dispatch({
        type: "INICIAR_SESION",
        data: { ...objSesion },
      });
      // }, 2000);
    } else {
      console.log("NO HABIA UNA SESION ACTIVA");
    }
  };

  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        autenticado: state.autenticado,
        //cargando: state.cargando,
        codigo_alu: state.codigo_alu,
        imagen_alu: state.imagen_alu,
        dni_alu: state.dni_alu,
        ape_alu: state.ape_alu,
        nom_alu: state.nom_alu,
        dire_alu: state.dire_alu,
        celular_alu: state.celular_alu,
        email_alu: state.email_alu,
        papa_alu: state.papa_alu,
        mama_alu: state.mama_alu,

        dni_usu: state.dni_usu,
        ape_usu: state.ape_usu,
        nom_usu: state.nom_usu,
        dire_usu: state.dire_usu,
        imagen_usu: state.imagen_usu,
        celular_usu: state.celular_usu,

        tiposesion: state.tiposesion,
        iniciarSesionState,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

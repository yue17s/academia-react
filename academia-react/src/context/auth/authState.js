import React, { useReducer } from "react";
import AuthContext from "./authContext";

const authReducer = (stateActual, action) => {
  if (action.type === "INICIAR_SESION") {
    return {
      ...stateActual,
      ...action.data,
      autenticado: true,
      tiposesion: "alumno",
    };
  }
  if (action.type === "CERRAR_SESION") {
    return {
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
  });

  const iniciarSesionState = (objSesion) => {
    dispatch({
      type: "INICIAR_SESION",
      data: { ...objSesion },
    });
  };

  const cerrarSesion = () => {
    dispatch({
      type: "CERRAR_SESION",
    });
  };

  
  return (
    <AuthContext.Provider
      value={{
        autenticado: state.autenticado,
        imagen_alu: state.imagen_alu,
        dni_alu: state.dni_alu,
        ape_alu: state.ape_alu,
        nom_alu: state.nom_alu,
        dire_alu: state.dire_alu,
        celular_alu: state.celular_alu,
        email_alu: state.email_alu,
        papa_alu: state.papa_alu,
        mama_alu: state.mama_alu,
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

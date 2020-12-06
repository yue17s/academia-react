import { URL_BACKEND_HERO } from "./variables";

export const getAlumno = async (objAlum) => {
  const peticion = await fetch(
    `${URL_BACKEND_HERO}/Detail_Alumno/(${objAlum.codalum})/(${objAlum.passalu})/`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(objAlum),
    }
  );

  const rpta = await peticion.json();
  return rpta;
};

export const getUsuario = async (objUsu) => {
  const peticion = await fetch(
    `${URL_BACKEND_HERO}/Detail_Usuario/(${objUsu.emailusu})/(${objUsu.passusu})/`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const rpta = await peticion.json();
  return rpta;
};

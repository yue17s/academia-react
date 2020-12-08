import { URL_BACKEND_HERO } from "./variables";

export const getLibros = async () => {
  const peticion = await fetch(`${URL_BACKEND_HERO}/apis/full_libreria/`);
  const data = await peticion.json();
  return data;
};

export const getLibrosRecomendados = async () => {
  const peticion = await fetch(`${URL_BACKEND_HERO}/List_Libre_Recomendados/`);
  const data = await peticion.json();
  return data;
};

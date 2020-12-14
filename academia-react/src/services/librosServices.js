import { URL_BACKEND_HERO } from "./variables";
import axios from "axios";

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

export const postLibrosPasarela = async (objPasarela) => {
  let response = await axios({
    method: "POST",
    data: {
      //...objPasarela,
      id: objPasarela.id,
      fecha_cheack: Date(),
    },
    credentials: true,
    url: `${URL_BACKEND_HERO}/Registrar_Checkout/`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};

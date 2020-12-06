import axios from "axios";
import { URL_BACKEND, URL_BACKEND_HERO } from "./variables";

//const URL = "https://5f835bd26b97440016f4e613.mockapi.io";

//************************************************************** */
//export const getMaterias = async () => {
//let response = axios.get(`${URL_BACKEND_HERO}/List_All_Materia/`);
//return response;
//};

//************************** DOCENTES *********************************************/
export const geteMaterias = async () => {
  const peticion = await fetch(`${URL_BACKEND_HERO}/List_All_Materia/`, ['GET']);
  const response = await peticion.json();
  return response;
};
//************************************************************** */
export const postDocente = async (objDocente) => {
  let response = await axios({
    method: "POST",
    data: {
      ...objDocente,
      barra_doce: +objDocente.barra_doce,
    },
    url: `${URL_BACKEND}/docentes/`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};
//************************************************************** */
export const getResourceAll = async (recurso) => {
  const response = await fetch(`${URL_BACKEND}/${recurso}`);
  const json = await response.json();
  return json;
};

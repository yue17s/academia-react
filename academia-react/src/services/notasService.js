import { URL_BACKEND_HERO } from "./variables";


export const getNotas= async () => {
    const peticion = await fetch(`${URL_BACKEND_HERO}/apis/List_Alumno_Notas/`);
    const data = await peticion.json();
    return data;
}

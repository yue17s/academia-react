import { URL_BACKEND_HERO } from "./variables";


export const getMaterias = async () => {
    const peticion = await fetch(`${URL_BACKEND_HERO}/List_Materia_Libreria/`);
    const data = await peticion.json();
    return data;
}

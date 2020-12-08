import { URL_BACKEND_HERO } from "./variables";


export const getNotas= async () => {
    const peticion = await fetch(`${URL_BACKEND_HERO}/Detail_Alumno_Nota/${objAlum.codalum}/`);
    const data = await peticion.json();
    return data;
}

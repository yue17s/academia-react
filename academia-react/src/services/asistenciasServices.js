import { URL_BACKEND_HERO } from "./variables";

// async (codigo_alu)
export const getAsistencias= async (objAlum) => {
    const peticion = await fetch(`${URL_BACKEND_HERO}/Detail_Alumno_Asistencia/${objAlum}/`);
    const data = await peticion.json();
    return data;
}

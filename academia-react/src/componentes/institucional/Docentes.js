import React, { useEffect, useState } from "react";
import Docente from "./Docente";
import { URL_BACKEND_HERO } from "../../services/variables";

const Docentes = ({ setDocenteSeleccionado }) => {
  const [docentes, setDocentes] = useState([]);

  /*const getDocentes = async () => {
    let response = await fetch("https://reqres.in/api/users");
    let json = await response.json();
    return json.data;
  };*/

  const getDocentes = async () => {
    let response = await fetch(`${URL_BACKEND_HERO}/List_All_Docentes`, [
      "GET",
    ]);
    let json = await response.json();
    return json;
  };

  useEffect(() => {
    getDocentes().then((arregloDocentes) => {
      setDocentes(arregloDocentes);
    });
  }, []);

  return (
    <div className="docentes__all">
      {docentes.map((objDocente) => {
        return (
          <Docente
            objDocente={objDocente}
            key={objDocente.id_doce}
            setDocenteSeleccionado={setDocenteSeleccionado}
          />
        );
      })}
    </div>
  );
};

export default Docentes;

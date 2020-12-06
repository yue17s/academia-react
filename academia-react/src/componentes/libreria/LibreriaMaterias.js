import React, { useContext, useEffect, useState } from "react";
import LibreriaContext from "../../context/libreria/libreriaContext";
import { getMaterias } from "../../services/materiasServices";
import "./LibreriaMaterias.css";

const LibreriaMaterias = () => {
  const { globalMateria, seleccionarMateriaGlobal } = useContext(
    LibreriaContext
  );
  const [materias, setMaterias] = useState([]);

  const traerMaterias = async () => {
    const data = await getMaterias();
    setMaterias(data);
  };

  useEffect(() => {
    traerMaterias();
  }, []);

  return (
    <>
      <button>TODOS</button>
      {materias.map((objMateria) => {
        return (
          <button
            key={objMateria.id_mate}
            onClick={() => {
              seleccionarMateriaGlobal(objMateria);
            }}
          >
            {objMateria.nom_mate}
          </button>
        );
      })}
    </>
  );
};

export default LibreriaMaterias;

import React, { useEffect, useState } from "react";
import { getMaterias } from "../../services/services";

const DocenteMaterias = () => {
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
      <select name="" id="">
        <option value="">Todos</option>
        {materias.map((objMateria) => {
          return (
            <option key={objMateria.id_mate} value={objMateria.nom_mate}>
              {objMateria.nom_mate}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DocenteMaterias;

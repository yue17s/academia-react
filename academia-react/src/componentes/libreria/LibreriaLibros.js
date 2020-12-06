import React, { useContext, useEffect, useState } from "react";
import LibreriaContext from "../../context/libreria/libreriaContext";
import { getLibros } from "../../services/librosServices";
import Libreria from "./Libreria";
import LibreriaLibro from "./LibreriaLibro";

const LibreriaLibros = () => {
  const [libros, setLibros] = useState([]);
  const traerLibros = async () => {
    const data = await getLibros();
    setLibros(data);
  };
  useEffect(() => {
    traerLibros();
  }, []);

  const { globalMateria } = useContext(LibreriaContext);

  return (
    <>
      {globalMateria
        ? globalMateria.libreriaMateria.map((objLibreria) => {
            return (
              <LibreriaLibro
                key={objLibreria.id_libre}
                objLibreria={objLibreria}
              />
            );
          })
        : libros.map((objLibreria) => {
            return (
              <LibreriaLibro
                key={objLibreria.id_libre}
                objLibreria={objLibreria}
              />
            );
          })}
    </>
  );
};

export default LibreriaLibros;

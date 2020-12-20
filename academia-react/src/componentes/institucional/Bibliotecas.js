import React, { useEffect, useState } from "react";
import Biblioteca from "./Biblioteca";
import { URL_BACKEND_HERO } from "../../services/variables";

const Bibliotecas = ({ setBibliotecaSeleccionada }) => {
  const [bibliotecas, setBibliotecas] = useState([]);

  const getBibliotecas = async () => {
    let response = await fetch(`${URL_BACKEND_HERO}/apis/full_biblioteca/`, ['GET']);
    let json = await response.json();
    return json;
  };

  useEffect(() => {
    getBibliotecas().then((arregloBibliotecas) => {
      setBibliotecas(arregloBibliotecas);
      console.log(arregloBibliotecas);
    });
  }, []);

  return (
    <>
      {bibliotecas.map((objBiblioteca, id) => {
        return (
          <Biblioteca
            objBiblioteca={objBiblioteca}
            key={objBiblioteca.id_doce}
            setBibliotecaSeleccionada={setBibliotecaSeleccionada}
            id={id}
          />
        );
      })}
    </>
  );
};

export default Bibliotecas;

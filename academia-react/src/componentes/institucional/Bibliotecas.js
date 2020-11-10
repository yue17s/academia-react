import React, { useEffect, useState } from "react";
import Biblioteca from "./Biblioteca";
import { URL_BACKEND } from "../../services/variables";

const Bibliotecas = ({ setBibliotecaSeleccionada }) => {
  const [bibliotecas, setBibliotecas] = useState([]);

  const getBibliotecas = async () => {
    let response = await fetch(`${URL_BACKEND}/biblioteca`);
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
      {bibliotecas.map((objBiblioteca) => {
        return (
          <Biblioteca
            objBiblioteca={objBiblioteca}
            key={objBiblioteca.id_doce}
            setBibliotecaSeleccionada={setBibliotecaSeleccionada}
          />
        );
      })}
    </>
  );
};

export default Bibliotecas;

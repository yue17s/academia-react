import React from "react";

const Biblioteca = ({ objBiblioteca }) => {
  /*const seleccionarBiblioteca = () => {
    setBibliotecaSeleccionada(objBiblioteca);
  };*/

  return (
    <>
      <tr className="borde__tabla">
        <td>1</td>
        <td width="95px">
          <div class="bibli__imagen">
            <img src={objBiblioteca.imagen_bibli} alt="" />
          </div>
        </td>
        <td>
          <ul>
            <li>
              <b>Codigo: {objBiblioteca.codigo_bibli}</b>
            </li>
            <li>Título: {objBiblioteca.titulo_bibli}</li>
            <li>Sub-materia: {objBiblioteca.submateria_bibli}</li>
            <li>Autor: {objBiblioteca.autor_bibli}</li>
            <li>Editorial: {objBiblioteca.editorial_bibli}</li>
            <li>Edición: {objBiblioteca.edicion_bibli}</li>
            <li>ISBN: {objBiblioteca.isbn_bibli}</li>
          </ul>
        </td>
        <td width="90px" className="dispo">
          <span>{objBiblioteca.disponible ? "DISPONIBLE" : "PRESTADO"} </span>
        </td>
      </tr>
    </>
  );
};

export default Biblioteca;

import React from "react";

const Biblioteca = ({ objBiblioteca, id }) => {
  /*const seleccionarBiblioteca = () => {
    setBibliotecaSeleccionada(objBiblioteca);
  };*/

  return (
    <>
      <tr className="borde__tabla">
        <td>{id + 1}</td>
        <td width="95px">
          <div class="bibli__imagen">
            <img src={objBiblioteca.imagen_bibli} alt="" />
          </div>
        </td>
        <td>
          <ul>
            <li className="bibli__bg">
              <b>Materia: {objBiblioteca.nom_biblimate}</b>
            </li>
            <li>Título: {objBiblioteca.titulo_bibli}</li>
            <li>Autor: {objBiblioteca.autor_bibli}</li>
            <li>Editorial: {objBiblioteca.editorial_bibli}</li>
            <li>Edición: {objBiblioteca.edicion_bibli}</li>
            <li>ISBN: {objBiblioteca.isbn_bibli}</li>
          </ul>
        </td>
        <td width="120px" className="dispo">
          <small><u>Código</u>: {objBiblioteca.codigo_bibli}</small>
          <br />
          <br />
          <span>
            {objBiblioteca.disponible_bibli ? (
              "DISPONIBLE"
            ) : (
              <span className="msjalerta">PRESTADO</span>
            )}{" "}
          </span>
        </td>
      </tr>
    </>
  );
};

export default Biblioteca;

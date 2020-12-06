import React, { useState, useEffect } from "react";
import { geteMaterias, postDocente } from "../../services/services";
import Swal from "sweetalert2";

const initialState = {
  ape_doce: "",
  nom_doce: "",
  dni_doce: "",
  email_doce: "",
  barra_doce: 0,
  cv_doce: "",
  id_mate: "",
  imagen_doce: "",
};

const FormCrearDocente = () => {
  const [materias, setMaterias] = useState([]);
  const [form, setForm] = useState(initialState);
  const {
    ape_doce,
    nom_doce,
    dni_doce,
    email_doce,
    barra_doce,
    cv_doce,
    id_mate,
    imagen_doce,
  } = form;
  useEffect(() => {
    geteMaterias().then((arregloMaterias) => {
      setMaterias(arregloMaterias.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // para que ningun procedimiento se ejecute
    postDocente(form).then((respuesta) => {
      if (respuesta.status === 201) {
        setForm(initialState);
        Swal.fire({
          icon: "success",
          timer: 1500,
          title: "Creado!",
          text: "Registro creado correctamente",
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <>
      <div className="contenedor">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Apellidos:</label>
            <input
              type="text"
              className="form-control"
              name="ape_doce"
              placeholder="Apellidos*"
              value={ape_doce}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Nombre(s):</label>

            <input
              type="text"
              className="form-control"
              name="nom_doce"
              placeholder="Nombre(s)*"
              value={nom_doce}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">D.N.I.:</label>
            <input
              type="text"
              className="form-control"
              name="dni_doce"
              placeholder="D.N.I.*"
              value={dni_doce}
              onChange={handleChange}
            />
            <div className="form-group">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                className="form-control"
                name="email_doce"
                placeholder="email*"
                value={email_doce}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Codigo de Barras:</label>
              <input
                type="text"
                className="form-control"
                name="barra_doce"
                placeholder="Codigo de Barras*"
                value={barra_doce}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Curriculo Vitae:</label>

              <textarea
                className="form-control"
                name="cv_doce"
                placeholder="Curriculo Vitae*"
                value={cv_doce}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Materia: </label>
              <select
                className="form-control"
                name="id_mate"
                value={id_mate}
                onChange={handleChange}
              >
                {" "}
                <option value="">--Seleccione Materia</option>
                {materias.map((objMateria) => {
                  return (
                    <option key={objMateria.id_mate} value={objMateria.id_mate}>
                      {objMateria.materia_mate}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Foto:</label>
              <input
                type="text"
                className="form-control"
                name="imagen_doce"
                placeholder="Foto del Docente*"
                value={imagen_doce}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit">Crear Docente</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCrearDocente;

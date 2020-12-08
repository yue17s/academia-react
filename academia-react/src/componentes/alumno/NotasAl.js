import React, { useContext, useEffect, useState } from "react";
import { getNotas } from "../../services/NotasService";
import notasContext from "./notasContext";
import Notas from "./Notas";

const NotasAl = ({ history }) => {
  const gonotas = () => {
    //props.history.push("/Alumno_sesion");
    getNotas();
  };

  const { iniciarSesionState } = useContext(AuthContext);
  //
  const [notas, setnotas] = useState({});

  const handleChange = (e) => {
    setnotas({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[1].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="seccion">
          <div className="inisesion contenedor">
            <div className="formulario__cabecera">
              <h4>Sesión de Alumno</h4>
            </div>
            <form onSubmit={handleSubmit} target="_self">
              <div className="frm__input">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>{" "}
                <input
                  type="text"
                  name="codalum"
                  value={formulario.codalum}
                  onChange={handleChange}
                  placeholder="Codigo de alumno*"
                />
              </div>
              <div className="frm__input">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>{" "}
                <input
                  type="passalu"
                  name="passalu"
                  value={formulario.passalu}
                  onChange={handleChange}
                  placeholder="Contraseña*"
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotasAl;

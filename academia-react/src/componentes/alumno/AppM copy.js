import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import imgs from "../imgs";

import AuthContext from "../../context/auth/authContext";
import Alumno_sesion from "./Alumno_sesion";
import Alumno from "./Alumno";
import { getNotas } from "../../services/notasServices";
import { withRouter } from "react-router-dom";
import normalize from "./notas.css";
import AuthState from "../../context/auth/authState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AppM = ({ history }) => {
  const {
    autenticado,
    tiposesion,
    codigo_alu,
    imagen_alu,
    nom_alu,
    email_alu,
    nota1_nota,
    nota2_nota,
    id_nota,
    promedio_nota,
    ape_alu,
    alumnosNotasAlumnos,
    alumnosNotasMatricula,
    alumnosNotasCurso,
  } = useContext(AuthContext);

  const [notas, setNotas] = useState([]);

  const traerNotas = async (objAlum) => {
    const data = await getNotas(objAlum);
    setNotas(data.alumnosNotasAlumnos);
  };

  useEffect(() => {
    if (codigo_alu == null) {
      console.log("ERROR");
    } else {
      traerNotas(codigo_alu);
    }
  }, [codigo_alu]);

  const goLogin = () => history.push("/Alumno");
  const goAlumno = () => history.push("/Alumno_sesion");
  
  return (
  <>
    <header>
      <div className="presentacion">
        <div className="presen__banner">
          <div className="presen__imagen">
            <img src={imgs[2].imagen} />
          </div>
        </div>
      </div>
    </header>
    <main>
      <section>
        <div className="contenedor react-pdf__Document">
          <PDFViewer>
            <MyDocument />
          </PDFViewer>
        </div>
      </section>
    </main>
  </>
  );
};
//ReactDOM.render(<AppM />, document.getElementById("root"));
export default withRouter(AppM);

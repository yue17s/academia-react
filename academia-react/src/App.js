import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../src/componentes/styles/style.css";
import "../src/componentes/styles/normalize.css";
import Sesion from "./componentes/sesion/Sesion";
import SesionNuevo from "./componentes/sesion/Sesion_nuevo";
import Carrito from "./componentes/libreria/Carrito";
import InstInstitucion from "./componentes/institucional/Inst_institucion";
import InstTramites from "./componentes/institucional/Inst_tramites";
import InstDocentes from "./componentes/institucional/Inst_docentes";
import InstBiblioteca from "./componentes/institucional/Inst_biblioteca";
import Alumno from "./componentes/alumno/Alumno";
import AlumnoSesion from "./componentes/alumno/Alumno_sesion";
import CurHorarios from "./componentes/cursos/Cur_horarios";
import CurComplementarios from "./componentes/cursos/Cur_complementarios";
import Libreria from "./componentes/libreria/Libreria";
import FormCrearDocente from "./componentes/formCrear/FormCrearDocente";
import Inicio from "./componentes/inicio/Inicio";
import NotFound from "./componentes/404/NotFound";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import AuthState from "./context/auth/authState";
import AppM from "./componentes/alumno/AppM"; // del PDF
import LibreriaState from "./context/libreria/libreriaState";
import CarritoFinal from "./componentes/libreria/Carrito_final";
import Pasarela from "./componentes/libreria/Pasarela";
import Asistencias from "./componentes/alumno/Asistencias";
import Notas from "./componentes/alumno/Notas";
import Formulario from "./componentes/institucional/FormularioIni";

const App = () => {
  return (
    <AuthState>
      <LibreriaState>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/Sesion" component={Sesion} />
            <Route exact path="/Sesion_nuevo" component={SesionNuevo} />
            <Route exact path="/CarritoFinal" component={CarritoFinal} />
            <Route exact path="/Carrito" component={Carrito} />
            <Route exact path="/Inst_institucion" component={InstInstitucion} />
            <Route exact path="/Inst_tramites" component={InstTramites} />
            <Route exact path="/Inst_docentes" component={InstDocentes} />
            <Route exact path="/Inst_biblioteca" component={InstBiblioteca} />
            <Route exact path="/Alumno" component={Alumno} />
            <Route exact path="/Alumno_sesion" component={AlumnoSesion} />
            <Route exact path="/Cur_horarios" component={CurHorarios} />
            <Route exact path="/Pasarela" component={Pasarela} />
            <Route exact path="/Asistencias" component={Asistencias} />
            <Route exact path="/Notas" component={Notas} />
            <Route exact path="/AppM" component={AppM} /> // del PDF
            <Route
              exact
              path="/Cur_complementarios"
              component={CurComplementarios}
            />
            <Route exact path="/Libreria" component={Libreria} />
            <Route
              exact
              path="/FormCrearDocente"
              component={FormCrearDocente}
            />
            <Route exact path={"/"} component={Inicio} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </LibreriaState>
    </AuthState>
  );
};

export default App;

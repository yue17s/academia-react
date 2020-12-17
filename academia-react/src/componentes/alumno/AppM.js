import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import imgs from "../imgs";
import AuthContext from "../../context/auth/authContext";
import MyDocument from "./MyDocument";
import Notas from "./Notas";

const AppM = () => (
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
//ReactDOM.render(<AppM />, document.getElementById("root"));
export default AppM;

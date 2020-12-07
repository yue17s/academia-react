import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgs from "../imgs";

const Inst_local = () => {
  return (
    <>
      <section className="seccion oscuro">
        <div className="local contenedor">
          <div className="local__contenido">
            <div className="contenido">
              <h5>Brindamos Calidad</h5>
              <h2>
                LOCAL
                <br />
                <span>INSTITUCIONAL</span>
              </h2>
              <div className="contenido__txt">
                <h4>Trabajamos para ti</h4>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>
          </div>
          <div className="local__vision">
            <div className="vision__cont">
              <div className="vision__txt">
                <ul>
                  <li>
                    <a href="">
                      <span className="number">01.</span> Local principal
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="number">02.</span> Canchas Recreativas
                    </a>
                  </li>
                </ul>
              </div>
              <div className="vision__img">
                <img src={imgs[14].imagen} />
                <img src="./img/local/index-local.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inst_local;

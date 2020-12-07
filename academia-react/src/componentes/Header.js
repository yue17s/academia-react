import React from "react";
import imgs from "./imgs";

const Header = () => {
  return (
    <header>
      <div className="banner">
        <div className="ban__left">
          <div className="ban__lefttop">
            <div className="ban__contenido">
              <h1>
                Academia
                <br />
                Pre
                <br />
                Universitaria
              </h1>
              <h4>Alcanza tu futuro - HOY -</h4>
            </div>
          </div>
          <div className="ban__leftbotton"></div>
        </div>

        <div className="ban__right">
          <div className="ban__righttop">
            <div className="ban__img">
              <img src={imgs[13].imagen} />
            </div>
          </div>
          <div className="ban__rightbotton">
            <div className="ban__texto">
              <p>10K ALUMNOS</p>
            </div>
            <div className="ban__info">
              <p>!00% EXPERIENCIA - CALIDAD - EXCELENCIA</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

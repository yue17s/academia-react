import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";

const Intitucion_eveaca = () => {
  const breakPoints = [{ width: 1200, itemsToShow: 1 }];
  return (
    <>
      <section class="seccion claro">
        <div class="actividades contenedor">
          <div class="actividades__titulo">
            <div class="act__titu">
              <div class="titu">
                <h3>
                  Actividades <span>Académicas</span>
                </h3>
              </div>
              <div class="cont">
                <p>
                  Conoce mas de nuestras actividades academicas realizadas en el
                  transcurso de los años y tambien las actividades programadas
                  para los siguientes meses.
                </p>
              </div>
            </div>
            <div class="linea"></div>
          </div>
          <div class="actividades__actividades">
            <div class="act__album">
              <div class="titu">
                <h4>
                  Actividades <span>Anteriores</span>
                </h4>
                <p>Album de actividades academicas</p>
                <button class="ingresar">Ingresar</button>
              </div>
            </div>
            <div class="act__nuevas">
              <div class="titu">
                <h4>Proximas Actividades</h4>
                <p>Eventos | Comunicados</p>
              </div>
              <div class="carousel-act">
                <div class="carousel__contenedor-act">
                  <div class="carousel__lista-act">
                    <Carousel breakPoints={breakPoints}>
                      <Card />
                      <Card />
                      <Card />
                    </Carousel>
                  </div>
                </div>
                <div role="tablist" class="carousel__indicadores-act"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intitucion_eveaca;

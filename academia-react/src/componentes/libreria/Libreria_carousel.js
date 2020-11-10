import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";

const Libreria_carousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <section class="seccion claro">
        <div class="libreria contenedor">
          <div class="libreria__titulo">
            <h3>Librería</h3>
            <h6>Libros mas recomendados</h6>
          </div>
          <div class="libreria__libros">
            <div class="carousel">
              <div class="carousel__contenedor">
                <Carousel breakPoints={breakPoints}>
                  <Card number="1" />
                  <Card number="2" />
                  <Card number="3" />
                  <Card number="4" />
                  <Card number="5" />
                  <Card number="6" />
                  <Card number="7" />
                  <Card number="8" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Libreria_carousel;

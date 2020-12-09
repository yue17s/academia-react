import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import LibreriaContext from "../../context/libreria/libreriaContext";
import { getLibrosRecomendados } from "../../services/librosServices";

const Libreria_carousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];
  const [libros, setLibros] = useState([]);
  const traerLibros = async () => {
    const data = await getLibrosRecomendados();
    setLibros(data);
  };
  useEffect(() => {
    traerLibros();
  }, []);

  const { globalMateria } = useContext(LibreriaContext);
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
                  {globalMateria
                    ? globalMateria.libreriaMateria.map((objLibreria) => {
                        return (
                          <Card number="1"
                            key={objLibreria.id_libre}
                            objLibreria={objLibreria}
                          />
                        );
                      })
                    : libros.map((objLibreria) => {
                        return (
                          <Card number="1"
                            key={objLibreria.id_libre}
                            objLibreria={objLibreria}
                          />
                        );
                      })}
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

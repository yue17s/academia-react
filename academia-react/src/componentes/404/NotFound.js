import React from "react";
import imgs from "../imgs";

const NotFound = (props) => {
  setTimeout(() => {
    props.history.push("/");
  }, 10000);
  const goHome = () => {
    props.history.push("/");
  };
  return (
    <>
      <header>
        <section className="seccion"></section>
      </header>
      <main>
        <section className="seccion">
          <div className="notfound contenedor">
            <div className="nf__top">
              <div className="nf__img">
                <img src={imgs[19].imagen} />
              </div>
              <div className="nf__txt">
                <h1>ERROR<br></br>404</h1>
              </div>
            </div>
            <div className="nf__botton">
              <p>
                La página que intentas solicitar no esta en el servidor (error
                404)
              </p>
              <button onClick={goHome}>Regresar al Inicio</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;

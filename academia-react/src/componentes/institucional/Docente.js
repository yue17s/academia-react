import React from "react";

const Docente = ({ objDocente, setDocenteSeleccionado }) => {
  const seleccionarDocente = () => {
    setDocenteSeleccionado(objDocente);
  };

  return (
    <>
      {setDocenteSeleccionado ? (
          <div className="docente" id="docente">
            <a>
              <div className="carddoc">
                <div className="carddoc__imagen">
                  <img src={objDocente.imagen_doce} alt="" />
                </div>
                <div className="carddoc__nombre">
                  <h6>{objDocente.nom_docemate}</h6>
                </div>
                <div className="carddoc__subnombre">
                  <div className="sub">
                    {objDocente.ape_doce}
                    <br /> {objDocente.nom_doce}
                  </div>
                  <div class="carddoc__ver">
                    <button onClick={seleccionarDocente}>Ver más</button>
                  </div>
                </div>
              </div>
            </a>
          </div>
      ) : (
        <div class="docentes__one">
          <div class="docenteone" id="docenteone">
            <a>
              <div class="carddocone">
                <div class="carddocone__imagen">
                  <img src={objDocente.imagen_doce} alt="" />
                </div>
                <div class="carddocone__nombre">
                  <h6>{objDocente.nom_docemate}</h6>
                </div>
                <div class="carddocone__subnombre">
                  <div class="sub">
                    {objDocente.ape_doce}
                    <br /> {objDocente.nom_doce}
                  </div>
                  <div class="cont">
                    <div class="datos">
                      <span><b>Email: </b>{objDocente.email_doce}</span><br></br>
                      <span><b>Detalles: </b>{objDocente.cv_doce}.</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Docente;

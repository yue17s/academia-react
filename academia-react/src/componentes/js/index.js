import { getResourceAll } from "./servicios.js";

let bibliotecaLibros = document.getElementById("biblioteca__libros");
let materiaOpt = document.getElementById("materia__opt");
let bibliotecamate = document.getElementById("biblioteca__mate");
/**03. ************************************************/

const dibujarLibrosPorMateria = (materias) => {
  bibliotecamate.innerHTML = materiaOpt.value;
  getResourceAll("biblioteca").then((biblioteca) => {
    const fragment = new DocumentFragment();
    let contarLibros = 0;
    biblioteca.forEach((libro) => {
      if (libro.materia_bibli == materias) {
        contarLibros = contarLibros + 1;
        if (libro.disponible == true) {
          libro.materia_bibli = "DISPONIBLE";
        } else {
          libro.materia_bibli = "PRESTADO";
        }
        const bibliotecaTR = document.createElement("tr");
        bibliotecaTR.innerHTML = `
                        <td style="text-align:center;">${contarLibros}</td>
                        <td style="text-align:center;" width="95px">
                        <div class="bibli__imagen">
                            <img src="${libro.imagen_bibli}" alt="" />
                        </div>
                        </td>
                        <td>
                        <ul>
                            <li>Codigo: ${libro.codigo_bibli}</li>
                            <li>Título: ${libro.titulo_bibli}</li>
                            <li>Sub-materia: ${libro.submateria_bibli}</li>
                            <li>Autor: ${libro.autor_bibli}</li>
                            <li>Editorial: ${libro.editorial_bibli}</li>
                            <li>Edición: ${libro.edicion_bibli}</li>
                            <li>ISBN: ${libro.isbn_bibli}</li>
                        </ul>
                        </td>
                        <td style="text-align:center;" width="90px">
                        ${libro.materia_bibli}</td>
        `;
        fragment.appendChild(bibliotecaTR);
      }
    });
    if (contarLibros != 0) {
      console.log(contarLibros);
      bibliotecaLibros.appendChild(fragment);
    } else {
      const bibliotecaTR = document.createElement("tr");
      bibliotecaTR.innerHTML = `
                                <td style="text-align:center; color:#FF0000" colspan="4">No existen Libros</td>
                                `;
      fragment.appendChild(bibliotecaTR);
      bibliotecaLibros.appendChild(fragment);
    }
  });
};
materiaOpt.onchange = (e) => {
  bibliotecaLibros.innerHTML = "";
  dibujarLibrosPorMateria(materiaOpt.value);
};
/*const getAllLibros = (namemate) => {
  getResourceAll("biblioteca").then((biblioteca) => {
    console.log(namemate);
    console.log("obvio");
  });
};*/

/******************************************************/
/**02. ************************************************/
const dibujarMateria = (materia) => {
  const fragment = new DocumentFragment();
  materia.forEach((mate) => {
    const materiaOP = document.createElement("option");
    materiaOP.setAttribute("value", `${mate.materia_mate}`);
    materiaOP.innerHTML = `
            <span>${mate.materia_mate}</span>
    `;
    fragment.appendChild(materiaOP);
  });
  materiaOpt.appendChild(fragment);
  if (materiaOpt.value != "") {
    dibujarLibrosPorMateria(materiaOpt.value);
  }
};
const getAllMateria = () => {
  getResourceAll("materia").then((materiaRpta) => {
    dibujarMateria(materiaRpta);
  });
};
/******************************************************/
/**01. ************************************************/
/*const dibujarBiblioteca = (biblioteca) => {
  const fragment = new DocumentFragment();
  biblioteca.forEach((libro, id) => {
    const bibliotecaTR = document.createElement("tr");
    bibliotecaTR.innerHTML = `
                    <td style="text-align:center;">${id + 1}</td>
                    <td style="text-align:center;" width="95px">
                    <div class="bibli__imagen">
                        <img src="${libro.imagen_bibli}" alt="" />
                    </div>
                    </td>
                    <td>
                    <ul>
                        <li>Codigo: ${libro.codigo_bibli}</li>
                        <li>Título: ${libro.titulo_bibli}</li>
                        <li>Sub-materia: ${libro.submateria_bibli}</li>
                        <li>Autor: ${libro.autor_bibli}</li>
                        <li>Editorial: ${libro.editorial_bibli}</li>
                        <li>Edición: ${libro.edicion_bibli}</li>
                        <li>ISBN: ${libro.isbn_bibli}</li>
                    </ul>
                    </td>
                    <td style="text-align:center;" width="90px">${
                      libro.disponible
                    }</td>
    `;
    fragment.appendChild(bibliotecaTR);
  });
  bibliotecaLibros.appendChild(fragment);
};
const getAllBiblioteca = () => {
  getResourceAll("biblioteca").then((bibliotecaRpta) => {
    dibujarBiblioteca(bibliotecaRpta);
  });
};*/
/******************************************************/
//getAllBiblioteca();
getAllMateria();
//filtrarLibros();

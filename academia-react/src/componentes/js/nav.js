let body = document.querySelector("body");
let html = document.querySelector("html");
let navegador = document.getElementById("navegador");

body.onscroll = (e) => {
  let scrollAbajo = html.scrollTop;

  if (scrollAbajo > 350) {
    navegador.classList.add("oscuro");
  } else {
    navegador.classList.remove("oscuro");
  }
};

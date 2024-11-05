console.log("Cargando index.js");

// importamos componentes

// import { menu } from "./components/menu.js";
import { header } from "./components/header.js";
import { home } from "./pages/home.js";
import { about } from "./pages/about.js";

function app() {
  return `

  ${header()}
  <div id="vistas">Aqui van las vistas</div>
  
  `;
}

document.querySelector("#root").innerHTML = app();

// cargamos la vista home
document.querySelector("#vistas").innerHTML = home();

function navegar(pagina) {
  if (pagina == "home") {
    document.querySelector("#vistas").innerHTML = home();
  } else if (pagina == "about") {
    document.querySelector("#vistas").innerHTML = about();
  }
}

document.querySelector("#btn-home").addEventListener("click", function () {
  navegar("home");
});

document.querySelector("#btn-about").addEventListener("click", function () {
  navegar("about");
});

// Cargamos por defecto la pagina home
navegar("home");

import { initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateHanged">
          <img
            src="./images/hanged_img/hangedDashboard.png"
            alt=" go to page hanged"
          />
          <h2>HANGED GAME</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTresEnRaya">
          <img
            src="./images/tresEnRaya_img/tresEnRayaDashboard.png"
            alt="go to tres en raya"
          />
          <h2>TRES EN RAYA</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateMemory">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  const navigateHanged = document.getElementById("navigateHanged");
  navigateHanged.addEventListener("click", () => {
    initControler("Hanged");
  });

  const navigateTresEnRaya = document.getElementById("navigateTresEnRaya");
  navigateTresEnRaya.addEventListener("click", () => {
    initControler("TresEnRaya");
  });

  const navigateMemory = document.getElementById("navigateMemory");
  navigateMemory.addEventListener("click", () => {
    initControler("Memory");
  });
};

export const PrintDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();
};

//getInfo();

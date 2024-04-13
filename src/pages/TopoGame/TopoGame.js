import "./TopoGame.css";
import { generarBooleanoAleatorio, timer } from "../../utils";
import { setStateTopo } from "../../global/state/topoState";
import { PrintBoxTopoGame } from "../../components/BoxTopoGame/BoxTopoGame";
//! ------------------------------------------------------------------------------
//? ------------------------------TEMPLATE INICIAL--------------------------------
//! ----------------------------------------------------------------

const template = () => `
    <div class="containerTopo">
      <div id="time"></div>
      <div class="boardGameTopo">
        <div class="boardContainer">
        </div>
      </div>
      <div class="controls">
        <div id="acierto">Aciertos: <span id="spn_aciertos">2</span></div>
        <div id="restart"><button id="restarBtn">Restart</button></div>
      </div>
    </div>
`;

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION START GAME--------------
//! ------------------------------------------------------------------------------

const startGame = () => {
  document.querySelector(".boardContainer").innerHTML = "";
  for (let i = 0; i < 12; i++) {
    PrintBoxTopoGame(i);
  }

  const buttonBoxes = document.querySelectorAll(".topoBox");
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  buttonBoxes.forEach((buttonBox, i) => {
    setInterval(() => {
      //debugger;
      if (generarBooleanoAleatorio(0.2)) {
        //aqui meto la funcion de util para generar probabilidad de true o falsa, es decir, de que salga o no el topo
        buttonBox.innerHTML = `<img id='img_${i}' src='../../public/images/topo_img/topoImg.png'/>`;

        setTimeout(() => {
          buttonBox.innerHTML = "";
        }, getRandomNumber(500, 1500));
      }
    }, getRandomNumber(800, 2000)); // TODO------este tiene que ser random
  });

  setStateTopo("aciertos", 0);
  setStateTopo("interval", 0);

  setStateTopo(
    "interval",
    setInterval(() => {
      timer("time");
    }, 1000)
  );
};

//! ------------------------------------------------------------------------------
//? ---------------------------FUNCIÓN----------------------------
//! ------------------------------------------------------------------------------

//! ------------------------------------------------------------------------------
//? ---------------------------EVENTOS PARA EL JUEGO----------------------------
//! ------------------------------------------------------------------------------

const addEventListeners = () => {
  const buttonRestart = document.getElementById("restarBtn");
  buttonRestart.addEventListener("click", () => {
    startGame();
  });
};

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------

export const PrintTopoGame = () => {
  document.querySelector("main").innerHTML = template();

  startGame();

  addEventListeners();
};

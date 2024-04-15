import "./TopoGame.css";
import { generarBooleanoAleatorio, getRandomNumber, timer } from "../../utils";
import { getStateTopo, setStateTopo } from "../../global/state/topoState";
import { PrintBoxTopoGame } from "../../components/BoxTopoGame/BoxTopoGame";
import { getStateMemory } from "../../global/state/memoryState";

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
        <div id="acierto">Aciertos: <span id="spn_aciertos"></span></div>
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

  const topoBoxes = document.querySelectorAll(".topoBox");

  topoBoxes.forEach((topoBox, i) => {
    setInterval(() => {
      //funcion propia de js, ejecuta lo de dentro cada x milisegundos.
      if (generarBooleanoAleatorio(0.2)) {
        //le digo que salga con un 20% de probabilidad
        topoBox.innerHTML = `<img id='img_${i}' src='../../public/images/topo_img/topoImg.png'/>`;
        /** añadir evento click a la imagen con get elementbyid. y en el listener coger el contardor de aciertos, incrementarlo en 1 y
         *  guardarlo con set en el estado
         * y luego actualizar con un inner el span en html*/
        /** cambiar la imagen dentro del listener por la del topo llorando*/
        const topoImg = document.getElementById(`img_${i}`);

        topoImg.addEventListener("click", () => {
          topoBox.innerHTML = `<img id='img_${i}' src='../../public/images/topo_img/topoImgSad.png'/>`;
          setTimeout(() => {
            topoBox.innerHTML = "";
          }, 500);

          const aciertos = getStateTopo("aciertos") + 1;
          setStateTopo("aciertos", aciertos);
          document.getElementById("spn_aciertos").innerHTML = aciertos;
        });
        setTimeout(() => {
          topoBox.innerHTML = "";
        }, getRandomNumber(500, 1500)); //este es el tiempo para que desaparezca el topo, es decir, se muestra durante ese tiempo.
      }
    }, getRandomNumber(800, 2000)); //entre 800 y 2000mls se ejecuta lo de dentro.
  });

  setStateTopo("aciertos", 0);
  document.getElementById("spn_aciertos").innerHTML = "";

  setStateTopo("interval", 0);

  setStateTopo("minutes", 0);
  setStateTopo("seconds", 0);

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

import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { generador, generateRandom, timeGenerator } from "../../utils";
import Swal from "sweetalert2";

import "./Memory.css";

const template = () => `
<div id="containerMemory"> 
    <div class="wrapper">
      <div class="stats-c">
        <div id="moves"></div>
        <div id="time"></div>
      </div>
      <div class="game-c"></div>
      <button id="stop" class="hide">Restart Game</button>
    </div>
    <div class="controls-c">
      <p id="result"></p>
</div></div>`;

const starGame = () => {
  const stopButton = document.getElementById("stop");

  setStateMemory("interval", setInterval(timeGenerator, 1000));
  Swal.fire({
    position: "center",
    title: "SUERTEEE 😘",
    imageUrl: "./sourceMemory/memoryDashboard.png",
    imageHeight: 300,
    imageAlt: "A tall image",
    showConfirmButton: false,
    timer: 1000,
  });
  setTimeout(() => {
    //    console.log("setTime");

    setStateMemory("movesCount", 0);
    setStateMemory("seconds", 0);
    setStateMemory("minutes", 0);
    const controls = document.querySelector(".controls-c");
    controls.classList.add("hide");
    stopButton.classList.remove("hide");

    const moves = document.getElementById("moves");
    moves.innerHTML = `<span>Moves:</span> ${getStateMemory("movesCount")}`;
    init();
  }, 900);
  console.log("que es");

  // --------- BOTON DE RESTART (ANTES STOP)  ---------------
  const handleStop = () => {
    console.log("CACA5STOP");

    const time = document.getElementById("time");
    time.innerHTML = "";
    clearInterval(getStateMemory("interval"));
    const controls = document.querySelector(".controls-c");
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    starGame(); // Dejo el botón stop que tenía pedro, y le añado la función de start para que haga un restart
  };

  setStateMemory("stopGame", handleStop);
  stopButton.addEventListener("click", handleStop);
};

const init = () => {
  const result = document.getElementById("result");
  result.innerText = "";
  setStateMemory("winCount", 0);
  let cardValues = generateRandom();
  //console.log(cardValues);

  generador(cardValues);
};

export const PrintMemoryPage = () => {
  document.querySelector("main").innerHTML = template();
  starGame();
};

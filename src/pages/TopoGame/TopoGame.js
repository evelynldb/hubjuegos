import "./TopoGame.css";
import { timer } from "../../utils";
import { setStateTopo } from "../../global/state/topoState";
//! ------------------------------------------------------------------------------
//? ------------------------------TEMPLATE INICIAL--------------------------------
//! ----------------------------------------------------------------

const template = () => `
    <div class="containerTopo">
      <div id="time"></div>
      <div class="boardGameTopo">
        <div class="boardContainer">
          <div class="topoBox"></div>
                  <div class="topoBox"></div>
                <div class="topoBox"></div>
                  <div class="topoBox"></div>
          <div class="topoBox"></div>
                  <div class="topoBox"></div>
            <div class="topoBox"></div>
                  <div class="topoBox"></div>
            <div class="topoBox"></div>
                  <div class="topoBox"></div>
          <div class="topoBox"></div>
                  <div class="topoBox"></div>


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
  setStateTopo("interval", setInterval(timer("time"), 1000));
};

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------

export const PrintTopoGame = () => {
  document.querySelector("main").innerHTML = template();

  startGame();
};

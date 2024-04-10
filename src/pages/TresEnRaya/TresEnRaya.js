import "./TresEnRaya.css";
import { PrintBoardTresEnRaya } from "../../components/BoardTresEnRaya/BoardTresEnRaya";
import {
  getStateTresEnRaya,
  setStateTresEnRaya,
} from "../../global/state/tresEnRayaState";
import { getUser } from "../../global/state/globalState";
import { computerMove, getRandomBinary, hasWon } from "../../utils";

//! ------------------------------------------------------------------------------
//? ------------------------------TEMPLATE INICIAL--------------------------------
//! ----------------------------------------------------------------

const template = () => `
    <div class="container">
      <div class="titleContainer">
        <h1>Juega contra "Computer"</h1>
        <div><span> Le toca empezar el juego a: </span><span id="turno"> </span>
       </div>
       <br>
        <button id="buttonRestart">RESTART</button>

      </div>
      <div class="game">
        <div id="gameBoard">board</div>
      </div>
    </div>
    `;

//! -------------------------------------------------------------------------------
//? ------------------------------FUNCIÓN START GAME (& RESTART)--------------------------------
//! -----------------------------------------------------------------------------------

const startGame = () => {
  document.getElementById("gameBoard").innerHTML = ""; // importante eliminar el tablero antes de iniciar uno nuevo, sino hago esto, me añade un tablero cada vez que doy al botón!!
  setStateTresEnRaya("boardGame", [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  for (let i = 0; i < 9; i++) {
    // se supone que con el bucle creo 9 veces la movida
    PrintBoardTresEnRaya(i);
  }

  listeners();

  const turno = getRandomBinary()
    ? getUser().name.substring(0, getUser().name.length - 4) //con esto le quito las últimas 4 letras que son USER
    : "Computer"; // con esto lo que hago es que el turno sea aleatorio al principio de la partida.
  setStateTresEnRaya("turnoGame", turno);

  if (turno === "Computer") {
    const currentBoard = getStateTresEnRaya("boardGame"); // Obtengo el board del estado, aunque sé que es null
    const indexMove = computerMove("O", currentBoard); // Pido el movimiento de computer
    currentBoard[indexMove] = "O"; // actualizado mi variable local del board
    setStateTresEnRaya("boardGame", currentBoard); // guardo el board en el estado
    console.log(getStateTresEnRaya("boardGame"));
    document.getElementById(
      indexMove
    ).innerHTML = `<img src="./images/O.png" alt="O">`; // Pinto la imagen de la O en HTML
    setStateTresEnRaya(
      "turnoGame",
      getUser().name.substring(0, getUser().name.length - 4)
    );
  }
  document.getElementById("turno").innerHTML = turno;
};

const listeners = () => {
  const buttonBoxes = document.querySelectorAll(".buttonBox");

  buttonBoxes.forEach((buttonBox) => {
    console.log(buttonBox);
    buttonBox.addEventListener("click", () => {
      //importante tener en mente que el CLICK siempre lo va a hacer el USER
      console.log(buttonBox.parentElement.id); // ESTA PARTE NO LA ENTIENDO
      const boardPosition = buttonBox.parentElement.id;

      // Traer jugador para saber si X o O

      // ----------------Determinar si el jugador actual es el usuario o el ordenador
      const currentPlayer = getStateTresEnRaya("turnoGame");

      // ------------Asignar la ficha correspondiente al jugador actual
      const playerSymbol =
        currentPlayer === getUser().name.substring(0, getUser().name.length - 4)
          ? "X"
          : "O";

      // Traer (get) boargaGame

      // -------------Obtener el estado actual del tablero
      const currentBoard = getStateTresEnRaya("boardGame");

      // -------------Verificar si la celda está vacía antes de asignar la ficha

      if (currentBoard[boardPosition] === null) {
        //si es igual a null la casilla está disponible.
        //----------- Asignar la ficha del jugador actual a la posición del tablero

        currentBoard[boardPosition] = playerSymbol; // con esto actualizo  el tablero

        // -----------Actualizar el estado del tablero en el estado global
        setStateTresEnRaya("boardGame", currentBoard);
        console.log(getStateTresEnRaya("boardGame"));
        // -----------Renderizar la ficha en la celda del tablero
        buttonBox.parentElement.innerHTML = `<img src="./images/${playerSymbol}.png" alt="${playerSymbol}">`;
        setTimeout(function () {
          if (hasWon("X", currentBoard)) {
            alert("has ganado");
          } else {
            const indexMove = computerMove("O", currentBoard);
            currentBoard[indexMove] = "O";
            setStateTresEnRaya("boardGame", currentBoard);
            console.log(getStateTresEnRaya("boardGame"));
            document.getElementById(
              indexMove
            ).innerHTML = `<img src="./images/O.png" alt="O">`;
            if (hasWon("O", currentBoard)) {
              alert("ha ganado computer");
            }
          }
        }, 600);
        // Comprobamos si ha ganado el usuario
      }
    });
  });
};

//! ------------------------------------------------------------------------------
//? ---------------------------EVENTOS PARA EL TABLERO----------------------------
//! ------------------------------------------------------------------------------

const addEventListeners = () => {
  const buttonRestart = document.getElementById("buttonRestart");
  buttonRestart.addEventListener("click", () => {
    startGame();
  });
};

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------

export const PrintTresEnRaya = () => {
  document.querySelector("main").innerHTML = template();

  startGame();

  addEventListeners();
};

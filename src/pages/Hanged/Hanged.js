import "./Hanged.css";
import { getStateHanged, setStateHanged } from "../../global/state/hangedState";
import { PrintLettersHanged } from "../../components";
import { randomWord } from "../../global/data";
import Swal from "sweetalert2";

//! ------------------------------------------------------------------------------
//? ------------------------------TEMPLATE INICIAL--------------------------------
//! ----------------------------------------------------------------

const template = () => `
 <div id="hanged">
   <div class="hangedContainer">
     <div class="hangedMitad"><img src="./images/hanged_img/6.png" alt="Imagen juego del ahorcado" id="ahorcadoImg" ></div>
     <div  class="hangedMitad">
       <div id="wordContainer"></div>
       <div>
         <input
             type="text"
             id="inputChar"
             placeholder=""
             maxlength="1"
             minlength="1"
         />
         <button id="buttonTry">Try</button>
       </div>
     </div>
   </div>


   <div class="hangedContainer">
     <div class="hangedMitad direction-row countDown" >
       <span class="" >Tries: </span>
       <span class="" id="countDown"></span></div>
     <div class="hangedMitad  direction-row" id="inputCharContainer">
       <div id="wrongChar"></div> 
       <button id="buttonRestart">Restart</button>
     </div>
   </div>
</div>


`;

//! ------------------------------------------------------------------------------
//? ---------------------------EVENTOS PARA CONTENEDOR LETRA------------------------
//! ------------------------------------------------------------------------------
const addEventListeners = () => {
  const buttonTry = document.getElementById("buttonTry");
  const buttonRestart = document.getElementById("buttonRestart");
  const inputChar = document.getElementById("inputChar");

  const enterLetter = () => {
    //esto es lo que se ejecuta cuando metemos una letra y añado las siguientes validaciones:
    if (getStateHanged("countDown") === 0) return; // pongo un return vacío porque, si ya no hay más oportunidades, no quiero que haga nada. SI no, lo que me estaba haciendo era permitir tries negativos.

    if (!inputChar.value.length > 0) return; // meto esto paara que no dejar que entren valores vacíos

    if (!/^[a-zA-Z]$/.test(inputChar.value)) {
      //con esto hago que solo entre letras
      inputChar.value = ""; //con esto, si metes un 3 vacía el input
      inputChar.focus(); // y con esto mantengo focus en input para seguir escribiendo
      return;
    }

    const letters = getStateHanged("letters"); //me traigo las letras que tenga en el array de erróneas
    if (!letters.includes(inputChar.value)) {
      //si la letra no está, la meto en el array, y llamo a la funsión de check
      letters.push(inputChar.value);
      setStateHanged("letters", letters);
      checkChar(inputChar.value); //compruebo si la letra está en la palabra
    }
    inputChar.value = ""; //vaciamos y ponemos foco para el siguiente try.
    inputChar.focus();
  };

  buttonTry.addEventListener("click", (e) => {
    enterLetter();
  });

  inputChar.addEventListener("change", (e) => {
    enterLetter();
  });

  buttonRestart.addEventListener("click", (e) => {
    restart();
  });
};

//! ------------------------------------------------------------------------------
//? ---------------------------FUNCIÓN BOTÓN RESTART-----------------------------------
//! ------------------------------------------------------------------------------
const restart = () => {
  const word = randomWord();
  document.getElementById("wordContainer").innerHTML = "";

  setStateHanged("hangedWord", word.toUpperCase());
  setStateHanged("countDown", 6);
  setStateHanged("letters", []);
  setStateHanged("contadorAciertos", 0);

  for (let i = 0; i < word.length; i++) {
    const info = {
      id: i,
      char: word[i].toUpperCase(),
    };
    PrintLettersHanged(info);
  }

  document.getElementById("countDown").innerHTML = getStateHanged("countDown");
  document.getElementById("wrongChar").innerHTML = "";
  document.getElementById("buttonTry").disabled = false;
  document.getElementById("inputChar").focus();
  document.getElementById("ahorcadoImg").src = `./images/hanged_img/6.png`;
};

//! ------------------------------------------------------------------------------
//? ---------------------------FUNCIÓN PARA LA LETRA------------------------------
//! ------------------------------------------------------------------------------

const checkChar = (char) => {
  let encontrado = false;
  const word = getStateHanged("hangedWord");
  word.split("").forEach((letter, i) => {
    // con esto recorremos la palabra como si fuese un array. con el split transformo el string en un array para recorrerlo
    if (letter === char.toUpperCase()) {
      encontrado = true;
      document.getElementById(i).style.display = "flex"; // con esto hago visible la letra acertada
      setStateHanged(
        "contadorAciertos",
        getStateHanged("contadorAciertos") + 1
      );
      if (hasWon()) {
        document.getElementById("buttonTry").disabled = true;
        setTimeout(function () {
          //alert("You WIN!! 😘");
          Swal.fire({
            position: "center",
            title: "GOOD JOB!! 🥳",
            imageUrl: "./images/goob job.gif",
            imageHeight: 300,
            imageAlt: "A tall image",
            showConfirmButton: false,
            timer: 3000,
          });
        }, 600); // le meto este tiempo de retraso para el alert, para que se vea la palabra
      }
    }
  });

  if (!encontrado) {
    document.getElementById("wrongChar").innerHTML += char.toUpperCase() + "  "; //con esto la letra no encontrada la añado en el div wrongChar, lo paso a mayus
    const tries = getStateHanged("countDown") - 1;
    setStateHanged("countDown", tries);
    document.getElementById("countDown").innerHTML = tries;
    document.getElementById(
      "ahorcadoImg"
    ).src = `./images/hanged_img/${tries}.png`;

    if (tries === 0) {
      document.getElementById("buttonTry").disabled = true;
    }
  }
};

//! ------------------------------------------------------------------------------
//? ------------------------------FUNCION DE HAS GANADO---------------------------
//! ------------------------------------------------------------------------------

const hasWon = () =>
  getStateHanged("contadorAciertos") === getStateHanged("hangedWord").length; //si el numero de aciertos es el igual a la cantidad de letras la palabra, win!

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------

export const PrintHangedPage = () => {
  document.querySelector("main").innerHTML = template();

  restart();

  addEventListeners();
};

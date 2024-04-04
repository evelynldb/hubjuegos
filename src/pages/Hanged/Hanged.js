import "./Hanged.css";

const template = () => `
  <div id="hanged">
    <div><img src="./images/ahorcado_game.png" alt="Imagen juego del ahorcado"></div>
    <div id="word"></div>
    <div id="countdown"></div>
    <div id="inputCharContainer">
        <input
            type="text"
            id="inputChar"
            placeholder="Escribe tu letra"
            maxlength="1"
            minlength="1"
        />
        <button id="buttonTry">Try</button>
    </div>
    <div id="wrongChar"></div>

 </div>

`;

const getWord = () => "hola";
const word = getWord();

const addEventListeners = () => {
  const buttonTry = document.getElementById("buttonTry");
  const inputChar = document.getElementById("inputChar");
  buttonTry.addEventListener("click", (e) => {
    checkChar(inputChar.value);
  });
};

const checkChar = (char) => {
  let posiciones = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      posiciones.push(
        i
      ); /*esto lo pongo así para visualizar las posiciones, con un array, pero luego tengo que cambiarlo
      para visualizar la letra*/
    }
  }
  if (posiciones.length > 0) {
    // Hemos encntrado letra
    alert("encontrada: " + char);
  } else {
    // Letra no encontraa
    alert("no contrada: " + char);
  }
};

export const PrintHangedPage = () => {
  document.querySelector("main").innerHTML = template();
  addEventListeners();
};

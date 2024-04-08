const dataHanged = {
  hangedWord: null, // variable almacena la palabra del ahorcado.
  countDown: 6,
  letters: [],
  contadorAciertos: 0,
};

export const getStateHanged = (typeOfValue) => {
  switch (typeOfValue) {
    case "hangedWord":
      return dataHanged.hangedWord;
    case "countDown":
      return dataHanged.countDown;
    case "letters":
      return dataHanged.letters;
    case "contadorAciertos":
      return dataHanged.contadorAciertos;
  }
};

export const setStateHanged = (typeOfValue, setValue) => {
  switch (typeOfValue) {
    case "hangedWord":
      dataHanged.hangedWord = setValue;
      break;
    case "countDown":
      dataHanged.countDown = setValue;
      break;
    case "letters":
      dataHanged.letters = setValue;
      break;
    case "contadorAciertos":
      dataHanged.contadorAciertos = setValue;
      break;
  }
};

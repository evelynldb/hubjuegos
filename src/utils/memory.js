import { PrintCardMemory } from "../components";
import { items } from "../global/data/data.memory";
import { getStateMemory, setStateMemory } from "../global/state/memoryState";

export const generateRandom = (size = 4) => {
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length); /// genero un index del array de forma aleatoria
    cardValues.push(tempArray[randomIndex]);
    // con el splice quitas el imagen que ya has metido en carVaslue y lo quitar de tempArray
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

export const timeGenerator = () => {
  setStateMemory("seconds", getStateMemory("seconds") + 1);

  if (getStateMemory("seconds") >= 60) {
    setStateMemory("minutes", getStateMemory("minutes") + 1);
    setStateMemory("seconds", 0);
  }
  let secondsValue =
    getStateMemory("seconds") < 10
      ? `0${getStateMemory("seconds")}`
      : getStateMemory("seconds");
  let minutesValue =
    getStateMemory("minutes") < 10
      ? `0${getStateMemory("minutes")}`
      : getStateMemory("minutes");
  const timeValue = document.getElementById("time");
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

export const generador = (cardValues, size = 4) => {
  const gameContainer = document.querySelector(".game-c");
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  cardValues.sort(() => Math.random() - 0.5);

  for (let i = 0; i < size * size; i++) {
    PrintCardMemory(cardValues[i]);
  }

  listeners(cardValues);
};

const listeners = (cardValues) => {
  const cards = document.querySelectorAll(".card-container");
  setStateMemory("cards", cards);

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("matched")) {
        card.classList.add("flipped");
        if (!getStateMemory("firstCard")) {
          console.log("entro");
          setStateMemory("firstCard", card);
          console.log("lo ha metido", getStateMemory("firstCard"));
          setStateMemory(
            "firstCardValue",
            card.getAttribute("data-card-value")
          );
        } else {
          movesCounter();
          setStateMemory("secondCard", card);

          setStateMemory(
            "secondCardValue",
            card.getAttribute("data-card-value")
          );

          if (
            getStateMemory("firstCardValue") ==
            getStateMemory("secondCardValue")
          ) {
            getStateMemory("firstCard").classList.add("matched");
            getStateMemory("secondCard").classList.add("matched");

            setStateMemory("firstCard", false);

            setStateMemory("winCount", getStateMemory("winCount") + 1);

            if (
              getStateMemory("winCount") == Math.floor(cardValues.length / 2)
            ) {
              const result = document.getElementById("result");
              result.innerHTML = `<div class="won"><img class src="./sourceMemory/YOUW.gif" />
            `;
              getStateMemory("stopGame")();
            }
          } else {
            /** crea dos variables tempFirst, tempSecond que asocia su valor
             * al los valores de firstCard, secondCard */
            let [tempFirst, tempSecond] = [
              getStateMemory("firstCard"),
              getStateMemory("secondCard"),
            ];
            setStateMemory("firstCard", false);
            setStateMemory("secondCard", false);
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
  });
};

const movesCounter = () => {
  setStateMemory("movesCount", getStateMemory("movesCount") + 1);
  const moves = document.getElementById("moves");
  moves.innerHTML = `<span>Moves:</span>${getStateMemory("movesCount")}`;
};

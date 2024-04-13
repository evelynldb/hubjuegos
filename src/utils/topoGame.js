import { getStateTopo, setStateTopo } from "../global/state/topoState";

export const timer = (elementId) => {
  setStateTopo("seconds", getStateTopo("seconds") + 1);

  if (getStateTopo("seconds") >= 60) {
    setStateTopo("minutes", getStateTopo("minutes") + 1);
    setStateTopo("seconds", 0);
  }
  let secondsValue =
    getStateTopo("seconds") < 10
      ? `0${getStateTopo("seconds")}`
      : getStateTopo("seconds");
  let minutesValue =
    getStateTopo("minutes") < 10
      ? `0${getStateTopo("minutes")}`
      : getStateTopo("minutes");
  const timeValue = document.getElementById(elementId);
  if (timeValue)
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

export const generarBooleanoAleatorio = (probabilidad) => {
  if (probabilidad < 0 || probabilidad > 1) {
    return "La probabilidad debe estar entre 0 y 1";
  }
  return Math.random() < probabilidad;
};

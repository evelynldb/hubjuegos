import { getStateTopo, setStateTopo } from "../global/state/topoState";

export const timer = (elementId) => {
  console.log("A");
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

const dataState = {
  seconds: 0,
  minutes: 0,
  interval: null,
  aciertos: 0,
};

export const getStateTopo = (typeOfValue) => {
  switch (typeOfValue) {
    case "seconds":
      return dataState.seconds;
    case "minutes":
      return dataState.minutes;
    case "interval":
      return dataState.interval;
    case "aciertos":
      return dataState.aciertos;
  }
};

export const setStateTopo = (typeOfValue, setValue) => {
  switch (typeOfValue) {
    case "seconds":
      dataState.seconds = setValue;
      break;
    case "minutes":
      dataState.minutes = setValue;
      break;
    case "interval":
      dataState.interval = setValue;
      break;
    case "aciertos":
      dataState.aciertos = setValue;
      break;
  }
};

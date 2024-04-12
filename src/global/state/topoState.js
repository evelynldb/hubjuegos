const dataState = {
  seconds: 0,
  minutes: 0,
  interval: null,
};

export const getStateTopo = (typeOfValue) => {
  switch (typeOfValue) {
    case "seconds":
      return dataState.seconds;
    case "minutes":
      return dataState.minutes;
    case "interval":
      return dataState.interval;
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
  }
};

const dataTresEnRaya = {
  boardGame: [null, null, null, null, null, null, null, null, null],
  turnoGame: null,
};

export const getStateTresEnRaya = (typeOfValue) => {
  switch (typeOfValue) {
    case "boardGame":
      return dataTresEnRaya.boardGame;
    case "turnoGame":
      return dataTresEnRaya.turnoGame;
  }
};

export const setStateTresEnRaya = (typeOfValue, setValue) => {
  switch (typeOfValue) {
    case "boardGame":
      dataTresEnRaya.boardGame = setValue;
      break;
    case "turnoGame":
      dataTresEnRaya.turnoGame = setValue;
      break;
  }
};

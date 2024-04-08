//! ------------------------------------------------------------------------------
//? --------------FUNCION QUE DICE SI HAS GANADO CON TRUE O FALSE-----------------
//! ------------------------------------------------------------------------------

// Esta variable define las combinaciones ganadoras en el tablero
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Filas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columnas
  [0, 4, 8],
  [2, 4, 6], // Diagonales
];

export const hasWon = (player, board) => {
  // Verifica si alguna combinación ganadora contiene las posiciones del jugador
  return winningCombos.some((combo) =>
    combo.every((position) => board[position] === player)
  );
};

//! ------------------------------------------------------------------------------
//? ---------------------------FUNCION JUGADA COMPUTER----------------------------
//! ------------------------------------------------------------------------------

export const computerMove = (player, board) => {
  // 1. Si el tablero está vacío, jugar en el centro (posición 4)
  if (board.every((position) => position === null)) {
    return 4;
  }

  // 2. Si hay una combinación ganadora, jugar en la posición para ganar
  const winningPosition = checkWinningMove(player, board);
  if (winningPosition !== -1) {
    return winningPosition;
  }

  // 3. Si el contrario puede ganar en el próximo movimiento, bloquear esa jugada
  const opponent = player === "X" ? "O" : "X";
  const blockingPosition = checkWinningMove(opponent, board);
  if (blockingPosition !== -1) {
    return blockingPosition;
  }

  // 4. Movimiento aleatorio en una posición vacía
  const emptyPositions = board.reduce((acc, position, index) => {
    if (position === null) {
      acc.push(index);
    }
    return acc;
  }, []);

  const randomIndex = Math.floor(Math.random() * emptyPositions.length);
  return emptyPositions[randomIndex];
};

// Función auxiliar para comprobar si hay una combinación ganadora
const checkWinningMove = (player, board) => {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] === player && board[b] === player && board[c] === null) {
      return c;
    }
    if (board[a] === player && board[c] === player && board[b] === null) {
      return b;
    }
    if (board[b] === player && board[c] === player && board[a] === null) {
      return a;
    }
  }

  return -1;
};

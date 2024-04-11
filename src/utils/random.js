export const getRandomBinary = () => {
  //creo este util para hacer turno aleatorio en 3 en raya
  // Genera un número aleatorio entre 0 y 1
  const randomNum = Math.random();

  // Si el número aleatorio es menor que 0.5, devuelve true, o false
  return randomNum < 0.5 ? true : false;
};

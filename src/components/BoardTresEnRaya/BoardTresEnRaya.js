import "./BoardTresEnRaya.css"; //tendría que haberlo llamado box, porque no es el board, es solo una de las cajas
//en el template meto el template string porque cada una de las casillas va a ser un numero del array de mi board
const template = (info) => `
    <div class="tikBox" id="${info}">
        <button class="buttonBox"></button>
    </div>
`;

export const PrintBoardTresEnRaya = (info) => {
  document.getElementById("gameBoard").innerHTML += template(info);
};

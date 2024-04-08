import "./BoardTresEnRaya.css";

const template = (info) => `
    <div class="tikBox" id="${info}">
        <button class="buttonBox"></button>
    </div>
`;

export const PrintBoardTresEnRaya = (info) => {
  document.getElementById("gameBoard").innerHTML += template(info);
};

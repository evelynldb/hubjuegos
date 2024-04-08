import "./CardMemory.css";

const template = (info) => `
    <div class="card-container" data-card-value="${info.name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${info.image}" class="image"/></div>
     </div>`;

export const PrintCardMemory = (info) => {
  const gameContainer = document.querySelector(".game-c");
  gameContainer.innerHTML += template(info);
  gameContainer.style.gridTemplateColumns = `repeat(${4},auto)`;
};

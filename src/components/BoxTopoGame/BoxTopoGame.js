import { generarBooleanoAleatorio } from "../../utils";
import "./BoxTopoGame.css";

//en el template meto el template string porque cada una de las casillas va a ser un numero del array de mi board
const template = (info) => `
    <div id="topo_${info}" class="topoBox"></div>
`;

export const PrintBoxTopoGame = (info) => {
  document.querySelector(".boardContainer").innerHTML += template(info);
};

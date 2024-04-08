import { getStateHanged } from "../../global/state/hangedState";
import "./LetterHanged.css";

const template = (info) => `
<div class="letter-container">
<span class="letter" id="${info.id}" style="display: none">${info.char}</span>
</div>

`;

export const PrintLettersHanged = (info) => {
  document.getElementById("wordContainer").innerHTML += template(info);
};

import { renderPlayerGrid } from "./modules/players.js";
import { players } from "./modules/playerslist.js";

let playersList;
//Initially setting players when none is available
(() => {
  if (!localStorage.getItem("players"))
    localStorage.setItem("players", JSON.stringify(players));
  playersList = JSON.parse(localStorage.getItem("players"));
})();

renderPlayerGrid(playersList);

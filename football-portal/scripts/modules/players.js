import { players } from "./playerslist.js";
const playersContainer = document.querySelector(".players");

let playersList;
//Initially setting players when none is available
(() => {
  if (!localStorage.getItem("players"))
    localStorage.setItem("players", JSON.stringify(players));
  playersList = JSON.parse(localStorage.getItem("players"));
})();

const playerCardMarkup = (player) => {
  return `
  <div class="players__profileCard">
    <img class="profileCard__img" src="${player.image}" />
    <p>First Name: ${player.first_name}</p>
    <p>First Name: ${player.last_name}</p>
    <div class="profileCard__attributes">
      <p class="attribute__item">Team: ${player.team}</p>
      <p class="attribute__item">Position: ${player.position}</p>
    </div>
  </div>
  `;
};

export const renderPlayerGrid = (players) => {
  players.forEach((player) => {
    const div = document.createElement("div");
    div.innerHTML = playerCardMarkup(player);
    playersContainer.append(div);
  });
};

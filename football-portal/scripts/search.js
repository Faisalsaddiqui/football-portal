import { renderPlayerGrid } from "./modules/players.js";
import {
  getFilteredPlayersByName,
  getFilteredPlayersByTeam,
} from "./modules/filters.js";

let players = [];
const searchInput = document.querySelector(".searchBox__search");
const playersContainer = document.querySelector(".players");
const resetBtn = document.querySelector(".searchBox__reset");
const searchFilter = document.querySelector(".searchBox__filter");

(() => {
  players = JSON.parse(localStorage.getItem("players"));
})();

const setOptionsFilter = () => {
  let options = [];
  players.forEach((player) => {
    let notPresent = options.findIndex((o) => o === player.team);

    if (notPresent) {
      options.push(player.team);
    }
  });

  return options;
};

const main = () => {
  let options = setOptionsFilter();

  options.forEach((option) => {
    let optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.innerText = option;
    searchFilter.append(optionElement);
  });

  renderPlayerGrid(players);
};

main();

const onSearch = (search) => {
  playersContainer.innerHTML = ``;
  let filtered = getFilteredPlayersByName(players, search.toLowerCase());
  if (searchFilter.value) {
    filtered = getFilteredPlayersByTeam(filtered, searchFilter.value);
  }
  renderPlayerGrid(filtered);
};

const clearFilters = () => {
  searchFilter.value = "";
  searchInput.value = "";
  renderPlayerGrid(players);
};

searchInput.addEventListener("keyup", () => {
  onSearch(searchInput.value);
});
searchFilter.addEventListener("change", () => {
  onSearch(searchInput.value);
});

resetBtn.addEventListener("click", () => {
  clearFilters();
});

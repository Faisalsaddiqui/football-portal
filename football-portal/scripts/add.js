const inputFirstName = document.querySelector("#first_name");
const inputLastName = document.querySelector("#last_name");
const inputPosition = document.querySelector("#position");
const inputTeam = document.querySelector("#team");
const inputImage = document.querySelector("#image");
const submit = document.querySelector(".btnBox__btn");
let players = [];

(() => {
  players = JSON.parse(localStorage.getItem("players"));
})();

submit.addEventListener("click", () => {
  if (
    !inputFirstName.value ||
    !inputLastName.value ||
    !inputPosition.value ||
    !inputTeam.value
  ) {
    alert("Please fill all required fields");
    return;
  }

  let newPlayer = {
    first_name: inputFirstName.value,
    last_name: inputLastName.value,
    position: inputPosition.value,
    team: inputTeam.value,
    image: inputImage.value ? inputImage.value : "images/profile.jpg",
  };
  let playersList = [...players, newPlayer];

  localStorage.setItem("players", JSON.stringify(playersList));

  window.location.replace("/");
});

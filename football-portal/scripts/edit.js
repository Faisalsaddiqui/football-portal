let players = [];
const playersSelect = document.querySelector(".playerSelect__select");
const formBoxContainer = document.querySelector(".formBox");

(() => {
  players = JSON.parse(localStorage.getItem("players"));
})();

const setOptions = () => {
  let options = [];
  players.forEach((player) => {
    options.push(`${player.first_name} ${player.last_name}`);
  });

  return options;
};

const formBoxMarkup = () => {
  return `
  <div class="formBox__container">
              <div class="formBox__formControl">
                <label class="formControl__label">First Name:</label>
                <input type="text" id="first_name" />
              </div>
              <div class="formBox__formControl">
                <label class="formControl__label">Last Name:</label>
                <input type="text" id="last_name" />
              </div>
              <div class="formBox__formControl">
                <label class="formControl__label">Team:</label>
                <input type="text" id="team" />
              </div>
              <div class="formBox__formControl">
                <label class="formControl__label">Position:</label>
                <input type="text" id="position" />
              </div>
              <div class="formBox__formControl">
                <label class="formControl__label"
                  >Image Link: (default will be used if none provided)</label
                >
                <input type="text" id="image" />
              </div>
            </div>
            <div class="btnBox">
            <button class="btnBox__delete">Delete</button>
              <button class="btnBox__btn">Update</button>
            </div>
  `;
};

const main = () => {
  let options = setOptions();

  options.forEach((option, index) => {
    let optionElement = document.createElement("option");
    optionElement.value = index;
    optionElement.innerText = option;
    playersSelect.append(optionElement);
  });
};

main();

const renderForm = (index) => {
  let formElement = document.createElement("div");
  formElement.innerHTML = formBoxMarkup();
  formBoxContainer.append(formElement);
  let player = players[index];

  const inputFirstName = document.querySelector("#first_name");
  const inputLastName = document.querySelector("#last_name");
  const inputPosition = document.querySelector("#position");
  const inputTeam = document.querySelector("#team");
  const inputImage = document.querySelector("#image");

  inputFirstName.value = player.first_name;
  inputLastName.value = player.last_name;
  inputPosition.value = player.position;
  inputTeam.value = player.team;
  inputImage.value = player.image;

  //Update button
  document.querySelector(".btnBox__btn").addEventListener("click", () => {
    if (
      !inputFirstName.value ||
      !inputLastName.value ||
      !inputPosition.value ||
      !inputTeam.value
    ) {
      alert("Please fill all required fields");
      return;
    }

    let editedPlayer = {
      first_name: inputFirstName.value,
      last_name: inputLastName.value,
      position: inputPosition.value,
      team: inputTeam.value,
      image: inputImage.value ? inputImage.value : "images/profile.jpg",
    };

    players[index] = editedPlayer;

    localStorage.setItem("players", JSON.stringify(players));

    window.location.replace("/");
  });

  //Delete button
  document.querySelector(".btnBox__delete").addEventListener("click", () => {
    if (confirm("Do you really want to delete this player?")) {
      players.splice(index, 1);

      localStorage.setItem("players", JSON.stringify(players));

      window.location.replace("/");
    }
  });
};

const destroyForm = () => {
  formBoxContainer.innerHTML = "";
};

playersSelect.addEventListener("change", () => {
  destroyForm();
  if (playersSelect.value) {
    renderForm(playersSelect.value);
  }
});

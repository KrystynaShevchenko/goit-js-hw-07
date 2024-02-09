"use ctrict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const controls = document.getElementById("controls");
  const boxesContainer = document.getElementById("boxes");

  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const input = controls.querySelector("input");

  createButton.addEventListener("click", () =>
    createBoxes(Number(input.value))
  );
  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    if (amount < 1 || amount > 100) {
      return;
    }

    destroyBoxes();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
    }

    input.value = "";
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }
});

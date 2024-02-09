"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  const trimmedValue = e.currentTarget.value.trim();
  output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});

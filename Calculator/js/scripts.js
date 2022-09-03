"use strict";

const mainButtons = document.querySelector(".calc-main");
const input = document.querySelector("input[type=text]");
const modalButtons = document.querySelector(".modal-btns");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

mainButtons.addEventListener("click", (event) => {
  if (event.target.classList.contains("num-btn")) {
    console.log(event.target.textContent);
    input.value += event.target.textContent;
  }
});

modalButtons.addEventListener("click", (event) => {
  if (!event.target.tagName === "BUTTON") return;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeButton.addEventListener("click", hideElements);

overlay.addEventListener("click", hideElements);

function hideElements(event) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

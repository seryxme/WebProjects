"use strict";

const login = document.querySelector(".login");
const register = document.querySelector(".register");
const loginPage = document.querySelector(".account-login");
const registerPage = document.querySelector(".account-register");
const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll(".btn");
const obj = {};
const loginObj = {};

login.addEventListener("click", (event) => {
  event.preventDefault();
  login.classList.add("highlight");
  register.classList.remove("highlight");
  loginPage.classList.remove("hidden");
  registerPage.classList.add("hidden");

  buttons[0].addEventListener("click", (event) => {
    event.preventDefault();
    inputs.forEach((input) => {
      loginObj[input.name] = input.value;
      input.value = "";
    });
    console.log(loginObj);
    //   for (let i = 0; i < localStorage.length; i++) {
    //     if (loginObj.email == localStorage.key(i)) {
    //       let foundObj = JSON.parse(localStorage.getItem(loginObj.email));
    //       console.log(foundObj);
    //       //   if (loginObj.password === foundObj.password) {
    //       //     console.log(`Welcome, ${foundObj.fullname}!`);
    //       //   }
    //     }
    //   }
  });
});

register.addEventListener("click", (event) => {
  event.preventDefault();
  login.classList.remove("highlight");
  register.classList.add("highlight");
  loginPage.classList.add("hidden");
  registerPage.classList.remove("hidden");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      inputs.forEach((input) => {
        obj[input.name] = input.value;
        input.value = "";
      });
      const objData = JSON.stringify(obj);
      localStorage.setItem(`${obj.email}`, objData);
    });
  });
});

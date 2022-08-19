"use strict";

console.log("Hello to you and you");
let age = 13;
if (age >= 25) console.log("You're qualified!");
else console.log("You're not qualified!");

let status = age >= 18 ? "Major" : "Minar";
console.log(status);

let qualified = `He is a ${age >= 18 ? "Major" : "Minor"}, he is ${
  age >= 18 ? "" : "not "
}qualified.`;
console.log(qualified);

let day = "Sunday";

switch (day) {
  case "Sunday": {
    console.log("Go to church. ✝");
    break;
  }
  case "Saturday": {
    console.log("Go have fun! 😁");
    break;
  }
  default:
    console.log("Go to work! 😒");
}

for (let i = 1; i <= 10; i++) console.log(i);

let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 10);

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5));

const square = (num) => num ** 2;

let str = "12";

console.log(square(7));

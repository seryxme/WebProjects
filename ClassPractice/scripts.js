"use strict";

// console.log("Hello to you and you");
// let age = 13;
// if (age >= 25) console.log("You're qualified!");
// else console.log("You're not qualified!");

// let status = age >= 18 ? "Major" : "Minar";
// console.log(status);

// let qualified = `He is a ${age >= 18 ? "Major" : "Minor"}, he is ${
//   age >= 18 ? "" : "not "
// }qualified.`;
// console.log(qualified);

// let day = "Sunday";

// switch (day) {
//   case "Sunday": {
//     console.log("Go to church. ✝");
//     break;
//   }
//   case "Saturday": {
//     console.log("Go have fun! 😁");
//     break;
//   }
//   default:
//     console.log("Go to work! 😒");
// }

// for (let i = 1; i <= 10; i++) console.log(i);

// let count = 1;
// while (count <= 10) {
//   console.log(count);
//   count++;
// }

// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 10);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(3, 5));

// const square = (num) => num ** 2;

// let str = "12";

// console.log(square(7));

// const arr = [2, 5, 34, 12, -6, 0];

// console.log(arr);

// const deleted = arr.splice(1, 2, 4, 72, 55);
// console.log(deleted);
// console.log(arr);

// const a = arr.slice();
// a.push(42);

// console.log(arr);

// const mappedArr = arr.map((val, index) => val * index);
// console.log(mappedArr);

// const prod = arr.reduce((acc, val) => {
//   acc.push(val * 2);
//   return acc;
// }, []);
// console.log(prod);

// const maxVal = arr.reduce((acc, val) => {
//   val > acc ? (acc = val) : acc;
//   return acc;
// }, 0);

// console.log(maxVal);

// let chainedWord = "-webkit-transition";
// function camelize(word) {
//   let newArr = word.split("-");
//   let arr = [];
//   newArr.forEach((element) => {
//     if (element != newArr[0]) {
//       let newElement = element.charAt(0).toUpperCase() + element.slice(1);
//       arr.push(newElement);
//     } else {
//       arr.push(element);
//     }
//   });
//   return arr.join("");
// }

// console.log(camelize(chainedWord));

// let fruits = ["orange", "apple", "pineapple", "cucumebr", "pear", "banana"];

// console.log(fruits.find((val, index) => val.endsWith("e")));

// console.log(fruits.sort());

// console.log(arr.sort());

// console.log(arr.sort((a, b) => a - b));

// console.log(fruits.sort((a, b) => a.length - b.length));

// const newArr = arr.map((val, index, arr) => [val, index, arr]);

// console.log(newArr);

// console.log(newArr.flat(2));
const mainImage = document.querySelector(".main-image");
const images = document.querySelectorAll(".image-thumbnails > img");
images.forEach((img) => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;
  });
});

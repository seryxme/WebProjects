"use strict";

const sum = (a, b) => a + b;

const sumtin = "food name";

const user = {
  name: "Tee",
  age: 23,
  "is Married": true,
  [sumtin]: "Pizza",
  shoot: function () {
    console.log("I can shoot", this.name);
  },
  talk() {
    console.log("I can talk");
  },
};

user["is Married"];
user.age;

let anotherUser = Object.assign({}, user);

anotherUser.name = "Ayo";
anotherUser.age = 29;

for (let key in user) {
  console.log(`${key} -> ${user[key]}`);
}

user.shoot();

function operate(a, b, sum) {
  return sum(a, b);
}

// const firstUser = {
//   name: "Tee",
//   firstFunc() {
//     console.log(this.name);

//     function innerFunc() {
//       console.log(this);
//     }

//     innerFunc();
//   },
// };

// firstUser.firstFunc();

// const secondUser = {
//   name: "Gee",
// };

// secondUser.firstFunc = firstUser.firstFunc;
// secondUser.firstFunc();

const thirdUser = {
  firstName: "Tee",
  lastName: "Loopy",
  gender: "M",
  age: 23,

  fullName() {
    const getTitle = () => (this.gender === "M" ? "Mr." : "Mrs.");
    return `${getTitle()} ${this.firstName} ${this.lastName}`;
  },

  isMinor() {
    return this.age < 18;
  },
};

console.log(thirdUser.fullName());

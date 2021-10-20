// function helloWorld() {
//   console.log("Hello World");
// }
// helloWorld();
// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }
// checkAccess();

// function writeMessage() {
//   if (isUserAuth) {
//     console.log("Привет Пользователь");
//   } else {
//     console.log("Привет гость");
//   }
// }
// writeMessage();

// function sum(a, b = 0) {
//   console.log(b);
//   console.log(a + b);
// }
// sum(1, 4);
// sum(16);

// function getName(name) {
//   return name;
// }

// const userName = getName("Max");
// console.log(userName);
// let name = "Alex";
// function getName(userName) {
//   return userName;
// }
// const nameUserOne = getName(name);
// console.log(nameUserOne);
// name = "Ivan";
// const nameUserTwo = getName(name);
// console.log(nameUserTwo);
// let name = "Alex";
// console.log(name, "1");
// function sayHi(userName) {
//   userName = "Petr";
//   name = "Max";
//   console.log(userName, "function");
// }
// sayHi(name);
// console.log(name, "2");

// let a = 0;
// let b = 0;
// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();

// let name = "Maria";
// function getName(name) {
//   if (name) {
//     console.log("Привет " + name + "!");
//   } else {
//     console.log("Привет гость!");
//   }
// }
// getName(name);

// function power(a, b = 1) {
//   console.log(a ** b);
// }
// power(2);

// function getArithmeticMean(Array) {
//   let sum = 0;
//   for (let i = 0; i < Array.length; i++) {
//     sum += Array[i];
//   }
//   console.log(sum / Array.length);
// }

// getArithmeticMean([1, 2, 3, 4]);
// getArithmeticMean([2, 3, 4, 5, 6, 7, 8, 9]);

// const sayName = function (name) {
//   return name;
// };
// const copy = sayName;
// console.log(sayName("Maria"));
// console.log(copy("Ivan"));

// const getName = function () {
//   console.log("Alex");
// };
// const getUserInfo = function (callback) {
//   console.log("USER INFO");
//   callback();
// };
// getUserInfo(getName);
// test();
// function test() {
//   console.log("test");
// }
// test2();
// const test2 = function () {
//   console.log("test2");
// };

// const myFirstArrowFunc = () => console.log("!!");
// const test1 = (name, age) => console.log(name, age);
// test1("Alex", 19);
// const getLog = () => console.log("LOG");
// getLog();
//FD
// function example1(param) {
//   return param;
// }
// example1(1);
// //FE
// const example2 = function (param) {
//   return param;
// };
// example2(2);
// //AF.1
// const example3 = (param) => param;
// example3(3);
// //AF.2
// const example3 = (param) => {
//   return param;
// };
// example3(3);

// let getString = (str, count) => {
//   for (let i = 0; i < count; i++) {
//     console.log(str);
//   }
// };
// getString("Maria", 10);

// let isVowel = (letter) => {
//   if (
//     letter === "а" ||
//     letter === "о" ||
//     letter === "у" ||
//     letter === "ы" ||
//     letter === "э" ||
//     letter === "я" ||
//     letter === "ё" ||
//     letter === "ю" ||
//     letter === "и" ||
//     letter === "е"
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// isVowel("о");

let isPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      console.log(false);
    } else {
      console.log(true);
    }
  }
};
isPalindrome("abcdba");

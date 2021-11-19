// const obj1 = { a: "Hello" };
// const obj2 = Object.assign({}, obj1);
// console.log(obj1, obj2);
// obj1.a = "Goodbye";
// console.log(obj1, obj2);
// const obj1 = {
//   sayHello: "Hello",
//   user: { name: "Alex", age: { date: "28", year: "1996", month: "03" } },
// };
// // const obj2 = Object.assign({}, obj1);
// // console.log(JSON.stringify(obj1));

//Use of JSON
// const obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj1.user, obj2.user);
// obj1.user.age.year = "2021";
// console.log(obj1.user, obj2.user);

//Spread operator
// const arr1 = [1, 2, 3, 4];
// const arr2 = [7, 8, 9];
// const arr3 = [...arr1, 5, 6, ...arr2];
// console.log(arr3);
// const obj1 = { name: "Maria", age: "26" };
// const obj2 = { name: "Mary", ...obj1 };
// console.log(obj1, obj2);
// obj1.name = "Mary";
// console.log(obj1, obj2);

//rest operator
// const getSum = (type, ...args) => {
//   if (type === "sum") {
//     console.log(args, "sum");
//   } else {
//     console.log(args, "negative");
//   }
// };
// getSum("sum", 1, 2, 3, 4, 9, 8, 0);

//perebor massiva
// const arr = [1, 2, 3, 4];
// for (const el of arr) {
//   console.log(el);
// }

//perebor objecta
// const obj = { a: 1, b: 2 };
// for (const el in obj) {
//   console.log(obj[el]);
// }

//Practice
//1.
// let obj1 = { name: "Maria", city: "Dubai", age: "26" };
// let obj2 = Object.assign({}, obj1);
// console.log(obj1, obj2);
// obj2.city = "Moscow";
// console.log(obj1, obj2);
// let obj2 = { ...obj1 };
// console.log(obj1, obj2);
// obj2.name = "Marie";
// console.log(obj1, obj2);
//2.
// let getSum = (...args) => {
//   let sum = 0;
//   for (const el of args) {
//     if (el % 2 === 0) {
//       sum += el;
//     }
//   }
//   return sum;
// };
// console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//3.
// let arr1 = [1, 2, 3, 4, 5, 6, 6, 7, 8];
// let arr2 = [2, 4, 6, 8, 7];
// let getSame = (arr1, arr2) => {
//   let arr3 = [];
//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr2.includes(arr1[i]) && !arr3.includes(arr1[i])) {
//       arr3.push(arr1[i]);
//     }
//   }
//   return arr3;
// };
// console.log(getSame(arr1, arr2));
// console.log(global);
// function getName() {
//   console.log(this.name);
// }
// function setName(newName) {
//   this.name = newName;
// }
// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };
// user.setUserName("Maria");
// user.getUserName();
// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();
// function startFight() {
//   return this.strange * this.agility;
// }
// const hero = {
//   name: "John",
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: startFight,
// };
// const dracula = {
//   name: "Vlad",
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };
// console.log(hero.fight(), dracula.fight());
// if (hero.fight() > dracula.fight()) {
//   console.log("The hero won!");
// } else {
//   console.log("You lost");
// }
// function getName() {
//   return this.name;
// }
// function getPopulation() {
//   return this.population;
// }
// function changeName(newName) {
//   this.name = newName;
//}
const city = {
  name: "Dubai",
  population: "3 million",
  getCityName: function () {
    return this.name;
  },
  getCityPopulation: function () {
    return this.population;
  },
  setSomeValue(key, value) {
    this[key] = value;
  },
};
console.log(city);
city.setSomeValue("name", "Moscow");
city.setSomeValue("population", "10 million");
console.log(city);

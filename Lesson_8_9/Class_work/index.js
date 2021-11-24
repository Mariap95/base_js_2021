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
// const city = {
//   name: "Dubai",
//   population: "3 million",
//   getCityName: function () {
//     return this.name;
//   },
//   getCityPopulation: function () {
//     return this.population;
//   },
//   setSomeValue(key, value) {
//     this[key] = value;
//   },
// };
// console.log(city);
// city.setSomeValue("name", "Moscow");
// city.setSomeValue("population", "10 million");
// console.log(city);
// const city2 = {
//   name: "London",
//   population: "13 million",
// };
// console.log(city.getCityName.call(city2));
// console.log(city.getCityPopulation.call(city2));
// const bound = city.setSomeValue.bind(city2);
// bound("name", "Paris");
// console.log(city2);
// bound("country", "France");
// console.log(city2);
// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }
// // console.log(sayFullName("Maria", "Pushkova"));
// // console.log(sayFullName.call({ phrase: "Hello!" }, "Maria", "Pushkova"));
// let boundFullName = sayFullName.bind({ phrase: "Bye!" }, "Max", "Petrov");
// let sayHelloKate = sayFullName.bind({ phrase: "Hello" }, "Kate"); // not shown as you cannot change the existed bind, only create a new one
// console.log(boundFullName(), bound2("Petrova"));

// function test(b) {
//   const a = 0;
//   console.log(b);
// }

// const bound = test.bind({ a: 10 }, 8);
// bound();

// let a = 0;
// console.log(a);

// const test = () => {
//   a = 10;
// };
// test();
// console.log(a);

// function getFullName() {
//   const firstName = "Maria";
//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }
//   return getSecondName;
// }

// const closure = getFullName();
// console.log(closure());
// const getArea = (a) => {
//   return (b) => a * b;
// };
// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));
// const areaWithFour = getArea(4);
// console.log(areaWithFour(3));

// function getVolume(length) {
//   return (width) => {
//     return (heigth) => {
//       return length * width * heigth;
//     };
//   };
// }
// console.log(getVolume(1)(2)(3));
// function getVolume(height) {
//   return (width) => {
//     return (length) => {
//       return length * width * height;
//     };
//   };
// }
// const getTenHeight = getVolume(10);
// console.log(getTenHeight(2)(10));
// const getVolume = (height) => (width, length) => height * width * length;
// const getTen = getVolume(10);
// console.log(getTen(4, 5));
// const getVolume = (height) => (width) => (length) => length * height * width;
// console.log(getVolume(1)(2)(3));
// Prototype
// const people = {
//   getName: function () {
//     return this.name;
//   },
// };
// const user = {
//   name: "Alex",
//   __proto__: people,
// };
// const admin = {
//   name: "Vasya",
//   __proto__: people,
// };
// console.log(user.getName());
// console.log(people.getName());
// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
// }
// CreateUser.prototype.sayHi = function () {
//   return `HELLO My name is ${this.userName}`;
// };
// const userOne = new CreateUser("Maria", 26);
// const userTwo = new CreateUser("Max", 34);
// console.log(userOne);
// console.log(userTwo);
// console.log(userTwo.sayHi());
// 1.
// function CreateCard(name1, name2) {
//   this.from = name1;
//   this.to = name2;
// }
// CreateCard.prototype.show = function () {
//   console.log(`From ${this.from} to ${this.to}`);
// };
// CreateCard.prototype.changeFrom = function (name3) {
//   this.from = name3;
// };
// const card1 = new CreateCard("Maria", "Marie");
// card1.show();
// card1.changeFrom("Kate");
// console.log(card1);
// card1.show();
// // 2.
// function CreateCard(name1, name2) {
//   this.from = name1;
//   this.to = name2;
// }
// CreateCard.prototype.show = function () {
//   return `From ${this.from} to ${this.to}`;
// };
// const card1 = new CreateCard("Maria", "Marie");
// console.log(card1.show());

// Klass
// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     return `Hi, this is my name ${this.name}`;
//   }
// }
// // const firstParent = new Parent("Max");
// // console.log(firstParent);
// // console.log(firstParent.sayName());

// class Child extends Parent {
//   constructor(name, lastName) {
//     super(name);
//     this.name = name;
//     this.lastName = lastName;
//   }
//   sayName() {
//     console.log("This is an inner method");
//   }
//   sayFullName() {
//     const nameString = `${super.sayName()}${this.lastName}`;
//     return nameString;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   set lastName(newValue) {
//     this._lastName = newValue;
//   }
//   getLastName() {
//     return this.lastName;
//   }
//   setLastName(newValue) {
//     this.lastName = newValue;
//   }
// }
// const firstChild = new Child("Ivan", "Petrov");
// console.log(firstChild);
// // console.log(firstChild.sayFullName());
// // firstChild.sayName();
// console.log(firstChild.getLastName());
// console.log(firstChild.lastName);

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}
class Worker extends People {
  constructor(name, surname, rate, day) {
    super(name, surname);
    this.rate = rate;
    this.day = day;
  }
  getSalary() {
    return this.rate * this.day;
  }
}
const firstWorker = new Worker("Maria", "Pushkova", 1000, 10);
console.log(firstWorker);
console.log(firstWorker.getSalary());
const secondWorker = new Worker("Kate", "Smirnova", 123, 22);
console.log(secondWorker);
console.log(secondWorker.getSalary());
const thirdWorker = new Worker("Ivan", "Petrov", 555, 30);
console.log(thirdWorker);
console.log(thirdWorker.getSalary());

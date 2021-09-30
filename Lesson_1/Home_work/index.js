console.log("Hello world");

let myNumber = 500;
let myString = "A string";
let isCashPayment = true;
let myUndefined;
let carQuantity = null;
let city = {
  name: "Nizhny Novgorod",
  age: 800,
};
let id = Symbol("id");
let bigIntNumber = 1n;

console.log(myNumber);
console.log(myString);
console.log(isCashPayment);
console.log(myUndefined);
console.log(carQuantity);
console.log(city);
console.log(id);
console.log(bigIntNumber);

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof isCashPayment);
console.log(typeof myUndefinied);
console.log(typeof carQuantity);
console.log(typeof city);
console.log(typeof id);
console.log(typeof bigIntNumber);

let city1 = {
  name: "Nizhny Novgorod",
  age: 800,
  age: 900,
};
console.log(city1);

var city2 = {
  name: "Nizhny Novgorod",
  age: 800,
  age: 900,
};
console.log(city2);

const city3 = {
  name: "Nizhny Novgorod",
  age: 800,
  name: "Moscow",
};
console.log(city3);

const name = "Maria";
name = "Alex";
console.log(name);

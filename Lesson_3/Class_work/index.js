//const firstValue = String(5);
//* console.log(firstValue);
//console.log(typeof firstValue);

//const obj = {
//  foo: "bar",
// age: 25,
//};

//console.log(typeof String(obj));*//;
//console.log(String(obj.foo));
// console.log(String(obj.age));

//NUMBER

/*let testValue = null;
console.log(typeof testValue);
testValue = Number(testValue);
console.log(testValue);*/

/*const isUser = true;
const isAdmin = false;
console.log(Number(isUser), Number(isAdmin));

const voidString = "";
console.log(Number(voidString));*/

// BOOLEAN

// const value = "0";

// console.log(typeof Boolean(value), Boolean(value));

// const obj = [].length;
// console.log(Boolean(obj));

// console.log(2 ** 2);

//Унарный плюс

// const value = 5;
// console.log(typeof value, typeof +value);

// const value = "5";
// console.log(typeof value, typeof +value, typeof Number(value));

//Бинарный плюс

// let sum = 5 + 6;
// console.log(sum);

// sum = 1 + true;
// console.log(sum);
// sum = 5 + null;
// console.log(sum);

// const stringValue = "12";
// const numberValue = 34;
// console.log(+stringValue + numberValue);
// console.log(numberValue + +stringValue);

// const firstName = "Maria";
// const lastName = "Pushkova";

// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);

//Операция сравнения

// console.log(5 == 5);
// console.log(5 != 7);
// console.log(false == 0);

// const firstString = "apple";
// const secondString = "Apple";
// console.log(firstString != secondString);

// const a = 0;
// const b = "0";
// console.log(a == b);
// console.log(a === b);

console.log(5 > 4); //true
console.log("ананас" > "яблоко"); //false
console.log("2" > "12"); //true, два больше 1, поэтому
console.log(null == "\n0\n"); // null равен только себе либо undefined
console.log("" + 1 + 0); //Сначала 1 сольется с пустой строкой и станет строкой
console.log("" - 1 + 0, typeof ("" - 1 + 0)); //Минус привел пустую строку к 0, далее математический пример с рузультатом числом.
console.log(true + false); //1
console.log(true + "" + false); //truefalse
console.log(true + false + "", typeof (true + false + "")); //1, string
console.log(6 / "3"); // строка преобразуется в число при операции деления.
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log(7 / 0); //Infinity
console.log(" -9 " + 5); // -9 5
console.log("-9" - 5); //-14
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log("\t\n" - 2, typeof "\t\n"); //-2, string. Строка с пробелами - пустая строка

// Работа с if-else
// let a = -3;
// if (a === 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = 1;
// if (a > 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = -3;
// if (a < 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = -3;
// if (a >= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = 1;
// if (a <= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = -3;
// if (a != 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = "тест";
// if (a == "test") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = 1;
// if (a === "1") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// Работа с логическими переменными

// let test = false;
// let result = test === true ? "Верно" : "Неверно";
// console.log(result);

// let test = false;
// if (test === true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let test = true;
// let result = test != true ? "Верно" : "Неверно";
// console.log(result);

// let test = true;
// if (test != true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// Работа с && и ||
// let a = 2;
// if (a > 0 && a < 5) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = 2;
// if (a === 0 || a === 2) {
//   console.log(a + 7);
// } else {
//   console.log(a / 10);
// }

// let a = 3;
// let b = 5;
// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// let a = 1;
// let b = 5;
// if ((a > 2 && a < 11) || (b >= 6 && b <= 14)) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// На switch case
// let num = "1";
// let result = num;
// switch (result) {
//   case "1":
//     console.log("зима");
//     break;
//   case "2":
//     console.log("весна");
//     break;
//   case "3":
//     console.log("лето");
//     break;
//   case "4":
//     console.log("осень");
//     break;
//   default:
//     console.log("No info");
//     break;
// }

// Общие задачи
// let day = 21;
// if (day >= 1 && day <= 10) {
//   console.log("Первая декада");
// } else if (day >= 11 && day <= 20) {
//   console.log("Вторая декада");
// } else {
//   console.log("Третья декада");
// }

// let month = 8;
// if (month == 1 || month == 2 || month == 12) {
//   console.log("Зима");
// } else if (month >= 3 && month <= 5) {
//   console.log("Весна");
// } else if (month >= 6 && month <= 8) {
//   console.log("Лето");
// } else if (month >= 9 && month <= 11) {
//   console.log("Осень");
// }

// let myString = "bbcde";
// let check = myString[0] === "a" ? "да" : "нет";
// console.log(check);

// let myNumber = 22345;
// if (myNumber[0] === 1 || myNumber[0] === 2 || myNumber[0] === 3) {
//   console.log("да");
// } else {
//   console.log("нет");
// }

// let myString = "123";
// let sum = +myString[0] + +myString[1] + +myString[2];
// console.log(sum);

// let myNumbers = "123123";
// let sum1 = +myNumbers[0] + +myNumbers[1] + +myNumbers[2];
// let sum2 = +myNumbers[3] + +myNumbers[4] + +myNumbers[5];
// if (sum1 === sum2) {
//   console.log("да");
// } else {
//   console.log("нет");
// }
// Циклы while и for
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 1;
// }
// for (let i = 1; i <= 100; i += 1) {
//   console.log(i);
// }
// let i = 11;
// while (i <= 33) {
//   console.log(i);
//   i += 1;
// }
// for (let i = 11; i <= 33; i += 1) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }
// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// let sum = 0;
// let i = 1;
// while (i <= 100) {
//   sum = sum + i;
//   i += 1;
// }
// console.log(sum);
// let sum = 0;
// for (let i = 1; i <= 100; i += 1) {
//   sum = sum + i;
// }
// console.log(sum);

// let myNumbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < myNumbers.length; i += 1) {
//   console.log(myNumbers[i]);
// }
// let myNumbers = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i <= 4; i += 1) {
//   result = result + myNumbers[i];
// }
// console.log(result);

// Задачи общие
// let myArray = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i <= 5; i += 1) {
//   if (myArray[i] > 3 && myArray[i] < 10) {
//     console.log(myArray[i]);
//   }
// }

// let myArray = [2, 4, 5, -6, -7];
// let sum = 0;
// for (let i = 0; i <= 4; i += 1) {
//   if (myArray[i] > 0) {
//     sum = sum + myArray[i];
//   }
// }
// console.log(sum);

// let myArray = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i <= 7; i += 1) {
//   if (myArray[i] === 4) {
//     console.log("Есть!");
//     break;
//   }
// }

// let myArray = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i <= 5; i += 1) {
//   if (
//     String(myArray[i]).startsWith("1") ||
//     String(myArray[i]).startsWith("2") ||
//     String(myArray[i]).startsWith("5")
//   ) {
//     console.log(myArray[i]);
//   }
// }

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(
//     "-" +
//       String(myArray[0]) +
//       "-" +
//       String(myArray[1]) +
//       "-" +
//       String(myArray[2]) +
//       "-" +
//       String(myArray[3]) +
//       "-" +
//       String(myArray[4]) +
//       "-" +
//       String(myArray[5]) +
//       "-" +
//       String(myArray[6]) +
//       "-" +
//       String(myArray[7]) +
//       "-" +
//       String(myArray[8]) +
//       "-"
//   );
//   break;
// }

// let weekArray = [
//   "понедельник",
//   "вторник",
//   "среда",
//   "четверг",
//   "пятница",
//   "суббота",
//   "воскресенье",
// ];

// for (let i = 0; i < weekArray.length; i++) {
//   if (weekArray[i] == "суббота" || weekArray[i] == "воскресенье") {
//     console.log(weekArray[i].bold());
//   } else {
//     console.log(weekArray[i]);
//   }
// }
// let weekArray = [
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//     "воскресенье",
//   ];
// for (let i = 0; i < weekArray.length; i++) {
//   let day = weekArray[5];
//   if (weekArray[i] == day) {
//     console.log(weekArray[i].italics());
//   } else {
//     console.log(weekArray[i]);
//   }
// }
// let n = 1000;
// let finalNumber = 50;
// let num = 0;
// while (n > finalNumber) {
//   n /= 2;
//   num++;
// }
// console.log(n);
// console.log(num);

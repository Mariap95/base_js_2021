// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function getSquare(a) {
//   return a ** 2;
// }
// console.log(getSquare(3));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.
// function getSum(a, b) {
//   return a + b;
// }
// console.log(getSum(1, 3));

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function getResult(a, b, c) {
//   return (a - b) / c;
// }
// console.log(getResult(10, 4, 2));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function getWeekDay(dayNumber) {
//   if (dayNumber === 1) {
//     console.log("Понедельник");
//   } else if (dayNumber === 2) {
//     console.log("Вторник");
//   } else if (dayNumber === 3) {
//     console.log("Среда");
//   } else if (dayNumber === 4) {
//     console.log("Четверг");
//   } else if (dayNumber === 5) {
//     console.log("Пятница");
//   } else if (dayNumber === 6) {
//     console.log("Суббота");
//   } else if (dayNumber === 7) {
//     console.log("Воскресенье");
//   } else {
//     console.log("Данные не найдены");
//   }
// }
// getWeekDay(1);

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// function isEqual(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isEqual(2, -2);
// function isEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEqual(2, -2));

//  6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма // больше 10 - пусть вернет true, а если нет то - false.
// function isBigger(a, b) {
//   if (a + b > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isBigger(7, 8));
//  7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// function isNegative(a) {
//   if (a < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNegative(-5));
// console.log(isNegative(2));
//  8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// function isNumberInRange(a) {
//   if (a > 0 && a < 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumberInRange(5));
//  9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let isNumberInRange = (a) => {
//   if (a > 0 && a < 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// function getNewArray(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   console.log(newArray);
// }
// getNewArray([1, 2, 33, 56, 7, 8, 45]);

//  10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// function getDigitsSum(num) {
//   let str = String(num);
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     let newNumber = Number(str[i]);
//     sum += newNumber;
//   }
//   console.log(sum);
// }
// getDigitsSum(3456);

//  11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// function getDigitsSum(num) {
//   let str = String(num);
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     let newNumber = Number(str[i]);
//     sum += newNumber;
//   }
//   return sum;
// }
// let year = 1;
// while (year <= 2020) {
//   if (getDigitsSum(year) === 13) {
//     console.log(year);
//   }
//   year += 1;
// }

//  12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// function isEven(a) {
//   if (a % 2 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isEven(5);

//  13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// function isEven(a) {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function getNewArray(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (isEven(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   console.log(newArray);
// }
// getNewArray([1, 2, 3, 4, 5, 6, 7]);

//  14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
// function getDivisors(num) {
//   let newArray = [];
//   for (let i = 1; i >= 1 && i <= num; i += 1) {
//     if (num % i === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
// }
// console.log(getDivisors([125]));

// 15.  Дан массив с числами. Выведите последовательно его элементы.  1,4,2,6
// function getData(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// getData([2, 1, 4, 3]);

// 16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// function getDigitsSum(num) {
//   let str = String(num);
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     let newNumber = Number(str[i]);
//     sum += newNumber;
//   }
//   return sum;
// }

// function getFinalSum(num) {
//   while (num > 9) {
//     num = getDigitsSum(num);
//   }
//   return num;
// }
// console.log(getFinalSum(12345678));

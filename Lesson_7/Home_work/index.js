// 1
// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// let vegetableLength = vegetables.map(function (piece) {
//   return piece.length;
// });

// console.log(vegetableLength);

// 2
// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// function currentSums(numbers) {
//   let result = [];
//   numbers.reduce(function (sum, current, i) {
//     return (result[i] = sum + current);
//   }
//   console.log(result);
// }
// currentSums(numbers);

// 3
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {
//   let obj = {};
//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let elem = numbers[i];
// }
//     for (let j = i + 1; j < numbers.length; j++) {
//       let item = numbers[j];
// }
//       if (elem + item != 7) {
//      continue;
// }
//       let num = elem + ":" + item;
//       obj[num] = num;
//     }
//   }

//   for (let key in obj) {
//     result.push(obj[key]);
//   }
//   return result;
// }

// console.log(sumSeven(numbers));

// 4
// let str = "Каждый охотник желает знать, где сидит фазан.";

// function firstChar(value, index, arr) {
//   if (index == 0) {
//   return true;
//   } else {
//   return arr[index - 1] === " ";
// }
// }

// let array = [].filter.call(str, firstChar);

// console.log(array);

// 5
// let str = "JavaScript";

// function getChars(value, index, str) {
//   return str.substring(index - 1, index + 2);
// }

// let arr = Array.prototype.map.call(str, getChars);

// console.log(arr);

// 6
// let numerics = [5, 7, 2, 9, 3, 1, 8];
// function matching(first, second) {
//   if (first == second) {
//  return 0;
//  } else if (first > second) {
//  return -1;
//  } else {
//  return 1;
// }
// }
// numerics = numerics.sort(matching);
// console.log(numerics);

// 7
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [7, 8, 9];
// function getArr(a, b, c) {
//   let d = a.concat(b, c);
//   let f = d.pop();
//   while (f != undefined) {
//     console.log(f + " ");
//     f = d.pop();
//   }
// }

// getArr(a, b, c);

// 8
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);

// 9
// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//       sum += arr[i][j][k];
//     }
//   }
// }
// console.log(sum);

// 10
// function arr(a) {
//   let b = [];
//   for (let i = a.length - 1; i >= 0; i--) {
//     b.push(a[i]);
//   }
//   return b;
// }
// console.log(arr[(1, 5, 6, 7)]);

// 11
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (sum > 10) {
//     break;
//   }
// }
// console.log(i + 1);

// 12
// let arr = [];
// let data;
// let kil;
// function arrayFill(data, kil) {
//   for (let i = 0; i < kil; i++) {
//     arr[i] = data;
//     console.log(arr[i]);
//   }
// }
// arrayFill("x", 10);

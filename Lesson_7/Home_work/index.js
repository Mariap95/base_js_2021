// 1
// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// let getLength = (arr) =>
//   arr.map((el) => {
//     return el.length;
//   });
// console.log(getLength(vegetables));

// 2
// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// function currentSums(numbers) {
//   let result = [];
//   result.push(numbers[0]);
//   numbers.reduce((accom, current, i) => {
//     return (result[i] = accom + current);
//   });
//   return result;
// }

// console.log(currentSums(numbers));

// 3
// let arr = [0, 1, 2, 3, 4, 5, 6, 7];
// let sumSeven = (arr) => {
//   let pairsArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 7) {
//         pairsArr.push(arr[i] + ":" + arr[j]);
//       }
//     }
//   }
//   return pairsArr;
// };
// console.log(sumSeven(arr));

// 4
// let str = "Каждый охотник желает знать, где сидит фазан.";
// let getFirstLetter = (str) => {
//   let newArr = str.split(" ");
//   let firstLetter = [];
//   for (let i = 0; i < newArr.length; i++) {
//     firstLetter.push(newArr[i].slice(0, 1));
//   }

//   return firstLetter;
// };
// console.log(getFirstLetter(str));

// 5
// let str = "JavaScript";
// let getArr = (str) => {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] == undefined) {
//       arr.push(str[i] + str[i + 1]);
//     } else if (str[i + 1] == undefined) {
//       arr.push(str[i - 1] + str[i]);
//     } else {
//       arr.push(str[i - 1] + str[i] + str[i + 1]);
//     }
//   }
//   return arr;
// };
// console.log(getArr(str));

// 6
// let numerics = [5, 7, 2, 9, 3, 1, 8];
// let foo = (arr) => {
//   return arr.sort((a, b) => b - a);
// };
// console.log(foo(numerics));

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
// let arr = [1, 4, 5, 6, 7, 3];
// let reverseArr = (arr) => {
//   let arr2 = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr2.push(arr[i]);
//   }
//   return arr2;
// };
// console.log(reverseArr(arr));

// 11
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 67];
// let getSum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > 10) {
//       console.log(i + 1);
//       break;
//     }
//   }
// };

// console.log(getSum(arr));

// 12
// let arrayFill = (data, num) => {
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     arr.push(data);
//   }
//   return arr;
// };
// console.log(arrayFill(4, 5));

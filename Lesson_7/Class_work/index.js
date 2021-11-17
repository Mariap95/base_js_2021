// const customFind = (arr, arrSymbol) => {
//   let result;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arrSymbol) {
//       result = arr[i];
//     }
//   }
//   return result;
// };
// console.log(customFind([1, 2, 3, 4], 3));
// console.log([1, 2, 3, 4].find((el) => el === 3));
// const data = [
//   { title: "First", author: "Alex" },
//   { title: "Second", author: "Ivan" },
//   { title: "Third", author: "Alex" },
//   { title: "Fourth", author: "Maria" },
//   { title: "Fifth", author: "Alex" },
// ];
// console.log(data);
// const filterData = data.filter((el) => el.author === "Alex");
// console.log(filterData);
// const newData = data.map((el, i) => {
//   el.index = i;
//   return el;
// });
// console.log(newData);
// const newData = data.map((el, i) => {
//   el.index = i;
//   return el;
// });
// console.log(newData);
// const newData = data.map((el) => el.title);
// console.log(newData);
// const testForEach = data.forEach((el, i) => {
//   if (i % 2 === 0) {
//     el.title = "TEST";
//   }
// });
// console.log(data);
// const testForEach = data.forEach((el, i, arr) => {
//   if (i % 2 === 0) {
//     el.title = "TEST";
//     console.log(arr[i]);
//   }
// });
// console.log(data);
// const data = [
//   { value: 2, month: "January" },
//   { value: 3, month: "February" },
//   { value: 5, month: "March" },
// ];
// const valueSum = data.reduce((accum, curValue) => accum + curValue.value, 0); //надо если состоит из объектов
// console.log(valueSum);

// const getSum = (arr) =>
//   arr
//     .filter((el) => el >= 0 && el % 2 === 0)
//     .reduce((accum, curValue) => accum + curValue);
// console.log(getSum([1, 2, 3, -4, 7, 8, 9]));
const arr = [1, 2, 3, 4, 5, 5, 6, 6];
// const uniqArr = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(uniqArr(arr));
// const uniqArr = (arr) => {
//   const result = [];
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };
// console.log(uniqArr(arr));
// const uniqArr = (arr) =>
//   arr.filter((el, i) => {
//     return arr.indexOf(el) === i;
//   });
// console.log(uniqArr(arr));
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];
// let isTrue = (arr1, arr2) => arr1.toString() === arr2.toString();
// console.log(isTrue(arr1, arr2));
// const isTrue = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return !arr1.map((el, i) => el === arr2[i]).includes(false);
// };
// console.log(isTrue(arr1, arr2));

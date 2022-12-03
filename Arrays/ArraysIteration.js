// // JavaScript Array Iteration Methods example:
// const points = [40, 100, 1, 5, 25, 10];

// points.forEach(function (element) {
//   console.log(element);
// });

// Output:
// 40
// 100
// 1
// 5
// 25
// 10

// // Using forEach() to Display Array Values example:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// function myFunction(element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
//   console.log('------------------------------------');
// }

// fruits.forEach(myFunction);

// Output:
// Apple
// Banana
// Orange
// Mango

// // JavaScript Array map() example:

// const numbers = [4, 9, 16, 25];

// function myFunction(values) {
//   return values * 2;
// }

// const newNumbers = numbers.map(myFunction);

// console.log(newNumbers);

// // JavaScript Array filter() example:

// const numbers = [45, 4, 9, 16, 25, 19, 20];

// function myFunction(value) {
//   return value > 18;
// }

// const newNumbers = numbers.filter(myFunction);

// console.log(newNumbers);

// // JavaScript Array reduce() example:

// const numbers = [1, 2, 3, 4, 5];

// function myFunction(total, value, index) {
//   console.log(`index: ${index}: value: ${value} total: ${total} `);
//   return total + value;
// }

// const newNumbers = numbers.reduce(myFunction);

// console.log(newNumbers);

// // JavaScript Array every() example:

// const numbers = [45, 4, 9, 16, 25, 19, 20];

// function myFunction(value) {
//   return value > 18;
// }

// const newNumbers = numbers.every(myFunction);

// console.log(newNumbers);

// // JavaScript Array some() example:

// const numbers = [45, 4, 9, 16, 25, 19, 20];

// function myFunction(value) {
//   return value > 18;
// }

// const newNumbers = numbers.some(myFunction);

// console.log(newNumbers);

// // JavaScript Array find() example:

// const numbers = [45, 4, 9, 16, 25, 19, 20];

// function myFunction(value) {
//   return value > 18;
// }

// const newNumbers = numbers.find(myFunction);

// console.log(newNumbers);

// // JavaScript Array findIndex() example:

// const numbers = [4, 9, 16, 25, 29];

// function myFunction(value) {
//   return value > 18;
// }

// const newNumbers = numbers.findIndex(myFunction);

// console.log(newNumbers);

// // JavaScript Array Array.from() example:

// const myArr = Array.from('ABCDEFG');

// console.log(myArr);

// JavaScript Array Keys() example:

// const myArr = ['a', 'b', 'c'];

// const iterator = myArr.keys();

// for (const key of iterator) {
//   console.log(key);
// }

// Output:
// 0
// 1
// 2

// // JavaScript Array Array.of() example:

// const myArr = Array.of(1, 2, 3, 4, 5);

// console.log(myArr);

// // JavaScript Array Array.isArray() example:

// const myArr = Array.of(1, 2, 3, 4, 5);

// console.log(Array.isArray(myArr));

// // JavaScript Array Array.fill() example:

// const myArr = Array.of(1, 2, 3, 4, 5);

// myArr.fill(1);

// console.log(myArr);

// // JavaScript Array Array.copyWithin() example:

// const myArr = Array.of(1, 2, 3, 4, 5);

// myArr.copyWithin(0, 3);

// console.log(myArr);

// // JavaScript Array Array.entries() example:

// const myArr = Array.of(1, 2, 3, 4, 5);

// const iterator = myArr.entries();

// for (const i of iterator) {
//   console.log(i);
// }

// Output:
// [0, 1]
// [1, 2]
// [2, 3]
// [3, 4]
// [4, 5]

// // JavaScript Array Array.includes() example:

const myArr = Array.of(1, 2, 3, 4, 5);

console.log(myArr.includes(3));

// Output:
// true

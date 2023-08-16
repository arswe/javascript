// // 1. Short hand array creation
// var names = ['John', 'Jane', 'Jim'];
// console.log(names[2]('Jane'));
// // 2. Create an array
// var arr = new Array();
// arr[0] = 'Hello';
// arr[1] = 4;
// arr[2] = function (name) {
//   console.log('Hello ' + name);
// };
// arr[3] = { course: ' HTML, CSS & JS' };

// // Using the JavaScript Keyword new example:
// var arr = new Array(
//   'Hello',
//   4,
//   function (name) {
//     console.log('Hello ' + name);
//   },
//   { course: ' HTML, CSS & JS' }
// );
// console.log(arr);
// arr[2](arr[0]);

// // javascript Array Element example:
// const fruits = ['Apple', 'Banana'];
// console.log(fruits.length);
// 2

// // javascript Array Element example:
// const fruits = ['Apple', 'Banana'];
// console.log(fruits[0]);
// Apple

// javascript Array Element example:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Watermelon'];
// fruits[55] = 'Peach';
// console.log(fruits[fruits.length - 1]);
// Mango

// Looping Array Elements example:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Watermelon', 'Papaya', 'Guava'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i} = ` + fruits[i]);
// }
// console.log(fruits[fruits.length - 1]);

// Array.forEach() function example:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Watermelon', 'Papaya', 'Guava'];

// function myFunction(params) {
//   console.log(params);
// }

// fruits.forEach(myFunction);

// // Adding Array Elements example:
// const fruits = ['Apple', 'Banana'];
// fruits[fruits.length] = 'Peach';
// console.log(fruits);

// // Adding Array push Elements example:
// const fruits = ['Apple', 'Banana'];
// // fruits.push('Peach');
// fruits[6] = 'Peach';
// console.log(fruits);

// // Associative Object example:

// // Associative Arrays example:
// const person = [];
// person['name'] = 'John';
// person['age'] = 46;
// console.log(person);
// console.log(person['name']);

// javascript arrays create example:
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// Path: intermediate\ArrayMethods.js
// Popping and Pushing example:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

console.log(fruits.pop());

console.log(fruits);

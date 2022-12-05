// JavaScript Function Definitions:

// Function Declaration
// A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2)); // 3

// anonymous function expression
// const add = function (a, b) {
//   return a + b;
// };

// console.log(); // 3

// document.getElementById('demo').innerHTML = add(1, 2);

// Function Hoisting:
// myFunction(5);

// function myFunction(y) {
//   return y * y;
// }

// function myFunction(a, b) {
//   return a * b;
// }

// let x = myFunction(4, 3) * 2;

// document.getElementById('demo').innerHTML = x;

// Functions are Objects Example:
// function myFunction(a, b) {
//   return arguments.length;
// }

// document.getElementById('demo').innerHTML = myFunction(4);

// Arrow Functions:

// ES5
// var x = function (x, y) {
//   return x * y;
// };

// ES6

// const add = (a, b) => a + b;
// document.getElementById('demo').innerHTML = add(1, 2);
// console.log(add(1, 2)); // 3

function test(x, y) {
  x = x * 2;
  return x * y;
}

let x = 5;
let y = 6;

console.log(test(x, y)); // 30

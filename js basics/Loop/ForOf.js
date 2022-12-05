// JavaScript Loops: For of Loop

// The for of loop is used to loop through the values of an iterable objects.

// The for of loop has the following syntax:

// for (variable of iterable) {
//   code block to be executed
// }

// The variable is a variable that iterates over the values of the iterable object.

// The iterable object is an object that has a length property and can be iterated over.

// Example

// Loop through the values of an array:
// const cars = ['BMW', 'Volvo', 'Mini', 'Ford', 'Audi', 'Mercedes'];

// for (let x of cars) {
//   console.log(`${x} is a car`);
// }

// // Loop through the values of a string:

// const text = 'JavaScript';

// for (let x of text) {
//   console.log(`${x} is a character of JavaScript`);
// }

// // Loop through the values of a Map object:

const person = new Map();
person.set('firstName', 'John');
person.set('lastName', 'Doe');

for (let x of person) {
  console.log(`${x}`);
}

// // Loop through the values of a Set object:

// const fruits = new Set();
// fruits.add('Apple');
// fruits.add('Orange');
// fruits.add('Banana');

// for (let x of fruits) {
//   console.log(`${x} is a fruit`);
// }

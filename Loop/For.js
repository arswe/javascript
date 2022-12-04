// JavaScript Loops: For Loop

// The for loop is used to iterate over a block of code a number of times.

// The for loop has the following syntax:

// for (statement 1; statement 2; statement 3) {
// code block to be executed
// }

// Statement 1 is executed (one time) before the execution of the code block.

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.

// Example

// Print numbers from 0 to 9:

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// The for loop is often used together with an array.

// Example

// Loop through the elements of an array:

// const cars = ['BMW', 'Volvo', 'Mini', 'Ford', 'Audi', 'Mercedes'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(`${cars[i]} is a car`);
// }

// The for loop is often used together with an object.

// Example

// Loop through the properties of an object:

const person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' };

for (let x in person) {
  console.log(`${x}: ${person[x]} `);
}

// The for loop is often used together with a string.

// Example

// Loop through the characters of a string:

// const text = 'JavaScript';

// for (let i = 0; i < text.length; i++) {
//   console.log(`${text[i]} is a character of JavaScript`);
// }

// The for loop is often used together with a function.

// Example

// Loop through the arguments of a function:

// function myFunction() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(`${arguments[i]} is an argument of myFunction`);
//   }
// }

// myFunction('John', 'Doe', 50, 'blue');

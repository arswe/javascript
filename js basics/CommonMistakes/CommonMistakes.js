// Accidentally Using the Assignment Operator:
// The assignment operator (=) is used to assign a value to a variable.

// The equality operator (==) is used to compare two values.

// The strict equality operator (===) is used to compare two values for equality without type conversion.

// // Wrong
// let x = 5;
// let y = 5;
// if (x = y) {
//   // This condition will always return true
//   // because the assignment operator (=) returns the assigned value
//   console.log('Equal!');
// }
//
// // Correct
// let x = 5;
// let y = 5;
// if (x == y) {
//   // This condition will return true
//   // because the equality operator (==) compares the values of x and y
//   console.log('Equal!');
// }
//

// // Wrong
// let x = 5;
// let y = 5;
// if (x = y) {
//   // This condition will always return true
//   // because the assignment operator (=) returns the assigned value
//   console.log('Equal!');
// }
//
// // Correct
// let x = 5;

// let y = 5;
// if (x === y) {
//   // This condition will return true
//   // because the strict equality operator (===) compares the values and types of x and y

//   console.log('Equal!');
// }

// Confusing Addition & Concatenation;

// // Wrong
// let x = 5;
// let y = 10;
// console.log(x + y); // 15
// console.log(x + y + '5'); // 155
// console.log('5' + x + y); // 515

// // Correct
// let x = 5;
// let y = 10;
// console.log(x + y); // 15
// console.log(x + y + '5'); // 155
// console.log('5' + x + y); // 510

// Misunderstanding Floats:
// Wrong
let x = 0.1;
let y = 0.2;
let z = x + y;
console.log(z); // 0.30000000000000004

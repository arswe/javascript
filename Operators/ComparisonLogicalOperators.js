// JavaScript Comparison and Logical Operators exercise;

// 1. Declare two variables a and b and assign them number values. Check if a is greater than b.
const a = 10;
const b = 20;
if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('a is not greater than b');
}

// 2. Declare three variables x, y and z. Give these variables number values. Check if they are equal to each other or not. (Three ways)
const x = 10;
const y = 20;
const z = 30;
if (x === y && x === z) {
  console.log('x, y and z are equal');
} else if (x === y || x === z || y === z) {
  console.log('x, y and z are not equal');
} else {
  console.log('x, y and z are not equal');
}

// 3. Declare three variables x, y and z. Give these variables number values. Check if two or more of them have the same value.
// const x = 10;
// const y = 20;
// const z = 30;
// if (x === y || x === z || y === z) {
//   console.log('x, y and z are not equal');
// }

// 4. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

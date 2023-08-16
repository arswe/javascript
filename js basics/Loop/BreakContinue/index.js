// JavaScript Break and Continue example:

// The break statement "jumps out" of a loop.
// The continue statement "jumps over" one iteration in the loop.

// The break statement has the following syntax:
// break;

// The continue statement has the following syntax:

// continue;

// Example
// Loop through the numbers 0 to 9, and jump out of the loop when i is 4:
// let i = 0;
// while (i < 10) {
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// console.log('The loop has ended');

// Example;
// Loop through the numbers 0 to 9, and jump over the number 4:
// let i = 0;
// while (i < 10) {
//   if (i === 4) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// console.log('The loop has ended');

// JavaScript Labels example:
// Labels are used to identify JavaScript code statements.
// Labels can be used with break and continue statements to identify which loop to break or
// continue.
// Labels have the following syntax:
// labelName: code;

// Example

// Loop through the numbers 0 to 9, and jump out of the loop when i is 4:

let i = 0;
while (i < 10) {
  if (i === 4) {
    break;
  }
  console.log(i);
  i++;
}
console.log('The loop has ended');

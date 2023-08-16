// JavaScript While Loop example:
//
// The while loop loops through a block of code as long as a specified condition is true.
//
// The while loop has the following syntax:
//
// while (condition) {
//   code block to be executed
// }
//
// The condition is a Boolean expression that is evaluated before each pass through the
// loop. If the condition evaluates to true, the code block is executed. When the condition
// evaluates to false, execution continues with the statement after the loop.
//
// Example
//
// Loop through a block of code as long as a specified condition is true:
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
//
// Loop through a block of code as long as a specified condition is true, and display a
// message once the condition is false:
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// console.log('The loop has ended');
//
// JavaScript Do While Loop example:
//
// The do while loop is a variant of the while loop. This loop will execute the code block
// once, before checking if the condition is true, then it will repeat the loop as long as
// the condition is true.
//
// The do while loop has the following syntax:
//
// do {
//   code block to be executed
// }
// while (condition);
//
// The condition is a Boolean expression that is evaluated after each pass through the
// loop. If the condition evaluates to true, the code block is executed. When the condition
// evaluates to false, execution continues with the statement after the loop.
//
// Example
//
// Loop through a block of code once, before checking if the condition is true, then it
// will repeat the loop as long as the condition is true:
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
console.log('The loop has ended');

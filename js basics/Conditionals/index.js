// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

// const hour = new Date().getHours();
// let greeting;

// if (hour < 18) {
//   greeting = 'Good day';
// } else {
//   greeting = 'Good evening';
// }

// console.log(greeting);

// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

const time = new Date().getHours();
let greeting;

if (time < 10) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

console.log(greeting);

// JavaScript Closures:

// function name() {
//   let a = 4;
//   return a * a;
// }

// console.log(name());

// Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

// // Call add() 3 times
// add();
// add();
// add();

// // The counter should now be 3

// console.log(counter);

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
console.dir(add());
add();
add();

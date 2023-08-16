// Spread operator:
// The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

// Example 1: Function calls

// function myFunction(x, y, z) {}
// var args = [0, 1, 2]; // array
// myFunction.apply(null, args); // ES5 (apply) - myFunction(0, 1, 2)

// // ES6
// function myFunction(x, y, z) {}
// var args = [0, 1, 2]; // array
// myFunction(...args); // myFunction(0, 1, 2)

// // Example 2: Array literals

// var parts = ['shoulders', 'knees']; // array
// var lyrics = ['head', ...parts, 'and', 'toes']; // array with spread operator (...) - ['head', 'shoulders', 'knees', 'and', 'toes']
// console.log(lyrics); // ['head', 'shoulders', 'knees', 'and', 'toes']

// // Example 3: Copying an array

// var arr = [1, 2, 3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4); // arr2 becomes [1, 2, 3, 4] - arr remains unaffected - [1, 2, 3]
// console.log(arr2);

// Example 4: Concatenating or combining arrays

// var arr1 = [0, 1, 2]; // array
// var arr2 = [3, 4, 5]; // array
// arr1 = [...arr1, ...arr2]; // [0, 1, 2, 3, 4, 5] - arr1 is now a new array instance containing those elements - arr2 remains unaffected
// console.log(arr1);
// console.log(arr2);

// Example 5: Using Math objects:

// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr); // returns 89 - ES5
// console.log(maximus);

// ES6

// var arr = [6, 89, 3, 45];
// var maximus = Math.max(...arr); // returns 89
// console.log(maximus);

// Example 6: Using an array as arguments

// var arr = [1, 2, 3];
// function f(x, y, z) {}
// f.apply(null, arr); // ES5
// f(...arr); // ES6

// Example 7: In string literals

var str = 'foo';
var chars = [...str]; // ['f', 'o', 'o']
console.log(chars);

// Example 8: In NodeList objects

var divs = document.querySelectorAll('.result');
var nodes = [...divs]; // converts NodeList to Array
console.log(nodes);

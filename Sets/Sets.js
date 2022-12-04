// JavaScript Sets example:

// const mySet = new Set();

// mySet.add('Hello');
// mySet.add('World');

// console.log(mySet); // 2

// The forEach() method invokes (calls) a function for each Set element:

// Create a Set
const letters = new Set(['a', 'b', 'c']);
// console.log(letters.values()); // 3

// list all Elements

// let text = '';

// letters.forEach((value) => {
//   text += value;
// });

// console.log(` ${text} `); // abc

let text = '';
for (const x of letters.values()) {
  text += x;
}

console.log(` ${text} `); // abc

// JavaScript Maps

// const person = {
//   fname: 'Max',
//   lname: 'Mustermann',
//   age: 30,
// };

// person.age = 25;

// console.dir(person);
// console.log(person);

// // Create a Map
// const fruits = new Map([
//   ['apples', 500],
//   ['bananas', 300],
//   ['oranges', 200],
// ]);

// console.log(fruits);

// // Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set('apples', 500);
// fruits.set('bananas', 300);
// fruits.set('oranges', 200);

// console.log(fruits instanceof Map); // true

// console.dir(Map);

// Create a Map
// const fruits = new Map([
//   ['apples', 500],
//   ['bananas', 300],
//   ['oranges', 200],
// ]);

// let text = '';
// fruits.forEach(function (value, key) {
//   text += key + ' = ' + value + '<br>';
// });

// let text = '';
// for (const x of fruits.entries()) {
//   text += x;
// }

// let text = '';
// for (const x of fruits.keys()) {
//   text += x;
// }

// console.log(text);

const apples = { name: 'apples', price: 500 };
const bananas = { name: 'bananas', price: 300 };
const oranges = { name: 'oranges', price: 200 };

const fruits = new Map();

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits.get(bananas));

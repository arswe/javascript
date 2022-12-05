// JavaScript Object Properties:

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   country: 'USA',
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 Main st',
//     state: 'NY',
//   },
//   getBirthYear: function () {
//     return 2019 - this.age;
//   },

//   // ES6
//   getBirthYear2() {
//     return 2019 - this.age;
//   },
// };

// let txt = '';

// for (let x in person) {
//   txt += person[x];
//   console.log(x);
// }

// Nested Arrays example:

// const todos = [
//   { id: 1, text: 'Take out trash', isCompleted: true },
//   { id: 2, text: 'Meeting with boss', isCompleted: true },
//   { id: 3, text: 'Dentist appt', isCompleted: false },
// ];

// // console.log(todos[1].text);

// // Convert to JSON

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// Nested Nested Objects:

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   country: 'USA',
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 Main st',
//     state: [
//       { name: 'forida', models: ['G', 'H', 'U'] },
//       { name: 'new york', models: ['A', 'B', 'C'] },
//       { name: 'california', models: ['D', 'E', 'F'] },
//     ],
//   },
// };

// for (const i in person.address.state) {
//   console.log(`name: ${person.address.state[i].name}`);
//   for (const j in person.address.state[i].models) {
//     console.log(`models:  ${person.address.state[i].models[j]} `);
//   }
// }

let country = new String('bangladesh');

console.dir(country);

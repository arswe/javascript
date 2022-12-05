// JavaScript Display Objects:

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'Dhaka',
//   country: 'Bangladesh',
//   hobbies: ['music', 'movies', 'sports'],
//   address: { street: '50 Main st', state: 'NY' },
// };

// let txt = '';

// for (const key in person) {
//   txt += `${key}: ${person[key]} `;
// }

// console.log(txt);

// const personArrays = Object.values(person);

// for (const i of personArrays) {
//   console.log(i);
// }

// console.log(JSON.stringify(person));

// Stringify Dates:
const today = '';
const person2 = {
  name: 'John',
  age: 30,
  city: 'Dhaka',
  country: 'Bangladesh',
  today: new Date(),
  // today: today.toISOString(),
  // today: today.toJSON(),
  // today: today.toString(),
  // today: today.toLocaleString(),
  // today: today.toLocaleDateString(),
};
const myString = JSON.stringify(person2);
document.getElementById('demo').innerHTML = myString;

console.log(myString);

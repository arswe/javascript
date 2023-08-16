// JavaScript Maps exercise with solution:

// 1. Create a map of countries and number of characters of a country
// 2. Create a function to add a new country to the map
// 3. Create a function to get a country and print its number of characters

// 1. Create a map of countries and number of characters of a country
// const countries = new Map();
// countries.set('Finland', 7);
// countries.set('Sweden', 6);
// countries.set('Norway', 6);
// console.log(countries);

// // 2. Create a function to add a new country to the map
// const addCountry = (country, characters) => countries.set(country, characters);
// console.log(addCountry('Denmark', 7));

// // 3. Create a function to get a country and print its number of characters
// const getCountry = (country) => console.log(countries.get(country));

// addCountry('Denmark', 7);
// getCountry('Denmark');

// console.log(countries);

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set('apples', 500);
fruits.set('bananas', 300);
fruits.set('oranges', 200);

// let text = '';
// fruits.forEach(function (value, key) {
//   text += key + ' = ' + value;
// });

// console.log(`Fruits: ${text} `);

// List all entries
let text = '';
for (const x of fruits.entries()) {
  text += x;
  console.log(x);
}

console.log(`Fruits: ${text} `);

// JavaScript For In Loop example:
//
// The for in loop is used to loop through the properties of an object.
//
// The for in loop has the following syntax:
//
// for (variable in object) {
//   code block to be executed
// }
//
// The variable is a variable that iterates over the properties of the object.
//
// The object is an object whose properties are to be iterated.
//
// Example
//

// Loop through the properties of an object:
// const person = { fname: 'John', lname: 'Doe', age: 25 };

// for (let x in person) {
//   console.log(`${x}`);

//   console.log(person[x]);
// }

// Loop through the properties of an array:

const cars = ['BMW', 'Volvo', 'Mini', 'Ford', 'Audi', 'Mercedes'];

for (let x in cars) {
  console.log(`${x}: array index`);
  console.log(`${cars[x]}: is a car`);
}

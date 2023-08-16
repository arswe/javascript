// JavaScript What is JSON?

// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand

// JSON Syntax Rules list:

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// JSON Data - A Name and a Value:

// "name" : "value"

// const person = {
//   employees: [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Anna', lastName: 'Smith' },
//     { firstName: 'Peter', lastName: 'Jones' },
//   ],
// };

// JSON Arrays exampple:
// "name" : [ "value1", "value2", "value3" ]

// const person = {
//   employees: [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Anna', lastName: 'Smith' },
//     { firstName: 'Peter', lastName: 'Jones' },
//   ],
// };

// Converting a JSON Text to a JavaScript Object:

// JSON.parse() method example:

// const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// console.log(obj.name); // John

let person = {
  name: 'Jesse',
  age: 40,
  city: 'New York',
};

console.log(JSON.stringify(person)); // {"name":"Jesse","age":40,"city":"New York"}

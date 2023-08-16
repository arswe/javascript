// JavaScript Function Invocation w3schools.com

// function myFunction(a, b) {
//   return a * b;
// }

// console.log(window.myFunction(10, 2));

// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// const name = {
//   a: function () {
//     console.log(this);
//   },
// };

// name.a();

// // Invoking a Function as a Method
// const myObject = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     return this;
//   },
// };

// console.log(myObject.fullName());

// Invoking a Function with a Function Constructor

// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction('John', 'Doe');

// This will return "John"

console.log(myObj.firstName + ' ' + myObj.lastName);

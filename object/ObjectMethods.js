// JavaScript ES5 Object Methods w3schools.com

// Managing Objects

// Object.assign()
// Object.create()
// Object.defineProperties()
// Object.defineProperty()
// Object.entries()
// Object.freeze()
// Object.fromEntries()
// Object.getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptors()
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.getPrototypeOf()
// Object.is()
// Object.isExtensible()
// Object.isFrozen()
// Object.isSealed()
// Object.keys()
// Object.preventExtensions()
// Object.seal()
// Object.setPrototypeOf()
// Object.values()

// Object.assign()
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// Syntax
// Object.assign(target, ...sources)

// Parameters
// target
// The target object.

// sources
// The source object(s).

// Return value
// The target object.

// Description
// Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

// Object.assign() only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties versus just copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters. For copying property definitions, including their enumerability, into prototypes Object.getOwnPropertyDescriptor() and Object.defineProperty() should be used instead.

// Object.assign() will throw a TypeError if target is null or undefined.

// Example

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   language: 'EN',
// };

// // Change a property
// Object.defineProperty(person, 'language', { value: 'BD' });

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   language: 'EN',
// };

// Object.defineProperty(person, 'language', { enumerable: false });
// Object.getOwnPropertyNames(person); // Returns an array of properties

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   language: 'EN',
// };

// Object.defineProperty(person, 'language', { enumerable: false });
// Object.keys(person); // Returns an array of enumerable properties

// console.log(person.language); // NO

// Create an object:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   language: 'EN',
// };

// // Add a property
// Object.defineProperty(person, 'year', { value: '2008' });

// console.log(person.year); // 2008

// Define an object
const obj = { counter: 0 };

// Define Setters and Getters
Object.defineProperty(obj, 'reset', {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, 'increment', {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, 'decrement', {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, 'add', {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, 'subtract', {
  set: function (value) {
    this.counter -= value;
  },
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById('demo').innerHTML = obj.counter;

console.log(obj.counter); // 4

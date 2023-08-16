// JavaScript 'this' keyword:

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// console.log(person.fullName());

// JavaScript 'this' keyword w3schools example 2:

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// var person1 = {
//     firstName: 'Mary',
//     lastName: 'Doe',
//     id: 5567,
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// console.log(person.fullName());
// console.log(person1.fullName());

// JavaScript 'this' keyword w3schools example 3:

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// var x = person.fullName();
// console.log(x);

// JavaScript 'this' keyword w3schools example 4:

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function () {
//         // this refers to the person object
//         return this.firstName + ' ' + this.lastName; // this refers to the person object
//     },
// };

// var myObject = {
//     // myObject is a new object
//     firstName: 'Mary', // myObject has a property called firstName
//     lastName: 'Doe', // myObject has a property called lastName
// };

// myObject.fullName = person.fullName; // myObject.fullName() is now a copy of person.fullName()
// console.log(myObject.fullName()); // Mary Doe

// JavaScript 'this' keyword w3schools example 5:

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// var myObject = { firstName: 'Mary', lastName: 'Doe' };

// console.log(person.fullName.call(myObject)); // Mary Doe

// JavaScript 'this' keyword w3schools:

// implicit binding example 1:

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// console.log(person.fullName()); // John Doe

// explicit binding example 2:

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     id: 5566,
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// var myObject = { firstName: 'Mary', lastName: 'Doe' };

// console.log(person.fullName.call(myObject)); // Mary Doe

// new binding

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var myFather = new Person('John', 'Doe');
// console.log(myFather.firstName); // John

// window binding

// var firstName = 'John';
// var lastName = 'Doe';

// function fullName() {
//     return this.firstName + ' ' + this.lastName;
// }

// console.log(fullName()); // John Doe

// var printName = function (v1, v2, v3, v4) {
//     console.log(` ${this.name} is ${v1} ${v2} ${v3} ${v4}`);
// };

// var person = {
//     name: 'John',
//     age: 26,
// };

// var v1 = 'cool';
// var v2 = 'and';
// var v3 = 'handsome';
// var v4 = 'too';

// var v = [v1, v2, v3, v4];

// printName.call(person, v1, v2, v3, v4); // John is cool and handsome too
// printName.apply(person, v); // John is cool and handsome too

// var newFunc = printName.bind(person, v1, v2, v3, v4); // John is cool and handsome too
// newFunc();

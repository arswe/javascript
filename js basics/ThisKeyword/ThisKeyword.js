// The JavaScript this Keyword - W3Schools exercise and example:

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 5566,
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// console.log(person.fullName());

// this in a Method example:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 5566,
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// console.log(person.fullName());

// this in a Function example:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 5566,
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// console.log(person.fullName());

// Explicit Function Binding example:
const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};
const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};

console.log(person.fullName.apply(person2));

// this in a Constructor example:
// const person = {
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const person2 = {
//   firstName: 'Mary',
//   lastName: 'Doe',
// };

// console.log(person.fullName.call(person1));

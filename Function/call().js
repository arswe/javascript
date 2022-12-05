// JavaScript Function call()
// const a = {
//   fname: 'John',
//   lname: 'Doe',
//   sleep: function () {
//     console.log(`${this.fname} ${this.lname} is sleeping`);
//   },
// };

// a.sleep();

// function sleep() {
//   console.log(`${this.fname} ${this.lname} is sleeping`);
// }

// sleep.call({ fname: 'John', lname: 'Doe' });

//

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

// console.log(person.fullName.call(person1)); // John Doe;  // Will return "John Doe"

// The call() Method with Arguments

const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
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

console.log(person.fullName.call(person1, 'Dhaka', 'Bangladesh')); // John Doe,Dhaka,Bangladesh

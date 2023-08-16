// JavaScript Object Constructors:

// // Create an object constructor:
// function person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create a new object and call our constructor function:
// const myFather = new person('John', 'Doe', 50, 'blue');
// const myMother = new person('Sally', 'Rally', 48, 'green');

// // Display age data from the object:
// document.getElementById('demo').innerHTML = 'My father is ' + myFather.age + '.';
// console.log(myFather.age);

// // Display data from the object:
// document.getElementById('demo').innerHTML = 'My mother is ' + myMother.age + '.';
// console.log(myMother.age);

// // JavaScript Object Prototypes:

// Create an object constructor:
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');

console.log(myFather.fullName());
console.log(myMother.fullName());

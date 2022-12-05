// JavaScript Object Prototypes:

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');

Person.prototype.country = 'USA';

console.dir(Person);

console.log(myFather.country);
console.log(myMother.country);

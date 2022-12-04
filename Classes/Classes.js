// JavaScript Classes syntax:
// class ClassName {
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   ...
//   get something() { ... }
//   set something(value) { ... }
//   ...
//   [Symbol.iterator]() { ... }
//   ...
//   static method() { ... }
// }

// real example
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }
// }

// // Usage:
// let user = new User('John');
// user.sayHi();

// Class Expression

// class Car {
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }
// }

// let car = new Car('BMW', 200);
// let car2 = new Car('sujuki', 200);

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi(status) {
    console.log(`Hello ${this.name} is ${this.age} years old and ${status}`);
  }
}

let person1 = new person('AKAID', 25); // person1 is an object of person class and it has name and age properties
let person2 = new person('SAKIB', 24); // person2 is an object of person class and it has name and age properties

person1.sayHi('cricketer'); // Hello AKAID is 25 years old and cricketer
person2.sayHi('cricketer'); // Hello SAKIB is 24 years old and cricketer

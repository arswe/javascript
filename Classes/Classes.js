// JavaScript Classes w3schools.com:

// // Create a class named "Rectangle":
// class Rectangle {
//   // Create a constructor:
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// // Create a new object named "square":
// const square = new Rectangle(10, 10);

// // Create a new object named "pict":
// const pict = new Rectangle(20, 20);

// // Display the height and width of "square":
// console.log(square.height); // 10
// console.log(square.width); // 10

// classes w3schools.com:

// Create a class named "Car":
class Car {
  // Create a constructor:
  constructor(brand) {
    this.carname = brand;
  }
  // Create a method:
  present() {
    return 'I have a ' + this.carname;
  }
}

// Create a new object named "mycar":
const mycar = new Car('Ford');

// Display the name of "mycar":
console.log(mycar.present()); // I have a Ford

// Create a class named "Model":
class Model extends Car {
  // Create a constructor:
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  // Create a method:
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

// // Create a new object named "mycar":

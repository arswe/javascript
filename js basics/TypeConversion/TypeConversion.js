// JavaScript Type Conversion exsics and solutions:

// 1. Convert a String to a Number
// The Number() function can be used to convert a variable to a number:
var x = '10';
var y = '20';
var z = x + y; // z will be 1020 (a string)
var z = Number(x) + Number(y); // z will be 30 (a number)
console.log(z);

// 2. Convert a Number to a String
// The String() function can be used to convert a variable to a string:
// var x = 10;
// var y = 20;
// var z = x + y; // z will be 30 (a number)
// var z = String(x) + String(y); // z will be 1020 (a string)

// 3. Convert a Boolean to a String
// The String() function can be used to convert a variable to a string:
// var x = true;
// var y = false;
// var z = x + y; // z will be 1 (a number)
// var z = String(x) + String(y); // z will be "truefalse" (a string)

// 4. Convert a Boolean to a Number
// The Number() function can be used to convert a variable to a number:
// var x = true;
// var y = false;
// var z = x + y; // z will be 1 (a number)
// var z = Number(x) + Number(y); // z will be 1 (a number)

// 5. Convert a Date to a Number
// The getTime() method can be used to convert a date to a number:
// var x = new Date();
// var y = x.getTime(); // y will be the number of milliseconds since 1970

// ---------------------------------------------- //

// let a = 10e6;
// console.log(a.toExponential()); // 10000000

// // Converting Dates to Strings:
// let d = new Date();
// console.log(d.toString()); // Wed Jun 03 2020 15:00:00 GMT+0300 (Eastern European Summer Time)

// Automatic Type Conversion (Type Coercion) exsics and solutions:

// Automatic String Conversion (Type Coercion):
var x = 10 + 5; // x.valueOf() will be 15
var x = 10 + '5'; // x.valueOf() will be "105"
var x = 10 + true; // x.valueOf() will be 11
var x = 10 + false; // x.valueOf() will be 10
var x = 10 + null; // x.valueOf() will be 10
var x = 10 + undefined; // x.valueOf() will be NaN
var x = 10 + { name: 'John', age: 30 }; // x.valueOf() will be NaN
var x = 10 + [1, 2, 3, 4]; // x.valueOf() will be NaN

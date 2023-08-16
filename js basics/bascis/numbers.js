// // JavaScript Numbers example 1:
// var num = 10; // Number
// console.log(num); // 10
// console.log(typeof num); // number
// // JavaScript Numbers example 2:
// var num = 10.5; // Number
// console.log(num); // 10.5
// console.log(typeof num); // number

// // JavaScript Numbers example 3:
// var num = 10.5; // Number
// console.log(num); // 10.5
// console.log(typeof num); // number
// // what is JavaScript Numbers toFixed() method?:
// The toFixed() method formats a number using fixed-point notation.
// Syntax: numberObject.toFixed(num)
// Parameter Values:
// num: Required. The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values.
// Return Value: A string representing the given number using fixed-point notation.
// // JavaScript Numbers toFixed() example 1:
// console.log(num.toFixed(0)); // 11
// console.log(num.toFixed(1)); // 10.5
// console.log(num.toFixed(2)); // 10.50

// // what is JavaScript Numbers toPrecision() method?:
// The toPrecision() method formats a number to a specified length.
// Syntax: numberObject.toPrecision(num)
// Parameter Values:
// num: Required. The number of significant digits.
// Return Value: A string representing the given number using fixed-point notation.
// //JavaScript Numbers toPrecision() example 1:
// console.log(num.toPrecision(1)); // 1e+1
// console.log(num.toPrecision(2)); // 11
// console.log(num.toExponential(2)); // 1.05e+1

// // JavaScript Numbers example 4:
// var num = 10;   // Number
// console.log(num);  // 10
// console.log(typeof num);  // number
// console.log(num.toString());  // 10
// console.log(typeof num.toString());  // string

// // JavaScript Numbers example 5:
// var num = 10;   // Number
// console.log(num);  // 10
// console.log(typeof num);  // number
// console.log(num.toString(2));  // 1010
// console.log(num.toString(8));  // 12
// console.log(num.toString(16));  // a

//  // JavaScript Numbers example 6:
// var num = 10;   // Number
// console.log(num);  // 10
// console.log(typeof num);  // number
// console.log(num.valueOf());  // 10
// console.log(typeof num.valueOf());  // number

// // JavaScript Numbers example 7:
// var num = 10;   // Number
// console.log(num);  // 10
// console.log(typeof num);  // number
// console.log(num.toExponential());  // 1e+1
// console.log(num.toExponential(2));  // 1.00e+1
// console.log(num.toExponential(3));  // 1.000e+1
// console.log(num.toExponential(4));  // 1.0000e+1

// // JavaScript Numbers example 8:
// var num = 10;   // Number
// console.log(num);  // 10
// console.log(typeof num);  // number
// console.log(num.toFixed());  // 10
// console.log(num.toFixed(2));  // 10.00
// console.log(num.toFixed(3));  // 10.000
// console.log(num.toFixed(4));  // 10.0000

// // JavaScript Numbers example 9:
// var num = 10;   // Number
// console.log(num);  // 10
// console.log(typeof num);  // number
// console.log(num.toPrecision());  // 10
// console.log(num.toPrecision(2));  // 10
// console.log(num.toPrecision(3));  // 10.0
// console.log(num.toPrecision(4));  // 10.00

// // JavaScript Adding Numbers and Strings example 1:
// var num1 = 10; // Number
// var num2 = 20; // Number
// var str1 = 'Hello'; // String
// var str2 = 'World'; // String
// console.log(num1 + num2); // 30
// console.log(str1 + str2); // HelloWorld
// console.log(num1 + str1); // 10Hello
// console.log(str1 + num1); // Hello10

// JavaScript Numeric Strings example 1:
// var num1 = '10'; // String
// var num2 = '20'; // String
// console.log(num1 + num2); // 1020
// console.log(Number(num1) + Number(num2)); // 30
// console.log(parseInt(num1) + parseInt(num2)); // 30
// console.log(parseFloat(num1) + parseFloat(num2)); // 30

// // JavaScript Numeric Strings example 2:
// var num1 = '10.5'; // String
// var num2 = '20.5'; // String
// console.log(num1 + num2); // 10.520.5
// console.log(Number(num1) + Number(num2)); // 31
// console.log(parseInt(num1) + parseInt(num2)); // 30
// console.log(parseFloat(num1) + parseFloat(num2)); // 31

// // javascript NaN - Not a Number example 1:
// var num1 = 'Hello'; // String
// var num2 = 'World'; // String
// console.log(num1 + num2); // HelloWorld
// console.log(Number(num1) + Number(num2)); // NaN
// console.log(parseInt(num1) + parseInt(num2)); // NaN
// console.log(parseFloat(num1) + parseFloat(num2)); // NaN

// javascript Infinity example 1:
// var num1 = 10; // Number
// var num2 = 20; // Number
// console.log(num1 / 0); // Infinity
// console.log(num2 / 0); // Infinity
// console.log(num1 / -0); // -Infinity
// console.log(num2 / -0); // -Infinity

// // javascript Infinity loop example 2:
// var num1 = 10; // Number
// var num2 = 20; // Number
// while (num1 != Infinity) {
//   num1 = num1 * num1;
//   console.log(num1);
// }

// // javascript Hexadecimal  example 3:
// 0x10 = 16
// 0x20 = 32
// 16 + 32 = 48
var num1 = 0x10; // Hexadecimal
var num2 = 0x20; // Hexadecimal
console.log(num1 + num2); // 48

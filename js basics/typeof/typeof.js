// JavaScript typeof exercise with solution:

// In JavaScript there are 5 different data types that can contain values:

// string
// number
// boolean
// object
// function

// There are 6 types of objects:

// Object
// Date
// Array
// String
// Number
// Boolean

// And 2 data types that cannot contain values:

// null
// undefined

// The typeof operator can return one of these primitive types:

// string
// number
// boolean
// undefined

// The typeof operator can return one of these complex types:

// object
// function

// typeof function example:

// function myFunction() {
//   return 3;
// }

// console.log(typeof myFunction); // function

// The Data Type of typeof:

// typeof typeof 1
// "string"

// typeof typeof "a"
// "string"

// typeof typeof true
// "string"

// typeof typeof undefined
// "string"

// typeof typeof null
// "object"

// typeof typeof {}
// "object"

// typeof typeof []
// "object"

// typeof typeof function () {}
// "function"

// typeof typeof new Date()
// "object"

// typeof typeof Symbol()
// "symbol"

// typeof typeof new Map()
// "object"

// typeof typeof new Set()
// "object"

// typeof typeof new WeakMap()
// "object"

// typeof typeof new WeakSet()
// "object"

// typeof typeof new Promise()
// "object"

// typeof typeof new Error()
// "object"

// typeof typeof new RegExp()
// "object"

// typeof typeof new Proxy()
// "object"

// typeof typeof new ArrayBuffer()
// "object"

// typeof typeof new Int8Array()
// "object"

// The constructor Property:
// function isArray(myArray) {
//   console.log(myArray.constructor === Array);
// }

// isArray([0, 1, 2, 3, 4]); // false

// function isDate(myDate) {
//   console.log(myDate.constructor === Date);
// }

// isDate(new Date()); // true

// You can empty an object by setting it to null:

// let person = { name: 'John', age: 31, favColor: 'green', height: 183 };

// person = null; // Now person is null, but it was an object.

// console.log(typeof person); // null

let person = { name: 'John', age: 31, favColor: 'green', height: 183 };

person = undefined; // Now person is undefined, but it was an object.

console.log(typeof person); // null

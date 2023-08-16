// JavaScript Regular Expressions example and solution:

// Regular Expressions Syntax and Example:
// /pattern/modifiers;

// let text = 'Visir w3schools';
// let n = text.search(/w3schools/i);
// console.log(n);
// let pattern = /w3schools/;

// Regular Expressions Modifiers:
// g - global search
// i - case insensitive
// m - multiline search

// Regular Expressions Patterns:
// [abc] - Find any of the characters between the brackets
// [^abc] - Find any character NOT between the brackets
// [0-9] - Find any of the digits between the brackets
// [^0-9] - Find any character NOT between the brackets
// (x|y) - Find any of the alternatives separated with |

// Using String replace() With a String Parameter:
let str = 'Visit Microsoft!';

let n = str.replace(/Microsoft/i, 'W3Schools');
console.log(n);

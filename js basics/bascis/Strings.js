// javascript Strings example 1:
var str = 'Hello World';
console.log(str);

// javascript Strings length example 2 (length is a property):
var str = 'Hello World';
console.log(str.length);

// javascript Strings Escape Character example 3:
var str = "Hello 'World'";
console.log(str);

// javascript Strings object example 4:
var str = new String('Hello World');
console.log(str);

// javascript Strings object equals example 5:
var str1 = 'Hello World';
var str2 = new String('Hello World');
console.log(str1 == str2);
console.log(str1 === str2);

// JavaScript String Methods:
// JavaScript String Methods: concat(), indexOf(), lastIndexOf(), match(), replace(), search(), slice(), split(), substring(), toLowerCase(), toUpperCase(), valueOf()

// JavaScript String Methods example 6:
var str = 'JavaScript String Methods';
console.log(str.concat(' ', 'JavaScript'));
console.log(str.indexOf('String'));
console.log(str.lastIndexOf('String'));
console.log(str.match('String'));
console.log(str.replace('String', 'Methods'));
console.log(str.search('Methods'));
console.log(str.slice(-10, -1));
console.log(str.split(' '));
console.log(str.substring(0, 10));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.valueOf());

// JavaScript String Search Methods.
// JavaScript String Search Methods: charAt(), charCodeAt(), fromCharCode(), includes(), endsWith(), startsWith(), repeat(), trim(), trimLeft(), trimRight()

// JavaScript String Search Methods example 7:
var str = 'JavaScript String Search Methods';
console.log(str.charAt(0));
console.log(str.indexOf('String'));
console.log(str.lastIndexOf('String'));
console.log(str.charCodeAt(0));
console.log(String.fromCharCode(74));
console.log(str.includes('String'));
console.log(str.endsWith('Methods'));
console.log(str.startsWith('JavaScript'));
console.log(str.repeat(2));

// what is String Search Methods trim()?
// The trim() method removes whitespace from both sides of a string.
// The trim() method does not change the original string.
// Tip: Use the trim() method to remove whitespace from both sides of a string.
// Tip: Use the trimLeft() method to remove whitespace from the left side of a string.
// Tip: Use the trimRight() method to remove whitespace from the right side of a string.

console.log(str.trim());
console.log(str.trimLeft());
console.log(str.trimRight());

// JavaScript Regular Expressions example and solution:

// Regular Expressions
// A regular expression is an object that describes a pattern of characters.
// Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
// Regular expressions are also used to validate form input.
// Regular expressions are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.
// This example uses the test() method of RegExp.
// The test() method executes a search for a match between a regular expression and a specified string.
// Returns true or false.
// console.log(/abc/.test("abcde")); // true
// console.log(/abc/.test("abxde")); // false
// console.log(/abc/.test("abxdeabc")); // true
// console.log(/abc/.test("abxdeabcabc")); // true
// console.log(/abc/.test("abxdeabcabcabc")); // true
// console.log(/abc/.test("abxdeabcabcabcabc")); // true
// console.log(/abc/.test("abxdeabcabcabcabcabc")); // true

// Regular Expressions
// A regular expression is an object that describes a pattern of characters.
// Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
// Regular expressions are also used to validate form input.
// Regular expressions are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

// This example uses the match() method of String.
// The match() method retrieves the result of matching a string against a regular expression.
// Returns an array of matches or null.
// console.log("abcde".match(/abc/)); // ["abc"]
// console.log("abxde".match(/abc/)); // null

// This example uses the matchAll() method of String.

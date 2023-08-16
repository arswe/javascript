//  Errors and Exceptions Handling in JavaScript:

// 1. Syntax Errors
// 2. Runtime Errors
// 3. Logical Errors

// 1. Syntax Errors
// Syntax errors are caused by incorrect use of the rules of the JavaScript language.
// For example, using a keyword as a variable name:
// var let = 5;
// Syntax errors are detected when the script is parsed.

// 2. Runtime Errors
// Runtime errors are caused by a mistake in the code that only shows up when the script is run.
// For example, trying to use a variable that has not been declared:
// console.log('The value of x is ' + x);
// Runtime errors are detected when the script is run.

// 3. Logical Errors
// Logical errors are caused by incorrect logic.
// For example, using the wrong operator in a comparison:
// if (x = y) {
//   console.log('x and y are equal');
// }
// Logical errors are not detected by the JavaScript interpreter.

// 4. Error Objects
// JavaScript has a built-in error object that provides error information when an error occurs.
// The error object can help you find where your mistakes are and browsers have tools to help you read them.
// The error object contains the following properties:
// name: Type of execution
// message: Description
// fileNumber: Name of the JavaScript file
// lineNumber: Line number of error

// 5. Try...Catch...Finally
// The try statement lets you test a block of code for errors.
// The catch statement lets you handle the error.
// The finally statement lets you execute code, after try and catch, regardless of the result.
// The try statement lets you define a block of code to be tested for errors while it is being executed.
// The catch statement lets you define a block of code to be executed, if an error occurs in the try block.
// The finally statement lets you define a block of code to be executed, after try and catch, regardless of the result.
// The try...catch statement lets you handle the error.
// The try...catch statement has two main parts: try, and catch.
// The code you want to try goes in the try block.
// The catch block tells you what to do if the try block results in an error.
// The try...catch statement works like this:
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
// The try...catch statement handles errors so your script will not stop when an error occurs.

// 6. Throw
// The throw statement allows you to create custom errors.
// The throw statement is used together with an error type.
// There are many error types available in JavaScript:
// Error: Generic error - the other errors are all based upon this error
// SyntaxError: Syntax has not been followed
// ReferenceError: Tried to reference a variable that is not declared/within scope
// TypeError: An unexpected data type that cannot be coerced
// RangeError: Numbers not in acceptable range
// URIError: encodeURI().decodeURI(),and similar methods used incorrectly
// EvalError: eval() function used incorrectly
// The throw statement allows you to create a custom error.
// The throw statement is used together with an error object.
// The error object can be either a string or an object.
// The throw statement is used together with a try...catch statement to throw errors.
// The throw statement is often used to create custom errors.

// JavaScript try and catch program example:

function myFunction() {
  const message = document.getElementById('p01');
  message.innerHTML = '';
  let x = document.getElementById('demo').value;
  try {
    if (x == '') throw 'empty';
    if (isNaN(x)) throw 'not a number';
    x = Number(x);
    if (x < 5) throw 'too low';
    if (x > 10) throw 'too high';
  } catch (err) {
    message.innerHTML = 'Input is ' + err;
  }
}

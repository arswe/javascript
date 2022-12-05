// // javscript Number Methods example 1:
// console.log(Number.isFinite(10)); // true
// console.log(Number.isFinite(10.5)); // true
// console.log(Number.isFinite(10n)); // true
// console.log(Number.isFinite(BigInt(10))); // true
// console.log(Number.isFinite(BigInt(10n))); // true
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(-Infinity)); // false
// console.log(Number.isFinite(NaN)); // false

// // javscript Number Methods example 2:
// console.log(Number.isNaN(10)); // false
// isNaN(10) false but why?
// isNaN() function converts its argument to a number, then tests it for being NaN.

// console.log(Number.isNaN(10.5)); // false
// console.log(Number.isNaN(10n)); // false
// console.log(Number.isNaN(BigInt(10))); // false
// console.log(Number.isNaN(BigInt(10n))); // false
// console.log(Number.isNaN(Infinity)); // false
// console.log(Number.isNaN(-Infinity)); // false
// console.log(Number.isNaN(NaN)); // true

// // javscript Number Methods example 3:
// console.log(Number.isSafeInteger(10)); // true
// console.log(Number.isSafeInteger(10.5)); // false
// console.log(Number.isSafeInteger(10n)); // false
// console.log(Number.isSafeInteger(BigInt(10))); // false
// console.log(Number.isSafeInteger(BigInt(10n))); // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); // false

// // javscript Number Methods example 4:
// console.log(Number.parseFloat(10)); // 10
// console.log(Number.parseFloat(10.5)); // 10.5
// console.log(Number.parseFloat(10n)); // 10
// console.log(Number.parseFloat(BigInt(10))); // 10
// console.log(Number.parseFloat(BigInt(10n))); // 10
// console.log(Number.parseFloat(Infinity)); // Infinity
// console.log(Number.parseFloat(-Infinity)); // -Infinity
// console.log(Number.parseFloat(NaN)); // NaN
// console.log(Number.parseFloat('10')); // 10
// console.log(Number.parseFloat('10.5')); // 10.5
// console.log(Number.parseFloat('10n')); // 10

// // javscript Number Methods example 5:
// console.log(Number.parseInt(10)); // 10
// console.log(Number.parseInt(10.5)); // 10
// console.log(Number.parseInt(10n)); // 10
// console.log(Number.parseInt(BigInt(10))); // 10
// console.log(Number.parseInt(BigInt(10n))); // 10
// console.log(Number.parseInt(Infinity)); // NaN
// console.log(Number.parseInt(-Infinity)); // NaN
// console.log(Number.parseInt(NaN)); // NaN
// console.log(Number.parseInt('10')); // 10
// console.log(Number.parseInt('10.5')); // 10
// console.log(Number.parseInt('10n')); // 10
// console.log(Number.parseInt('10', 2)); // 2
// console.log(Number.parseInt('10', 8)); // 8
// console.log(Number.parseInt('10', 10)); // 10
// console.log(Number.parseInt('10', 16)); // 16
// console.log(Number.parseInt('10', 32)); // 32
// console.log(Number.parseInt('10', 36)); // 36
// console.log(Number.parseInt('10', 37)); // NaN

// // javscript Number Methods example 6:
// console.log(Number.isInteger(10)); // true
// console.log(Number.isInteger(10.5)); // false
// console.log(Number.isInteger(10n)); // false
// console.log(Number.isInteger(BigInt(10))); // false
// console.log(Number.isInteger(BigInt(10n))); // true
// console.log(Number.isInteger(Number.MAX_SAFE_INTEGER)); // true
// console.log(Number.isInteger(Number.MIN_SAFE_INTEGER)); // true
// console.log(Number.isInteger(Number.MAX_SAFE_INTEGER + 1)); // false
// console.log(Number.isInteger(Number.MIN_SAFE_INTEGER - 1)); // false

// // The toString() method returns a number as a string example 1:
// var x = 123;
// console.log(x.toString()); // 123
// console.log((123).toString()); // 123
// console.log((100 + 23).toString()); // 123

// // The toExponential() Method example 2:
var x = 9.656;
// toExponential(2) means 2 digits after the decimal point (e.g. 9.66e+0)
console.log(x.toExponential(2)); // 9.66e+0
console.log(x.toExponential(4)); // 9.6560e+0
console.log(x.toExponential(6)); // 9.656000e+0

// what is javascript BigInt.
// BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant.

// // javascript BigInt example 1:
// var num1 = 10; // Number
// var num2 = 20; // Number
// console.log(num1 + num2); // 30
// console.log(num1 + BigInt(num2)); // 30n
// console.log(BigInt(num1) + num2); // 30n
// console.log(BigInt(num1) + BigInt(num2)); // 30n

// // javscript BigInt Minimum and Maximum Safe Integers example 2:
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(BigInt(Number.MAX_SAFE_INTEGER)); // 9007199254740991n
// console.log(BigInt(Number.MIN_SAFE_INTEGER)); // -9007199254740991n

// javascript BigInt New Number Methods example 3:
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger(10n)); // false
console.log(Number.isInteger(BigInt(10))); // false
console.log(Number.isInteger(BigInt(10n))); // true

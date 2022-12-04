// JavaScript Bitwise Operations example and solution:
//
// Bitwise AND ( & )
// Bitwise OR ( | )
// Bitwise XOR ( ^ )
// Bitwise NOT ( ~ )
// Bitwise Left Shift ( << )
// Bitwise Right Shift ( >> )
// Bitwise Zero Fill Right Shift ( >>> )
//
// Bitwise AND ( & )
// The bitwise AND operator copies a bit to the result if it exists in both operands.
// Example
// 5 = 00000101
// 7 = 00000111
// -------------
// 5 & 7 = 00000101 = 5
// console.log(5 & 7); // 5
// console.log(5 & 8); // 0
// console.log(5 & 9); // 1
// console.log((5).toString(2)); // 11

// Bitwise OR ( | )
// The bitwise OR operator copies a bit if it exists in either operand.
// Example
// 5 = 00000101
// 7 = 00000111
// -------------
// 5 | 7 = 00000111 = 7
// console.log(5 | 7); // 7
// console.log(5 | 8); // 13
// console.log(5 | 9); // 13

// Bitwise XOR ( ^ )
// The bitwise XOR operator copies the bit if it is set in one operand but not both.
// Example
// 5 = 00000101
// 7 = 00000111
// -------------
// 5 ^ 7 = 00000010 = 2
// console.log(5 ^ 7); // 2
// console.log(5 ^ 8); // 13

// Bitwise NOT ( ~ )
// The bitwise NOT operator is unary and has the effect of 'flipping' bits.
// Example
// ~5 = -6
// console.log(~5); // -6
// console.log(~6); // -7
// console.log(~7); // -8

// Bitwise Left Shift ( << )
// The left shift operator shifts the bits of its first operand the specified number of places to the left of the second operand.
// Example
// 5 << 1 = 10
// console.log(5 << 1); // 10
// console.log(5 << 2); // 20

// Bitwise Right Shift ( >> )
// The right shift operator shifts the bits of its first operand the specified number of places to the right of the second operand.
// Example
// 5 >> 1 = 2
// console.log(5 >> 1); // 2
// console.log(5 >> 2); // 1

// Bitwise Zero Fill Right Shift ( >>> )
// The zero fill right shift operator shifts the bits of its first operand the specified number of places to the right of the second operand, and shifts in zeros from the left.
// Example
// 5 >>> 1 = 2
// console.log(5 >>> 1); // 2
// console.log(5 >>> 2); // 1

// Converting Decimal to Binary use function example:
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
console.log(dec2bin(10)); // 101

// Converting Binary to Decimal use function example:

function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}
console.log(bin2dec(101)); // 5

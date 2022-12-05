// JavaScript Iterables:

// Iterables are objects that implement the Symbol.iterator method, allowing them to be iterated over with a for...of loop.

// The following code shows how to create an iterable object:

// Create an iterable object:
// const iterable = {
//   [Symbol.iterator]() {
//     let step = 0;
//     return {
//       next() {
//         step++;
//         if (step === 1) {
//           return { value: 'This', done: false };
//         } else if (step === 2) {
//           return { value: 'is', done: false };
//         } else if (step === 3) {
//           return { value: 'iterable!', done: false };
//         }
//         return { value: '', done: true };
//       },
//     };
//   },
// };

// // Iterate over the iterable object:
// for (const value of iterable) {
//   console.log(value);
// }

// Output:
// This
// is
// iterable!

// The following code shows how to create an iterable object using a generator function:

// Create an iterable object using a generator function:
// const iterable = {
//   *[Symbol.iterator]() {
//     yield 'This';
//     yield 'is';
//     yield 'iterable!';
//   },
// };

// // Iterate over the iterable object:
// for (const value of iterable) {
//   console.log(value);
// }

// Output:
// This
// is
// iterable!

//

// const numbers = { one: 1, two: 2, three: 3 };

// const len = numbers.length;

// for (let i = 0; i < len; i++) {
//   console.log(numbers[i]);
// }

// console.dir(numbers);

// for (const num of numbers) {
//   console.log(num);
// }

// const nums = [11, 2, 3];

// console.dir((numIterator = nums[Symbol.iterator]()));

// for (const num of nums) {
//   console.log(num);
// }

// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());

const myNumbers = {};

myNumbers[Symbol.iterator] = function* () {
  let i = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

console.dir(myNumbers);

for (const num of myNumbers) {
  console.log(num);
}

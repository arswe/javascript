// // JavaScript Sorting Arrays example:

// // const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi', 'Lemon'];

// const numbers = [12, 22, 13, 14, 15, 6, 7, 8, 9, 10];

// numbers.sort();

// console.log(numbers);

// // Output:
// // ['Apple', 'Banana', 'Mango', 'Orange']

// // Reversing an Array example:

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi', 'Lemon'];

// fruits.reverse();

// console.log(fruits);

// // Numeric Sort example:

// const numbers = [9, 1, 45, 4, 16, 25];

// numbers.sort(function (a, b) {
//   return a - b;
// });

// console.log(numbers);

// // The  Compare Function example:

// const points = [40, 100, 1, 5, 1, 5, 25, 10];

// points.sort(function (a, b) {
//   return a - b;
// });

// console.log(points);

// // Output:
// // [1, 5, 10, 25, 40, 100]

// // Sorting an Array in Random Order example:

// const points = [40, 1, 5, 25, 10];

// points.sort(function (a, b) {
//   return 0.5 - Math.random();
// });

// console.log(points);

// // Output:
// // [40, 25, 5, 10, 1, 100]

// // The Fisher Yates Method example:

// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [points[i], points[j]] = [points[j], points[i]];
// }

// console.log(points);

// // Output:
// // [40, 25, 5, 10, 1, 100]

// // Find the Highest (or Lowest) Array Values example:

// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function (a, b) {
//   return b - a;
// });

// console.log(points);

// Output:
// [100, 40, 25, 10, 5, 1]

// // Find the Highest (or Lowest) Array Values example:

// const highest = Math.max(...points);

// const lowest = Math.min(...points);

// console.log(highest);

// console.log(lowest);

// Output:
// 100
// 1

// // My Min / Max JavaScript Methods example:

// const points = [40, 100, 1, 5, 25, 10];

// function myArrayMax(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// }

// console.log(myArrayMax(points));

// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }
// console.log(myArrayMin(points));

// // Sorting Object Arrays example:

const cars = [
  { type: 'Volvo', year: 2016 }, // x
  { type: 'Saab', year: 2001 }, // y
  { type: 'BMW', year: 2010 }, // z
];

cars.sort(function (a, b) {
  return a.year - b.year;
});

console.log(cars);

// // Output:
// // [ { type: 'Saab', year: 2001 },
// //   { type: 'BMW', year: 2010 },
// //   { type: 'Volvo', year: 2016 } ]

// // [{type: "Saab", year: 2001}, {type: "BMW", year: 2010}, {type: "Volvo", year: 2016}]

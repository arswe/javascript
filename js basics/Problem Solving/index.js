// 1. Write a function that can print any random number between any two given numbers (including them). Write a function that can tell us that.

// 2. How can you order roll numbers of students in your class sequentially? Write a function that can tell us that.

function orderRollNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

// 3. How can you order names of students in your class sequentially? Write a function that can tell us that.

// const rollNumbers = [10, 20, 3, 4, 15, 6];

// console.log(
//   rollNumbers.sort(function (a, b) {
//     return a - b;
//   })
// );

// 4. Write a function that can tell us whether an year is a leap year or not. example: isLeapYear(2020) => true

// function isLeapyear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return `${year} is a leap year`;
//   } else {
//     return `${year} is not a leap year`;
//   }
// }

// console.log(isLeapyear(2022));

// 5. How would you determine the number of vowels in a sentence? Write a function that can tell us that.

// function countVowels(str) {
//   let count = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('Learner Programmers Developer'));

// 6. How would you extract the duplicate numbers in an array? Write a function that can tell us that.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const duplicate = numbers.filter((value, index, arr) => {
//   return arr.indexOf(value) !== index;
// });

// console.log(duplicate);

// 7. How would you extract the unique numbers in an array example:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const unique = numbers.filter((value, index, arr) => {
//   return arr.indexOf(value) === index;
// });

// console.log(unique);

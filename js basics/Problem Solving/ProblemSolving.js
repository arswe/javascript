// Problem Solving , how many word dog use this sentence and find position.

// const sentence =
//   'The quick brown fox jumped over the lazy dog. If the dog reacted, was it really lazy? The dog was happy. The happy dog wagged its tail. The wagging tail made the fox jump. The quick brown fox jumped over the happy dog. The happy dog wagged its tail. The wagging tail made the fox jump. The quick brown fox jumped over the happy dog. ';

// const matches = sentence.match(/dog/gi);
// const occurrences = matches ? matches.length : 0;

// console.log(occurrences);

// let position = sentence.search(/dogs/i);
// position = position >= 0 ? position : 'Not found';

// console.log(position);

// input: linear search(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],'a')
// output: 2 or not found
// how to implement linear search

// function linearSearch(arr, val) {
//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return 'Not found';
// }

// console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'z'));

// make array and search longest string and index:

// function longestString(names) {
//   let longestWord = '';
//   for (const name of names) {
//     if (name.length > longestWord.length) {
//       longestWord = name;
//     }
//   }
//   return [longestWord, names.indexOf(longestWord)];
// }

// console.log(longestString(['sakibul islam', 'sakibul islam saidur', 'sakibul islam saidur rahman', 'akaid islam', 'akaid islam saidur', 'akaid']));

// 1 - 100 number print and find 3 ,5  and 3 , 5 both number divisible.

// function fizzBuzz(number) {
//   for (let i = 0; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i} FizzBuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} Fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} Buzz`);
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(50);

// array to searching and  remove falsy value program:
// const mixedArrays = ['lpd', undefined, 'sakibul', null, 'saidur', 0, 'rahman', NaN, 'akaid', false, 'islam', '', true];

// const trueArray = mixedArrays.filter(function (el) {
//   if (el) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const trueArray = mixedArrays.filter(Boolean);
// console.log(trueArray);

// object to searching and remove falsy value program:

const mixedObject = { name: 'sakibul', age: 0, address: '', phone: undefined, email: null, country: NaN, city: false, zip: true };

const trueObject = function (obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};

// const trueObject = Object.values(mixedObject).filter(Boolean);

console.log(trueObject(obj));

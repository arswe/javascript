// // Converting Arrays to Strings example:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// console.log(fruits.toString());

// console.log(fruits.join(' * '));

// console.log(fruits.join(' + '));

// console.log(fruits.join(''));

// console.log(fruits.join(' '));

// console.log(fruits.join(' - '));

// console.log(fruits.join(' / '));

// Output:
// Apple,Banana,Orange,Mango
// Apple * Banana * Orange * Mango
// Apple + Banana + Orange + Mango
// AppleBananaOrangeMango
// Apple Banana Orange Mango
// Apple - Banana - Orange - Mango

// // Popping and Pushing example:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// fruits.push('Kiwi');

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// Output:
//  ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi']
// [('Apple', 'Banana', 'Orange', 'Mango')];

// // Shifting and Unshifting example:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// fruits.unshift('Kiwi');

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// Output:
// ['Kiwi', 'Apple', 'Banana', 'Orange', 'Mango']
// ['Apple', 'Banana', 'Orange', 'Mango']

// // Splicing example with explanation:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// fruits.splice(2, 1, 'Lemon', 'Kiwi');

// console.log(fruits);

// Output:
// ['Apple', 'Banana', 'Lemon', 'Kiwi', 'Orange', 'Mango']

// // Using splice() to Remove Elements
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// fruits.splice(2, 1);

// console.log(fruits);

// // JavaScript Array slice() Method
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi', 'Lemon'];

// const citrus = fruits.slice(3, 5);

// console.log(citrus);

// Finding Max and Min Values in an Array example:
const numbers = [45, 4, 9, 16, 25];

console.log(Math.max(...numbers));

console.log(Math.min(...numbers));

// Output:
// 45
// 4

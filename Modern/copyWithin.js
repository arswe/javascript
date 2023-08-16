// copyWithin example:

// var arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3);
// console.log(arr); // [4, 5, 3, 4, 5]

//

var arr = ['javascript', 'python', 'java', 'c++', 'c#', 'php', 'ruby', 'perl', 'c', 'go'];

arr.copyWithin(2, 3);

console.log(arr); // [ 'javascript', 'python', 'c++', 'c++', 'c#', 'php', 'ruby', 'perl', 'c', 'go' ]

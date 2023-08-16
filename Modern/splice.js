// arrays.phototype.splice(start, deleteCount, item1, item2, ...):

// 1. start - index to start the splice
// 2. deleteCount - number of items to delete
// 3. item1, item2, ... - items to insert

// splice() returns an array of deleted items

// splice() modifies the original array

// splice() returns an empty array if no items are deleted

// splice() returns an empty array if no items are inserted

// splice() returns an empty array if no items are deleted or inserted

// splice() example:

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var deleted = arr.splice(2, 3, 100, 200, 300); // delete 3 items starting at index 2 and insert 3 items

// console.log(arr);

// console.log(deleted);

// splice() example:

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var deleted = arr.splice(2, 3); // delete 3 items starting at index 2

// console.log(arr);

// console.log(deleted);

// splice() example:

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var deleted = arr.splice(-2, 2, 100, 200, 300); // insert 3 items starting at index 2

console.log(arr);

console.log(deleted);

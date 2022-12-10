// array.reduce(callback[, initialValue]) example:

var arr = [1, 2, 3, 4];

var reduced = arr.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue; // 1 + 2 + 3 + 4 = 10
}, 0);

console.log(arr);

console.log(reduced);

// Output:
// [1, 2, 3, 4]
// 10

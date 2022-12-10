// array findIndex() example:

const array = [1, 2, 3, 4, 5, 6, 10];

// const found = array.findIndex((element) => element > 5);

var result = array.findIndex(function (currentValue, currentIndex, arr) {
    return currentValue > 60;
});

console.log(result);

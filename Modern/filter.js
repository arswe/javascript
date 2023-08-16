// Array filter method:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = numbers.filter(function (currentValue, currentIndex, arr) {
    console.log(currentIndex);
    console.log(arr);
    return currentValue > 5;
});

console.log(numbers);
console.log(filtered);

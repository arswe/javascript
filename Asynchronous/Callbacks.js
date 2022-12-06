// JavaScript Callbacks w3schools example:

// A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

// Example 1
// function myDisplayer(some) {
//     document.getElementById('demo').innerHTML = some;
//     console.log(some);
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculator(50, 5);
// myDisplayer(result);

// Example 2
// function myDisplayer(some) {
//     document.getElementById('demo').innerHTML = some;
//     console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     if (myCallback) myCallback(sum);
//     return sum;
// }

// myCalculator(50, 5, myDisplayer);

// Example 3
function myDisplayer(some) {
    document.getElementById('demo').innerHTML = some;
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(20, 5, function (mySum) {
    document.getElementById('demo').innerHTML = mySum;
    console.log(mySum);
});

// Example 4

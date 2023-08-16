// javascript function example 1:
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
console.log(add(100, 200));
console.log(add(1000, 2000));

// javascript function return multiple values:
function add(a, b) {
  return [a + b, a - b, a * b, a / b];
}

var result = add(10, 20);
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);

// javascript function example 2:
function add(a, b) {
  return a + b;
}

var result = add(10, 20);
console.log(result);

// javascript function two ways to call:
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
console.log(add.call(null, 10, 20));
console.log(add.apply(null, [10, 20]));

// javascript array of functions example 1:
var arr = [
  function () {
    console.log('Hello World 1');
  },
  function () {
    console.log('Hello World 2');
  },
  function () {
    console.log('Hello World 3');
  },
];

arr[0]();
arr[1]();
arr[2]();

// javascript functions lastNumber bigger than 10 example 1:
function lastNumberBiggerThan10(num) {
  var lastNumber = num % 10;
  return lastNumber > 10;
}

console.log(lastNumberBiggerThan10(10));

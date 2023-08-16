// Performance extension for JavaScript:

const Performance = {
  // Returns the current time in milliseconds:
  now: function () {
    return new Date().getTime();
  },
};

console.log(Performance.now());

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const len = arr.length;

for (let i = 0; i < len; i++) {
  console.log(arr[i]);
}

// Delay JavaScript Loading:
window.onload = function () {
  const element = document.createElement('script');
  element.src = 'myScript.js';
  document.body.appendChild(element);
};

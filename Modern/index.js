// ES6 Fat Arrow Function:

// function numbers(a, b) {
//     return a + b;
// }
// console.log(numbers(1, 2));

// const add = (a, b) => a + b;
// console.log(add(1, 2));

// var javascript = {
//     name: 'JavaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function () {
//         // this is the javascript object
//         this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
//     },
// };
// javascript.printLibraries();

const searchInput = document.querySelector('.search');

const display = document.querySelector('.result');

const thanks = document.querySelector('.thanks');

// function show() {
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(() => {
//         thanks.innerHTML = `Thanks for searching ${self.value}`;
//     }, 1000);
// }

// const show = () => {
//     display.innerHTML = this.value;
// };

searchInput.addEventListener('keyup', () => {
    console.log(this);
    display.innerHTML = this.value;
});

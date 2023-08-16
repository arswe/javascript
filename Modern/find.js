// Array.phototype.find() example:

// const array = [1, 2, 3, 4, 5, 6, 10];

// // const found = array.find((element) => element > 5);

// array.find(function (currentValue, currentIndex, arr) {
//     if (currentValue > 4) {
//         found = currentValue;
//     }
// });

// console.log(array);

// document.querySelector('.result').innerHTML = found;

class student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    tes() {
        console.log('test');
    }

    exampleFunction() {
        let array = [1, 2, 3, 4, 5, 6, 10];
        array.find(function () {
            this.test(); // this is undefined
        }, this);
    }
}

let student = new student('John', 20, 3.5);

student.exampleFunction();

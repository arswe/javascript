// Destructuring Examples:
// 1. Array Destructuring
// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// const arr = ['name', 'age', 'address', 'education', 'hobbies', 'skills', 'projects', 'awards', 'certifications', 'languages', 'interests', 'social', 'contact'];
// const [projects] = arr;

// console.log(projects); // name

// nested array destructuring
// const arr = ['name', 'age', 'address', 'education', 'hobbies', 'skills', 'projects', 'awards', 'certifications', 'languages', 'interests', 'social', 'contact'];
// const [name, , , , , , , , , , , , contact] = arr;

// console.log(contact); // name

// nested array destructuring number:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [a, , , , , , , , , b] = arr;

// console.log(a); // 1
// console.log(b); // 10

// 2. Object Destructuring
// let a, b;
// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

// ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}

// const user = {
//     id: 42,
//     is_verified: true,
//     name: 'John',
//     age: 24,
//     address: { street: '123 Main St', city: 'New York', state: 'NY', zip: '10001' },
//     education: { degree: 'Masters', school: { name: 'NYU', city: 'New York', state: 'NY' } },
// };

// const {
//     name,
//     age,
//     education: {
//         degree,
//         school: { name: schoolName },
//     },
// } = user;

// console.log(schoolName); // John

// 3. Parameter Destructuring
// function f([x, y, z]) {
//     return x + y + z;
// }
// f([1, 2, 3]); // 6

// function f({ x, y, z }) {
//     return x + y + z;
// }
// f({ z: 3, y: 2, x: 1 }); // 6

// 4. Default Values
// let x, y;
// [x = 5, y = 7] = [1];
// console.log(x); // 1
// console.log(y); // 7

// 5. Swapping Variables
// let x = 10;
// let y = 20;
// [x, y] = [y, x];
// console.log(x); // 20
// console.log(y); // 10

// 6. Parsing an array returned from a function
// function f() {
//     return [1, 2];
// }
// let a, b;
// [a, b] = f();
// console.log(a); // 1
// console.log(b); // 2

// 7. Ignoring some returned values
// function f() {
//     return [1, 2, 3];
// }
// let [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

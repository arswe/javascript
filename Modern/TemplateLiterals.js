// Template Literals example:

// let name = 'John';
// let age = 24;
// let message = `Hello ${name}, you are ${age} years old.`;
// console.log(message); // Hello John, you are 24 years old.

// Tagged Template Literals example:
// function tag(strings, ...values) {
//     console.log(strings); // [ 'Hello ', ', you are ', ' years old.' ]
//     console.log(values); // [ 'John', 24 ]
//     return 'foo';
// }
// let name = 'John';
// let age = 24;
// let message = tag`Hello ${name}, you are ${age} years old.`;
// console.log(message); // foo

// Tagged Template Literals example:
// function tag(strings, ...values) {
//     const m = strings.reduce((prev, current) => {
//         return prev + current + (values.length ? 'Mr. ' : values.shift() + ' ');
//     }, '');

//     console.log(m); // Hello John, you are 24 years old.

//     console.log(strings); // [ 'Hello ', ', you are ', ' years old.' ]
//     console.log(values); // [ 'John', 24 ]
//     return m;
// }
// let name1 = 'akid';
// let name2 = 'santy';
// let message = tag` Hello ${name1}, you are ${name2}  `;
// console.log(message); // foo

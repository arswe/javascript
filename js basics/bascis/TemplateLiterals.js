// javascript Template Literals example:
// Template Literals are enclosed by backticks (` `) instead of double or single quotes.
// Template Literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).
// The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
// The default function just concatenates the parts into a single string.
// Template Literals can contain multi-line text and expressions.
// Template Literals can be used to define functions.
// Template Literals can be used to define functions.
// Template Literals can be used to define functions.

// // JavaScript Template Literals example 1:
// var str = `Hello World`;
// console.log(str);

// // JavaScript Template Literals example 2:
// var str = `Hello World`;
// console.log(str.length);

// // JavaScript Template Strings example 3:
// var str = `Hello 'World'`;
// console.log(str);

// // JavaScript Template Strings example 4:
// var str = new String(`Hello World`);
// console.log(str);

// // JavaScript Template Strings example 5:
// var str1 = `Hello World`;
// var str2 = new String(`Hello World`);
// console.log(str1 == str2);
// console.log(str1 === str2);

// // JavaScript Template Literals Interpolation example 6:
// var str = `JavaScript Template Literals Interpolation`;
// console.log(`${str} JavaScript`);
// console.log(`${str} ${str}`);
// console.log(`${str} ${str} ${str}`);

// // JavaScript Template Literals variable Substitutions example 7:
// var str = `JavaScript Template Literals variable Substitutions`;
// var a = 10;
// var b = 20;
// console.log(`${str} ${a + b}`);
// console.log(`${str} ${a * b}`);
// console.log(`${str} ${a / b}`);
// console.log(`${str} ${a % b}`);
// console.log(`${str} ${a ** b}`);

// // JavaScript Template Literals String variable Substitutions example 7:
// var str = `JavaScript Template Literals String variable Substitutions`;
// var a = 'JavaScript';
// var b = 'Template Literals';
// console.log(`${str} ${a} ${b}`);
// console.log(`${str} ${a} ${b} ${a} ${b}`);

// // JavaScript Template Literals Expression Substitution example 8:
// var str = `JavaScript Template Literals Expression Substitution`;
// var a = 10;
// var b = 20;
// console.log(`${str} ${a + b}`);
// console.log(`${str} ${a * b}`);
// console.log(`${str} ${a / b}`);
// console.log(`${str} ${a % b}`);
// console.log(`${str} ${a ** b}`);

// HTML Templates String variable example 9:
let header = 'Templates Literals';
let tags = ['template literals', 'javascript', 'es6'];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += ` <li> ${x} </li> `;
}

html += `</ul>`;
console.log(html);

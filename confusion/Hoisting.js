// JavaScript Hoisting example:

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// In JavaScript, a let iable can be declared after it has been used.

// example:

// x = 5; // Assign 5 to x

// elem = document.querySelector('.demo'); // Find an element

// elem.innerHTML = x; // Display x in the element

let language = 'Java'; // Declare language
let LANGUAGE = 'JavaScript'; // Declare LANGUAGE

function getLanguage() {
    if (language === LANGUAGE) {
        let language = LANGUAGE; // Declare language
    }
    return language;
}

console.log(`I love ${getLanguage()}`); // I love JavaScript

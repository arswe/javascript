// JavaScript HTML DOM Elements (Nodes)

// JavaScript HTML DOM Nodes w3schools.com example:

// const para = document.createElement('p');
// const node = document.createTextNode('This is new Nodes.');

// para.appendChild(node); // Append the text to <p>

// const element = document.getElementById('div1');
// const child = document.getElementById('p2');
// element.insertBefore(para, child); // Insert <p> before <p1>

// removeChild() Method
const parent = document.getElementById('div1');
const child = document.getElementById('p1');
parent.removeChild(child);

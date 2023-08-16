// JavaScript HTML DOM Navigation w3schools.com example:

const p = document.getElementById('demo');

const way1 = p.innerHTML;
const way2 = p.firstChild.nodeValue;
const way3 = p.childNodes[0].nodeValue;
const way4 = p.firstChild.textContent;
const way5 = p.childNodes[0].textContent;

console.log(way1);
console.log(way2);
console.log(way3);
console.log(way4);
console.log(way5);

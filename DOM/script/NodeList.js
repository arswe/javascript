// JavaScript HTML DOM Node Lists

// The HTML DOM NodeList Object
// A NodeList object is a list (collection) of nodes extracted from a document.

// A NodeList object is almost the same as an HTMLCollection object.

// Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

// All browsers return a NodeList object for the property childNodes.

// Most browsers return a NodeList object for the method querySelectorAll().

// The NodeList object is an array of nodes.

// The nodes in a NodeList object are numbered, starting with 0.

// The length property of a NodeList object returns the number of nodes in a NodeList object.

//

const NodeList = document.querySelectorAll('p');

const HTMLCollection = document.getElementsByClassName('intro');

console.dir(NodeList);
console.dir(HTMLCollection);

console.dir(NodeList[0]);
console.dir(HTMLCollection['one']);

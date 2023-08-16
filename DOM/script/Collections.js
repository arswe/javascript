// JavaScript HTML DOM Collections w3schools.com example:

// The getElementsByTagName() method returns an HTMLCollection object.

// An HTMLCollection object is an array-like list (collection) of HTML elements.

function myFunction() {
    const myCollection = document.getElementsByTagName('p');
    for (let i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = 'red';
    }
}

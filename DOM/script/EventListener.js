// JavaScript HTML DOM EventListener:

function myFunction(txt) {
    console.log(txt);
}

const btn = document.querySelector('#btn');
const container = document.querySelector('#container');

btn.addEventListener(
    'click',
    function () {
        myFunction('JavaScript! BUTTON');
    },
    true
);

container.addEventListener(
    'click',
    function () {
        myFunction('JavaScript! container');
    },
    true
);

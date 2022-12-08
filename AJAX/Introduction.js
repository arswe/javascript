// AJAX Introduction example w3schools:

function sendRequest(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            console.log(xhr.response);
        };
        // https://jsonplaceholder.typicode.com/todos/1
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send();
    });
    return promise;
}

function getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    sendRequest('GET', url)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
function sendData() {}

const getButton = document.getElementById('get');
const sendButton = document.getElementById('send');

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);

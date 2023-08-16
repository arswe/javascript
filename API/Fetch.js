// A Fetch API Example:
// const display = document.getElementById('display');

// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then((response) => response.json())
//         .then((json) => (display.innerHTML = json.title))
//         .catch((error) => console.log(error));
// }

// Since Fetch is based on async and await:

// const display = document.getElementById('display');

// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//         const json = await response.json();
//         display.innerHTML = json.id;
//     } catch (error) {
//         console.log(error);
//     }
// }

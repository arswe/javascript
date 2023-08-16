// JavaScript HTML DOM

// The HTML DOM (Document Object Model) allows JavaScript to access and change all the elements of an HTML document.
// document.getElementById('demo').innerText = 'Hello JavaScript!';

// const x = document.forms['frm1'];
// let text = '';
// let length = x.length;

// for (let i = 0; i < length; i++) {
//     text += x.elements[i].value + '<br>';
// }
// document.getElementById('demo').innerHTML = text;

// const element = document.getElementById('demo');

// element.innerHTML = `Today is  + ${Date()}`;

// JavaScript HTML DOM - Changing CSS

// function styling() {
//     const p = document.querySelector('#demo');
//     p.style.color = 'darkblue';
//     p.style.fontSize = '40px';
//     p.style.fontFamily = 'open sans';
//     p.style.fontWeight = 'bold';
//     p.style.textAlign = 'center';
//     p.style.padding = '20px';
//     p.style.border = '3px solid red';
//     p.style.borderRadius = '5px';
//     p.style.backgroundColor = 'lightblue';
// }

// JavaScript HTML DOM Animation

// function myMove() {
//     const animate = document.getElementById('animate');
//     let pos = 0;
//     const id = setInterval(frame, 5);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             animate.style.top = pos + 'px';
//             animate.style.left = pos + 'px';
//         }
//     }
// }

// Web Workers API

// What is a Web Worker?

// When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
// A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

// example:

const demo = document.getElementById('demo');
let i = 0;

// while (i < 100000000) {
//     i++;
// }
// demo.innerHTML = i;

function startWorkers() {
    if (typeof Worker !== 'undefined') {
        if (typeof w == 'undefined') {
            w = new Worker('Worker js');
        }
    } else {
        alert('Your Brower Not Support');
    }
}

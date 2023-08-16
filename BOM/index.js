// JavaScript Window - The Browser Object Model w3school

// let width = document.getElementById('width');
// let height = document.getElementById('height');

// // show

// width.innerHTML = 'Browser inner window width: ' + window.innerWidth + 'px';
// height.innerHTML = 'Browser inner window height: ' + window.innerHeight + 'px';

// function openWindow() {
//     window.open('https://google.com');
// }
// function closeWindow() {
//     window.close();
// }

// // The window.screen object can be written without the window prefix.
// const width = document.getElementById('width');
// const height = document.getElementById('height');
// const availWidth = document.getElementById('availWidth');
// const availHeight = document.getElementById('availHeight');
// const colorDepth = document.getElementById('colorDepth');
// const pixelDepth = document.getElementById('pixelDepth');

// // Display the width of the screen in pixels:

// width.innerHTML = 'Screen Width: ' + screen.width;
// height.innerHTML = 'Screen height: ' + screen.height;
// availWidth.innerHTML = 'Screen availWidth: ' + screen.availWidth;
// availHeight.innerHTML = 'Screen availHeight: ' + screen.availHeight;
// colorDepth.innerHTML = 'Screen colorDepth: ' + screen.colorDepth;
// pixelDepth.innerHTML = 'Screen pixelDepth: ' + screen.pixelDepth;

// JavaScript Window Location

// Window Location
// The window.location object can be written without the window prefix.

// Some examples:

// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document

// const href = document.getElementById('href');
// const hostname = document.getElementById('hostname');
// const pathname = document.getElementById('pathname ');
// const protocol = document.getElementById('protocol');
// const assign = document.getElementById('assign');
// const port = document.getElementById('port');

// href.innerHTML = 'Page location is: ' + location.href;
// hostname.innerHTML = 'Page hostname is: ' + location.hostname;
// pathname.innerHTML = 'Screen availWidth: ' + location.pathname;
// protocol.innerHTML = 'Page protocol is: ' + location.protocol;
// port.innerHTML = 'Port number is: ' + location.port;

// function newDoc() {
//     window.location.assign('https://www.w3schools.com');
// }

// JavaScript Window History
// The window.history object contains the browsers history.

// Window History
// The window.history object can be written without the window prefix.
// To protect the privacy of the users, there are limitations to how JavaScript can access this object.

// Some methods:
// history.back() - same as clicking back in the browser
// history.forward() - same as clicking forward in the browser

// function goBack() {
//     window.history.back();
// }
// function goForward() {
//     window.history.forward();
// }

// JavaScript Popup Boxes w3school example:

// function showAlart() {
//     window.alert('Hello World!');
// }

// function showConfirm() {
//     let txt;
//     if (confirm('Press a button!')) {
//         txt = 'You pressed OK!';
//     } else {
//         txt = 'You pressed Cancel!';
//     }
//     document.getElementById('demo').innerHTML = txt;
// }

// function showPrompt() {
//     let txt;
//     let person = prompt('Please enter your name:', 'Harry Potter');

//     if (person == null || person == '') {
//         txt = 'User cancelled the prompt.';
//     } else {
//         txt = 'Hello ' + person + '! How are you today?';
//     }
//     document.getElementById('demo').innerHTML = txt;
// }

// JavaScript Timing Events

// const timesout = document.getElementById('timesout');
// const interval = document.getElementById('interval');

// function myTimeout() {
//     timesoutInstanse = setTimeout(function () {
//         timesout.innerHTML = 'your timesout!';
//     }, 3000);
// }

// function stopTimeout() {
//     clearTimeout(timesoutInstanse);
// }

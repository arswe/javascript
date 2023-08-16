// JavaScript Date Objects example:

// Create a new Date object
// const myDate = new Date();

// Display the current date and time
// console.log(myDate.getFullYear());

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.

// Current time is : 10 PM : 30 : 38
const today = new Date();
const day = today.getDay();
const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const prepand = hour >= 12 ? 'PM' : 'AM';
const hour12 = hour >= 12 ? hour - 12 : hour;
console.log(`Today is : ${daylist[day]}.`);
console.log(`Current Time : ${hour12} ${prepand} : ${minute} : ${second}`);

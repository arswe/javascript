// JavaScript Promises w3schools.com example:

// var myPromise = new Promise(function (myResolve, myconsolelog) {
//     // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myconsole.log(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function (value) {
//         /* code if successful */
//     },
//     function (error) {
//         /* code if some error */
//     }
// );

// const status = true;
// console.log('task 1');

// // promise declaration or definition
// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (status) {
//             resolve('task 2');
//         } else {
//             reject('failed');
//         }
//     }, 2000);
// });

// // promise consumption or calling
// promise
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// console.log('task 3');

// const paymentSuccess = true;
// const marks = 80;

// const paymentPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (paymentSuccess) {
//             resolve('Payment Successful');
//         } else {
//             reject('Payment Failed');
//         }
//     }, 2000);
// });

// const marksPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (marks >= 80) {
//             resolve('Marks are good');
//         } else {
//             reject('Marks are bad');
//         }
//     }, 2000);
// });

// Promise.all([paymentPromise, marksPromise])
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// Promise.all() example
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;

// const promise3 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 2000, 'Goodbye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users/2').then(function (res) {
//     return res.json();
// });

// Promise.all([promise1, promise2, promise3, promise4]).then(function (values) {
//     console.log(values[3].name);
// });

const paymentSuccess = true;
const marks = 80;

function enrollStudent() {
    console.log('Course Enrollment is in progress.... ');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve('Payment Successful');
            } else {
                reject('Payment Failed');
            }
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log('Progress is in progress.... ');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject('Marks are bad');
            }
        }, 2000);
    });

    return promise;
}

function getCertificate() {
    console.log('Certificate is in progress.... ');
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('congrats you got the Certificate ');
        }, 2000);
    });

    return promise;
}

enrollStudent()
    .then(progress)
    .then(getCertificate)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

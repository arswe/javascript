// JavaScript Async w3schools.com example:

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

// Example 2

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

const progress = () => {
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
};

function getCertificate() {
    console.log('Certificate is in progress.... ');
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('congrats you got the Certificate ');
        }, 2000);
    });

    return promise;
}

async function course() {
    try {
        await enroll();
        await progress();
        await getCertificate();
        const result = await getCertificate();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// enrollStudent()
//     .then(progress)
//     .then(getCertificate)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

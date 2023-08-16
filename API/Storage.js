// Web Storage API w3schools.com:

// Web Storage API
// https://www.w3schools.com/html/html5_webstorage.asp

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    alert(localStorage.getItem(key));
}
function removeLocalStorage(key) {
    alert(localStorage.removeItem(key));
}
function clearLocalStorage() {
    alert(localStorage.clear());
}

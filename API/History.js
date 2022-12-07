// Web History API:

// History API
// https://developer.mozilla.org/en-US/docs/Web/API/History

function back() {
    window.history.back();
}

function backTo() {
    window.history.go();
}

function forward() {
    window.history.forward();
}

function getHistory() {
    alert(window.history.length);
}

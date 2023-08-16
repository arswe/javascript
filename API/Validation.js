// JavaScript Validation API:

function myFunction() {
    const inputObj = document.getElementById('myInput');

    if (inputObj.validity.rangeOverflow) {
        inputObj.setCustomValidity('Value must be less than 100.');
    } else if (inputObj.validity.rangeUnderflow) {
        inputObj.setCustomValidity('Value must be greater than 10.');
    } else if (inputObj.validity.valueMissing) {
        inputObj.setCustomValidity(' value Missing .');
    } else if (inputObj.validity.typeMismatch) {
        inputObj.setCustomValidity('Please enter a valid email address.');
    } else if (inputObj.validity.patternMismatch) {
        inputObj.setCustomValidity('Please enter a valid email address.');
    } else if (inputObj.validity.tooLong) {
        inputObj.setCustomValidity('Please enter a value less than 30 characters long.');
    } else if (inputObj.validity.stepMismatch) {
        inputObj.setCustomValidity('Please enter a valid value.');
    } else if (inputObj.validity.badInput) {
        inputObj.setCustomValidity('Please enter a valid value.');
    } else {
        inputObj.setCustomValidity('');
    }

    if (!inputObj.checkValidity()) {
        document.getElementById('demo').innerHTML = inputObj.validationMessage;
    } else {
        // do something
    }
}

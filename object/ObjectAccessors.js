//  JavaScript Object Accessors
// Create an object:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: '',
  set lang(lang) {
    this.language = lang;
  },
};

person.lang = 'en';

// Display data from the object using a getter:
document.getElementById('demo').innerHTML = person.lang;

console.log(person.lang);

// JavaScript Object Methods:

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'.toLowerCase(),
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    state: 'NY',
  },
  getBirthYear: function () {
    return 2020 + this.age;
  },

  // ES6
  getBirthYear2() {
    return 2019 * this.age;
  },
};

console.dir(person.country);
// console.log(person.getBirthYear2());

// JavaScript Function apply()

const person = {
  fullName: function (city, country, age) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country + ',' + age;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};

console.log(person.fullName.apply(person1, ['Dhaka', 'Bangladesh', 30])); // John Doe,Dhaka,Bangladesh,30

// The Difference Between call() and apply()

// The difference is:
// The call() method takes arguments separately.s
// The apply() method takes arguments as an array.

// Simulate a Max Method on Arrays:

Math.max(1, 2, 3);
Math.max.apply(null, [1, 2, 3]);

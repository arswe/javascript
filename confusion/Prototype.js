// Javascript Prototype:
// 1. Prototype is a property of a function
var Person = function (name, age) {
    // this is a constructor function
    this.name = name;
    this.age = age;
};

// this is a prototype function
Person.prototype = {
    getName: function () {
        return this.name; // this is a prototype function
    },
};


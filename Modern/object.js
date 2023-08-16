// Important object tricks:

var obj = { name: 'akaid', age: 25, city: 'Germany' };
var obj2 = { name: 'sakib', age: 26, city: 'Dhaka' };
var obj3 = { name: 'Rajib', age: 27, city: 'Bangladesh' };

// 1. Object.assign example:

var obj4 = Object.assign(obj, obj2, obj3);
console.log(obj4);

// 2. Object.keys
var obj4 = Object.keys(obj, obj2, obj3);
console.log(obj4);

// 3. Object.values

var obj4 = Object.values(obj, obj2, obj3);
console.log(obj4);

// 4. Object.entries

var obj4 = Object.entries(obj, obj2, obj3);
console.log(obj4);

// 5. Object.freeze

var obj4 = Object.freeze(obj, obj2, obj3);
console.log(obj4);

// 6. Object.seal example:
var obj4 = Object.seal(obj, obj2, obj3);
console.log(obj4);

// 7. Object.isSealed

var obj4 = Object.isSealed(obj, obj2, obj3);
console.log(obj4);

// 8. Object.isFrozen
var obj4 = Object.isFrozen(obj, obj2, obj3);
console.log(obj4);

// 9. Object.isExtensible
var obj4 = Object.isExtensible(obj, obj2, obj3);
console.log(obj4);

// 10. Object.preventExtensions
var obj4 = Object.preventExtensions(obj, obj2, obj3);
console.log(obj4);

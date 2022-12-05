// JavaScript Sets Methods list:
//
// Set.prototype.add()
// Set.prototype.clear()
// Set.prototype.delete()
// Set.prototype.entries()
// Set.prototype.forEach()
// Set.prototype.has()
// Set.prototype.keys()
// Set.prototype.values()
// Set.prototype[Symbol.iterator]()
// Set.prototype[Symbol.toStringTag]
// Set.prototype.constructor
// Set.prototype.size
// Set.prototype[@@iterator]()

// JavaScript Sets:
//
// // Sets are a new object type that allow you to store unique values of any type. A value in the Set may only occur once; it is unique in the Set's collection.
//

// const letters = new Set(['a', 'b', 'c', 'd', 'e']);

// console.log(letters.values());

// for (const elem of letters) {
//   console.log(elem);
// }

const person = {
  name: 'Max',
  age: 30,
  //   hobbies: ['Sports', 'Cooking'],
};

console.log(Object.keys(person));

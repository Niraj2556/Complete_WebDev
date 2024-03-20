// const mySet = new Set();
// mySet.add('apple');
// mySet.add('banana');
// mySet.add('orange');
// mySet.add('apple');     // Ignored, as 'apple' is already in the Set
// console.log(mySet);

// mySet.delete('banana'); // Removes 'banana' from the Set
// console.log(mySet);

// mySet.clear();          // Removes all elements from a Set
// console.log(mySet);

// Output
// Set(3) { 'apple', 'banana', 'orange' }
// Set(2) { 'apple', 'orange' }
// Set(0) {}




// const obj1 = { name: "John", age: 30 };
// const obj2 = { name: "John", age: 30 };

// const mySet = new Set();

// mySet.add(obj1);
// mySet.add(obj2);

// console.log(mySet.size);

// Output
// Even though obj1 and obj2 have the same contents, they are considered unique in the Set






// // Checking if an Element is in the Set:
// const mySet = new Set(['apple', 'banana', 'orange']);

// console.log(mySet.has('banana'));
// console.log(mySet.has('grape'));

// // Output
// true
// false

// Getting the Size of the Set:
// console.log(mySet.size);
// Output
// 3



// Iterating through a Set:
// const mySet = new Set(['apple', 'banana', 'orange']);

// // Using forEach
// mySet.forEach((value) => {
//   console.log(value);
// });

// // Using for...of loop
// for (const fruit of mySet) {
//   console.log(fruit);
// }

// Output
// apple
// banana
// orange

// apple
// banana
// orange


// Converting Set to Array:

// const fruitsArray = Array.from(mySet);
// console.log(fruitsArray);

// Output
// [ 'apple', 'banana', 'orange' ]
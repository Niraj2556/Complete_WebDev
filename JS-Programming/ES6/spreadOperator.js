// Spread Operator
// The spread operator is a feature introduced in ECMAScript 6 (ES6) that provides a concise and powerful syntax for working with arrays, objects, and function arguments. It uses the ellipsis (...) notation to spread the elements of an iterable (like an array or an object) into individual elements. The spread operator is particularly useful for copying, merging, and extracting values from arrays and objects.
// Array Spreading:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Concatenate arrays
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// Create a shallow copy of an array
const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
console.log(copiedArray);

// Output
[1, 2, 3, 4, 5, 6]
[10, 20, 30]
// Object Spreading:
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// Merge objects
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);

// Output
// { x: 1, y: 2, z: 3 }
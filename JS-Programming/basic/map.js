// Definition :- In JavaScript, a Map is a built-in object that allows you to store key-value pairs, where each key can be of any data type, and each value can also be of any data type. Maps are useful for associating data and performing lookups based on specific keys.

// Creating a Map: You can create a Map in JavaScript using the new keyword with the Map() constructor.
const myMap = new Map();




// Adding and Removing Entries: To add key-value pairs to a Map, you can use the .set() method, and to remove entries, you can use the .delete() method.
// const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap);

myMap.delete('age');
console.log(myMap);

myMap.clear();
console.log(myMap);

// Output
// Map(2) { 'name' => 'John', 'age' => 30 }
// Map(1) { 'name' => 'John' }
// Map(0) {}
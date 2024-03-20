// JSON.parse() and JSON.stringify() are two important functions provided by JavaScript for working with JSON (JavaScript Object Notation) data. They allow you to convert JSON data to JavaScript objects and vice versa. Both of these functions were introduced in ECMAScript 5 (ES5).
// JSON.parse(): The JSON.parse() function is used to parse a JSON-formatted string and convert it into a JavaScript object.
// Syntax: JSON.parse(jsonString)
// jsonString: A valid JSON-formatted string that you want to parse.
// Example:
const jsonString = '{"name": "John", "age": 30, "isStudent": true}';
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject.name);
console.log(parsedObject.age);
console.log(parsedObject.isStudent);

// Output
// "John"
// 30
// true








// JSON.stringify(): The JSON.stringify() function is used to convert a JavaScript object into a JSON-formatted string.
// Syntax: JSON.stringify(jsonObject[, replacer[, space]])
// jsonObject: The JavaScript object you want to convert to a JSON-formatted string.
// replacer (optional): A function or an array used to customize the serialization of the object (more advanced usage).
// space (optional): A string or number representing the number of spaces for indentation in the resulting JSON string (for pretty-printing).
// Example:
const person = { name: "Alice", age: 25, isStudent: false };
const jsonstring = JSON.stringify(person);

console.log(jsonstring);

// Output
// '{"name":"Alice","age":25,"isStudent":false}'
// These functions are incredibly useful when working with JSON data, such as sending or receiving data from APIs, storing configurations, or exchanging data between different parts of an application. Together, JSON.parse() and JSON.stringify() provide a straightforward way to work with JSON data in JavaScript.
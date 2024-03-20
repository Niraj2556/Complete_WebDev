// Provide me with a JavaScript code example that illustrates the Destructuring Assignment using an optimal solution.
// ChatGPT
// Certainly! Destructuring assignment is a powerful feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a concise way. Here's an example using both array and object destructuring:

// javascript
// Copy code
// Array Destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor);  // Output: 'blue'

// Object Destructuring
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const { firstName, lastName, age } = person;

console.log(firstName); // Output: 'John'
console.log(lastName);  // Output: 'Doe'
console.log(age);       // Output: 30


// In the array destructuring example, we are assigning the values from the colors array to the variables firstColor, secondColor, and thirdColor. In the object destructuring example, we are extracting the properties firstName, lastName, and age from the person object.

// This concise syntax is particularly useful when dealing with function parameters, return values, or when working with complex data structures.






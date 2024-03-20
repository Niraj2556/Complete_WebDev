// let and const Declarations
// let and const are two block-scoped variable declarations introduced in ECMAScript 6 (ES6). They provide an alternative to the traditional var declaration, which was the primary way to declare variables before ES6. Both let and const are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) where they are defined, making the code more predictable and maintainable.
// let Declaration:
// Variables declared with let can be reassigned new values.
// They are mutable, meaning their values can change after initialization.
// let variables are hoisted to the top of their block scope, but they are not initialized until the actual declaration is reached in the code.
// Example:
let x = 10;
x = 20;

if (true) {
  let y = 5;
  console.log(y);
}

console.log(x);
console.log(y);

// Output
5
20
// Uncaught ReferenceError: y is not defined
// const Declaration:
// Variables declared with const cannot be reassigned once they are initialized.
// They are immutable, meaning their values cannot be changed after declaration.
// const variables must be initialized at the time of declaration.
// Example:
const PI = 3.14159;
// PI = 3.14; // Error: Cannot reassign a const variable

if (true) {
  const country = "USA";
  console.log(country);
}

console.log(country);

// Output
// USA
// Uncaught ReferenceError: country is not defined
// When to use let or const:
// Use let when you need to reassign the variable's value.
// Use const when you want to ensure that the variable's value remains unchanged after initialization and when you want to create constant values.
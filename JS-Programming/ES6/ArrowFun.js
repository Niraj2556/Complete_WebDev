// Arrow functions are a concise and expressive way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a shorter syntax compared to traditional function expressions. Arrow functions are particularly useful for creating shorter and more readable code, especially when working with callbacks and handling the this context.
// The basic syntax of an arrow function is as follows:


// const functionName = (param1, param2, ...) => {
  // Function body
  // Return statement (if needed)
// };



// Arrow functions have the following characteristics:
// Implicit Return: If the function body consists of a single expression, the return statement is implied, and the result of the expression is automatically returned.
// Single Parameter: If the function has only one parameter, you can omit the parentheses around the parameter list.
// Multiple Parameters: If the function has multiple parameters or no parameters, you need to include the parentheses.
// No this Binding: Arrow functions do not have their own this binding. Instead, they inherit the this value from the surrounding lexical context. This makes arrow functions particularly useful when dealing with callbacks or working with this in nested functions.
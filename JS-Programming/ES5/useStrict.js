// “use strict”
// "use strict" is a pragma in JavaScript that enables "strict mode" in a script or a function. It was introduced in ECMAScript 5 (ES5) to help developers write safer and more reliable code by enforcing stricter rules and disallowing certain unsafe practices. When you use "use strict", the JavaScript engine enters strict mode for the scope where it is placed, providing additional error-checking and improvements to the language.
// To enable strict mode, you simply include the string literal 'use strict'; at the beginning of a script or a function.
// For example:
// 'use strict';

// Code in strict mode goes here
function myFunction() {
  'use strict';
  // Code in strict mode goes here
}


// Here are some of the changes and restrictions enforced by strict mode:
// Variables must be declared before use: You can't use a variable without declaring it first with var, let, or const.
// No global variable creation: Assigning a value to an undeclared variable will throw an error instead of creating a new global variable.
// No octal literals: Octal literals (e.g., 010) are not allowed.
// No deleting variables: Deleting a variable using the delete operator is not allowed.
// No duplicate property names in objects: Duplicate property names in an object literal will cause an error.
// No duplicate function parameters: Declaring a function with duplicate parameters will throw an error.
// No use of reserved words as variable names: Using reserved keywords as variable names (e.g., eval, arguments, etc.) will throw an error.
// this in functions behaves differently: In strict mode, this is not automatically coerced to the global object in functions.
// By using "use strict", you can catch potential errors earlier, avoid common pitfalls, and improve the overall code quality and maintainability. It is considered a best practice to use strict mode in all JavaScript code to take advantage of these benefits.
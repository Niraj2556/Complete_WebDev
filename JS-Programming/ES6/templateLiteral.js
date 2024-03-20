// Template Literals
// Template literals, also known as template strings, are a feature introduced in ECMAScript 6 (ES6) that allows you to create strings with embedded expressions. They provide a more concise and expressive way to define strings in JavaScript, especially when you need to include variables, expressions, or multiline content.
// Template literals are enclosed by backticks ( ) instead of single or double quotes. Within template literals, you can embed expressions using the ${} syntax.
// Here's the basic syntax of a template literal:


const variable = "value";
const templateLiteral = `This is a template literal with ${variable}.`;
console.log(templateLiteral);



// Output
// "This is a template literal with value."
// Template literals have several advantages over traditional strings:
// String Interpolation: Template literals allow you to embed expressions inside the string using ${}. Expressions within ${} are evaluated and replaced with their corresponding values.
// Multiline Strings: Template literals can span multiple lines, which makes them ideal for creating multiline strings without using explicit newline characters (\\n).
// Expression Evaluation: The expressions within ${} can be any valid JavaScript expressions, including variables, function calls, arithmetic operations, and even other template literals.
// Template literals have become widely used in modern JavaScript development due to their improved readability, easier multiline string creation, and seamless string interpolation capabilities. They are especially beneficial when working with dynamic content or when writing complex strings that would otherwise require concatenation or newline characters.
// Multiline strings
// In ECMAScript 5 (ES5), you can use the backslash (\) to create multiline strings by escaping the line breaks.
// Here's the correct way to do it:


const multilineString = "This is a multiline string \
using the backslash to escape line breaks\
in JavaScript ES5.";
console.log(multilineString);

// Output
// "This is a multiline string using the backslash to escape line breaks in JavaScript ES5."




// In the code above, the backslash is used to escape the line breaks, allowing the string to span multiple lines without causing a syntax error. When you print multilineString using console.log, it will display as a multiline string with each line concatenated into one continuous line.
// While this method can be used in ES5, it is worth noting that using template literals (introduced in ES6) or string concatenation are generally more commonly used approaches for creating multiline strings, as they offer better readability and maintainability. However, the backslash escape method is still valid and might be helpful if you need to work with older ES5 codebases or environments.
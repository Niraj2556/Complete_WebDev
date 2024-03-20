// String trim()
// In JavaScript, the trim() method is a built-in string method that removes whitespace characters from both the beginning and the end of a string. Whitespace characters include spaces, tabs, and newline characters. The trim() method does not modify the original string; instead, it returns a new string with leading and trailing whitespace removed.
// Here's how you can use the trim() method:


const str = "    Hello, World!    ";
const trimmedString = str.trim();

console.log(trimmedString);

// Output
// "Hello, World!"





// In this example, the trim() method removes the leading and trailing spaces from the original string, resulting in a new string "Hello, World!".
// Keep in mind that the trim() method only removes whitespace characters from the beginning and end of the string. If there are spaces or other whitespace characters within the string, they will not be affected by this method. If you want to remove whitespace characters from all positions in the string, you can use regular expressions or other methods like replace().
// const str = "  Hello, \\t World!\\n   ";
// const trimmedString = str.replace(/\\s+/g, '');

// console.log(trimmedString);

// // Output
// "Hello,World!"
// In the above example, we use a regular expression (/\\s+/g) to match one or more whitespace characters (\\s+) globally (g), and then we replace them with an empty string ''. This removes all whitespace characters from the string, including spaces, tabs, and newlines.
// RegEx Flags
// In JavaScript, regular expressions (regex) support several optional flags that modify the behavior of the pattern matching. These flags are added after the closing slash of the regex pattern and are represented by single characters. Each flag serves a specific purpose and can be combined to achieve different matching behaviors.
// Here are the commonly used flags in JavaScript regex:
// i (Ignore case): The i flag makes the regex pattern case-insensitive. It allows the pattern to match both uppercase and lowercase characters.
// Example:
const regex = /hello/i;
console.log(regex.test("Hello"));
console.log(regex.test("HELLO"));

// // Output
// true
// true


// g (Global search): The g flag enables global matching. It allows the regex pattern to find all occurrences of a match in the input string, not just the first one.
// Example:
// const regex = /a/g;
// console.log("abracadabra".match(regex));

// // Output
// ["a", "a", "a", "a"]
// m (Multiline matching): The m flag enables multiline matching. It allows the regex pattern to match the start and end of each line in a multiline input string.
// Example:
// const regex = /^start/m;
// console.log("start\\nstart again".match(regex));

// // Output
// ["start", "start"]
// s (Dot matches all): The s flag, also known as the "single-line" flag, enables the dot (.) to match all characters, including newlines.
// Example:
// const regex = /hello.world/s;
// console.log(regex.test("hello\\nworld"));

// // Output
// true




// These flags can be used individually or combined as needed. For example, to perform a case-insensitive and global search, use the regex pattern with the i and g flags together (/pattern/ig). Flags play an essential role in tailoring the behavior of regular expressions to suit specific matching requirements in JavaScript.
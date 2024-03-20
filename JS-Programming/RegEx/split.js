// split(): The split() method splits a string into an array of substrings based on a RegEx match.
// For example:
const regex = /\s+/;
const str = 'I have a dog.';
const words = str.split(regex);

// Output
// ["I", "have", "a", "dog."]
// In this example, the split() method splits the string into an array of words based on whitespace.
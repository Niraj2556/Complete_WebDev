// exec(): By using the exec() method, you can search for a RegEx match within a string and receive an array that contains details about the match. If there is no match found, null will be returned.
// For example:
const regex = /dog/;
const str = 'I have a dog.';
const match = regex.exec(str);

// // Output
// ["dog", index: 9, input: "I have a dog.", groups: undefined]


// In this example, the exec() method returns an array with one element ("dog") and some additional properties that provide information about the match.
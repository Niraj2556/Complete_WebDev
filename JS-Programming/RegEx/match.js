// match(): If there is no RegEx match found, the match() method will return null. However, if there is a match found, the method will return an array that includes all of the matches found within the string.
// For example:
const regex = /dog/;
const str = 'I have a dog.';
const matches = str.match(regex);

// Output
// ["dog"]
// In this example, the match() method returns an array with one element ("dog").
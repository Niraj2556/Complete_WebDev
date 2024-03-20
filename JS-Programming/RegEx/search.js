// search(): Using the search() method, you can look for a RegEx match within a string and obtain the index of the first match. If there is no match found, the method will return -1.
// For example:
const regex = /dog/;
const str = 'I have a dog.';
const index = str.search(regex);

// Output
// 9
// In this example, the search() method returns 9 because the first match of the RegEx is found at index 9 in the string.
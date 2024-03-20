// Quantifiers
// In regular expressions, quantifiers are metacharacters used to specify the number of occurrences a character or a group of characters should have in order to be considered a match. They allow you to define the repetition of patterns and control how many times a certain element must appear in the input string. Quantifiers are applied to the character or group immediately preceding them.
// Here are some common quantifiers:
// * (Zero or More Quantifier): The * quantifier matches zero or more occurrences of the preceding character or group. It means that the character or group can appear any number of times, including not at all.
// Example:
const regex = /ab*c/;
console.log(regex.test("ac"));
console.log(regex.test("abc"));
console.log(regex.test("abbc"));
console.log(regex.test("abbbbc"));

// // Output
// true
// true
// true
// true
// + (One or More Quantifier): The + quantifier matches one or more occurrences of the preceding character or group. It requires the character or group to appear at least once.
// Example:
// const regex = /ab+c/;
// console.log(regex.test("ac"));
// console.log(regex.test("abc"));
// console.log(regex.test("abbc"));
// console.log(regex.test("abbbbc"));

// // Output
// false
// true
// true
// true
// ? (Zero or One Quantifier): The ? quantifier matches zero or one occurrence of the preceding character or group. It means the character or group is optional.
// Example:
// const regex = /ab?c/;
// console.log(regex.test("ac"));
// console.log(regex.test("abc"))
// console.log(regex.test("abbc"));
// console.log(regex.test("abbbc"));

// // Output
// true
// true
// false
// false
// {n} (Exact Quantifier): The {n} quantifier matches exactly "n" occurrences of the preceding character or group.
// Example:
// const regex = /ab{3}c/;
// console.log(regex.test("abbbc"));
// console.log(regex.test("abbc"));

// // Output
// true
// false
// {n,} (At Least "n" Quantifier): The {n,} quantifier matches "n" or more occurrences of the preceding character or group.
// Example:
// const regex = /ab{2,}c/;
// console.log(regex.test("abbc"));
// console.log(regex.test("abbbc"));
// console.log(regex.test("abc"));

// // Output
// true
// true
// false
// {n,m} (Between "n" and "m" Quantifier): The {n,m} quantifier matches between "n" and "m" occurrences (inclusive) of the preceding character or group.
// Example:
// const regex = /ab{2,4}c/;
// console.log(regex.test("abbc"));
// console.log(regex.test("abbbc"));
// console.log(regex.test("abbbbc"));
// console.log(regex.test("abbbbbc"));

// // Output
// true
// true
// true
// false
// Quantifiers are essential for defining the repetition and pattern matching rules in regular expressions, allowing you to create more flexible and powerful text matching patterns.

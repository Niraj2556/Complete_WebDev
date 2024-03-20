// Once upon a time, there was a young girl named Mia who loved to play word games. She would spend hours solving puzzles and riddles. One day, she decided to play a game where she had to remove all the vowels from a word or phrase to create a new, unrecognizable string. She found the game challenging and fun, but wished there was an easier way to remove all the vowels without having to do it manually.
// Can you help Mia by writing a function in ES6 syntax that takes a string as input and returns a new string with all the vowels removed?
// Example 1:
// Input: Hello, how are you?
// Output: Hll, hw r y?



function main() {
    var str = readLine();
    console.log(removeVowelsES6(str));
}
const removeVowelsES6 = (str) => {
  return str.replace(/[aeiou]/gi, '');
};

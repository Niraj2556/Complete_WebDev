// Backspace String Compare
// Easy
// +10 APs
// unsolved
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:


// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:


// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:


// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Do not remove nor make any changes in  main() function
function main() {
    var s = readLine();
    var t = readLine();
    console.log(backspaceCompare(s, t));
}
var backspaceCompare = function(s, t) {
   function buildString(inputStr) {
        const stack = [];
        for (const char of inputStr) {
            if (char !== '#') {
                stack.push(char);
            } else if (stack.length > 0) {
                stack.pop();
            }
        }
        return stack.join('');
    }

    return buildString(s) === buildString(t);
};
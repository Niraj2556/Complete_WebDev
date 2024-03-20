// Positions of Large Groups
// Hard
// +10 APs
// unsolved
// In a string s of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing order by start index.

// Example 1:


// Input: s = "abbxxxxzzy"
// Output: [[3,6]]
// Explanation:"xxxx" is the onlylarge group with start index 3 and end index 6.
// Example 2:


// Input: s = "abc"
// Output: []
// Explanation: We have groups "a", "b", and "c", none of which are large groups.
// Example 3:


// Input: s = "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]
// Explanation: The large groups are "ddd", "eeee", and "bbb".
// Constraints:

// 1 <= s.length <= 1000
// s contains lowercase English letters only.

// Do not remove nor make any changes in  main() function
function main() {
    var s = readLine();
    console.log(largeGroupPositions(s));
}
var largeGroupPositions = function(s) {
    var result = [];
    var start = 0;

    for (var end = 1; end < s.length; end++) {
        if (s[end] != s[start]) {
            if (end - start >= 3) {
                result.push([start, end - 1]);
            }
            start = end;
        }
    }

    // Check the last group
    if (s.length - start >= 3) {
        result.push([start, s.length - 1]);
    }

    return result;
};
// Evaluate and compare the efficiencies based on Execution Speed and Memory Usage of the two codes provided.


// Code 1
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    
    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};


// Code 2
var lengthOfLastWord = function(s) {
  const regex = /\s/g;
  s = s.replace(regex,'@');
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "@") {
      count++;
      if (s[i - 1] === '@') {
        return count;
      }
    }
  }

  return count;
};




// Evaluation:
// Execution Speed:

// Code 1: This code uses the trim and lastIndexOf functions, which have time complexities of O(n) and O(n) respectively, where n is the length of the input string.
// Code 2: This code uses a loop to iterate through the string, which also has a time complexity of O(n), where n is the length of the input string.
// Both codes have similar time complexities, so there might not be a significant difference in execution speed.

// Memory Usage:

// Code 1: The primary memory usage is associated with creating the trimmedString variable, which is a copy of the trimmed input string. The memory usage is proportional to the length of the input string.
// Code 2: This code uses a constant amount of memory for the regex variable and the count variable. It also modifies the input string in place, so the memory usage is relatively low.
// Code 2 may have a slight advantage in terms of memory usage, as it avoids creating an additional trimmed string.

// Conclusion:
// In terms of execution speed, both codes are likely to perform similarly. In terms of memory usage, Code 2 might have a slight advantage, but the overall difference might not be significant unless the input strings are extremely large.
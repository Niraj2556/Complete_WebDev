// Example 1:
// Input:  nums = [3, 0, 1]

// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input:  nums = [0, 1]

// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums



function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(missingNumber(nums));
  }
  
  var missingNumber = function(nums) {
    let ans = nums.length;
  
    for (let i = 0; i < nums.length; ++i)
      ans ^= i ^ nums[i];
  
    return ans;
  };
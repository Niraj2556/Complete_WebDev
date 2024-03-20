// Largest Number
// Medium

// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:
// Input:
// nums = [10,2]

// Output:
// "210"

// Example 2:
// Input:
// nums = [3,30,34,5,9]

// Output:
// "9534330"

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109




function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(largestNumber(nums));
}
var largestNumber = function(nums) {
   const compare = (x, y) => {
        return parseInt(y + x) - parseInt(x + y);
    };

    // Convert numbers to strings and sort using the custom comparison function
    const sortedNums = nums.map(String).sort((a, b) => compare(a, b));

    // Join the sorted strings to form the largest number
    const result = sortedNums.join('');

    // Handle the case where the result is '0' to avoid leading zeros
    return String(BigInt(result));
};
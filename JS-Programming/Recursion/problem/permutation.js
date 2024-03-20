function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(permute(nums));
}
var permute = function(nums) {
   function backtrack(start) {
        if (start == nums.length) {
            result.push(nums.slice()); // Make a copy of the current permutation
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap elements
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack
        }
    }

    var result = [];
    backtrack(0);
    return result;
};
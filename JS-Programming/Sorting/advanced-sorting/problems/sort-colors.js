// For example, the array might contain the following objects:
// [2, 0, 2, 1, 1, 0]
// The algorithm must sort the objects in the array so that they are in the following order:
// [0, 0, 1, 1, 2, 2]




function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(sortColors(nums));
  }
  
  var sortColors = function(nums) {
    let zero = 0,
      one = 0,
      two = 0;
    for (let n of nums) {
      n === 0 ? zero++ : n === 1 ? one++ : two++;
    }
    for (let i = 0; i < nums.length; i++) {
      i < zero ? (nums[i] = 0) : i < zero + one ? (nums[i] = 1) : (nums[i] = 2);
    }
    return nums;
  };
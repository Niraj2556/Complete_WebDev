// Intersection of Two Arrays II
// Medium
// +10 APs
// solved
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input:
// nums1 = [1,2,2,1], nums2 = [2,2]

// Output:
// [2,2]

// Example 2:
// Input:
// nums1 = [4,9,5], nums2 = [9,4,9,8,4]

// Output:
// [4,9]

// Explanation:
// [9,4] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


function main() {
    var nums2 = readLine().split(" ").map(x => parseInt(x));
    var nums1 = readLine().split(" ").map(x => parseInt(x));
    console.log(intersect(nums1, nums2));
}
const intersect = function(nums1, nums2) {
  const countMap1 = new Map();
    const countMap2 = new Map();

    // Populate countMap1 with counts of numbers in nums1
    for (const num of nums1) {
        countMap1.set(num, (countMap1.get(num) || 0) + 1);
    }

    // Populate countMap2 with counts of numbers in nums2
    for (const num of nums2) {
        countMap2.set(num, (countMap2.get(num) || 0) + 1);
    }

    // Find the intersection by comparing counts in both maps
    const result = [];
    for (const [num, count] of countMap1) {
        const countInNums2 = countMap2.get(num) || 0;
        const intersectionCount = Math.min(count, countInNums2);
        for (let i = 0; i < intersectionCount; i++) {
            result.push(num);
        }
    }

    return result;
};
// Minimum Index Sum of Two Lists
// Easy
// +10 APs
// solved
// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

// Example 1:
// Input:
// list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]

// Output:
// ["Shogun"]

// Explanation:
// The only common string is "Shogun".

// Example 2:
// Input:
// list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]

// Output:
// ["Shogun"]

// Explanation:
// The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

// Example 3:
// Input:
// list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]

// Output:
// ["sad","happy"]

// Explanation:
// There are three common strings: "happy" with index sum = (0 + 1) = 1. "sad" with index sum = (1 + 0) = 1. "good" with index sum = (2 + 2) = 4. The strings with the least index sum are "sad" and "happy".

// Constraints:
// - `1 <= list1.length, list2.length <= 1000`
// - `1 <= list1[i].length, list2[i].length <= 30`
// - `list1[i]` and `list2[i]` consist of spaces `' '` and English letters.
// - All the strings of `list1` are **unique**.
// - All the strings of `list2` are **unique**.
// - There is at least a common string between `list1` and `list2`.


// Do not remove nor make any changes in  main() function
function main() {
	const list1 = [];
    const list1Count = parseInt(readLine().trim(), 10);
	for (let i = 0; i < list1Count; i++) {
		const list1Item = readLine()
		list1[i] = list1Item;
	}
	const list2 = [];
    const list2Count = parseInt(readLine().trim(), 10);
	for (let i = 0; i < list2Count; i++) {
		const list2Item = readLine()
		list2[i] = list2Item;
	}
    console.log(findRestaurant(list1,list2));
}
var findRestaurant = function(list1, list2) {
  const index_dict1 = {};
  const index_dict2 = {};
  let minIndexSum = Number.POSITIVE_INFINITY;
  let commonStrings = [];

  for (let i = 0; i < list1.length; i++) {
    index_dict1[list1[i]] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    index_dict2[list2[i]] = i;
  }

  for (let i = 0; i < list1.length; i++) {
    const word = list1[i];

    if (index_dict2.hasOwnProperty(word)) {
      const currentIndexSum = i + index_dict2[word];

      if (currentIndexSum < minIndexSum) {
        minIndexSum = currentIndexSum;
        commonStrings = [word];
      } else if (currentIndexSum === minIndexSum) {
        commonStrings.push(word);
      }
    }
  }

  return commonStrings;
};
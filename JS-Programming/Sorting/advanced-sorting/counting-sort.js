// Introduction to Counting Sort
// Counting Sort is a non-comparative sorting algorithm that works by determining the number of occurrences of each distinct element in the input array. It creates a count array to store the frequency of each element and uses this information to determine the correct position of each element in the sorted output array. Counting Sort assumes that the input elements are integers or can be mapped to integers.
// Working of Counting Sort
// Determine Range: Find the minimum and maximum values in the input array to determine the range of values for the count array.
// Count Frequencies: Create a count array of size range, initialized with all zeros. Iterate through the input array, and for each element, increment the corresponding index in the count array.
// Compute Cumulative Counts: Modify the count array to store the cumulative count of each element. Each count represents the number of elements that are less than or equal to the corresponding index.
// Place Elements in Sorted Order: Iterate through the input array in reverse order. For each element, find its index in the count array, which represents its sorted position in the output array. Place the element in the correct position, and decrement the count in the count array for that index.
// Build Sorted Array: The output array is now sorted, with elements placed in their correct order based on their counts.
// notion image
// Implementation of Counting Sort
// Here's a simple implementation of the Counting Sort algorithm in JavaScript:

function countingSort(arr) {
  if (arr.length === 0) {
    return arr;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
}

// Example usage
var arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr));

// Output
[1, 2, 2, 3, 3, 4, 8]

// Explanation
// Time Complexity of Counting Sort
// Time complexity: O(n + k)
// Counting Sort has a linear time complexity, where n represents the number of elements in the input array and k represents the range of values. It performs two passes over the input array: one to count the occurrences of each element and another to place the elements in their sorted order. The time complexity is not affected by the initial order of the input elements.
// Space Complexity of Counting Sort
// The space complexity of Counting Sort: O(n + k)
// Counting Sort requires additional space to store the count array and the output array. The space complexity is dependent on the number of elements in the input array (n) and the range of values (k). The space complexity is considered linear.
 
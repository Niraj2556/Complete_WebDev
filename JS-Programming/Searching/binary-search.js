// Working of Binary Search

// Start with a Sorted Collection: Binary Search requires the collection to be sorted in ascending or descending order for optimal performance.

// Define Search Space: Binary Search starts with the entire collection as the initial search space.

// Find the Middle Element: It calculates the middle element of the search space by averaging the indices of the low and high ends.

// Compare with Target: The middle element is compared with the target value that needs to be found.

// Match Found: If the middle element matches the target value, the search is successful, and the index of the element is returned.

// Adjust Search Space: If the middle element is greater than the target value, the search is narrowed down to the lower half of the search space. Otherwise, if the middle element is less than the target value, the search is narrowed down to the upper half of the search space.

// Repeat the Process: Steps 3 to 6 are repeated until a match is found or the search space becomes empty (indicating the absence of the target value).

// End of Search: If the search space becomes empty without finding a match, Binary Search concludes that the target value is not present in the collection and returns a special value (e.g., -1) to indicate the absence of the target.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }



//   Time Complexity of Binary Search

// Worst-case time complexity: O(log n)
// Binary Search divides the search space in half at each iteration. In the worst case, it continues dividing until the search space reduces to a single element or becomes empty. This process can be repeated a maximum of log n times, where n is the size of the sorted collection.

// Average-case time complexity: O(log n)
// The average-case time complexity of Binary Search is also O(log n). It divides the search space in half at each step, leading to a logarithmic time complexity.

// Best-case time complexity: O(1)
// The best-case scenario occurs when the target value is found at the middle of the sorted collection. In this case, Binary Search performs only one comparison and terminates, resulting in constant time complexity.

// Space Complexity of Binary Search
// Space complexity of Binary Search: O(1)
// Binary Search uses a constant amount of extra space to store variables for iteration and comparison, regardless of the size of the sorted collection. It does not require any additional space that grows with the input size.
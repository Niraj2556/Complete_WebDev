// Working of Linear Search

// Start at the Beginning: Linear Search starts at the first element of the collection.

// Compare with Target: It compares the current element with the target value that needs to be found.

// Match Found: If the current element matches the target value, the search is successful, and the index of the element is returned.

// Move to the Next Element: If the current element does not match the target value, Linear Search moves to the next element in the collection.

// Repeat the Process: Steps 3 and 4 are repeated until a match is found or the entire collection has been traversed.

// End of Search: If the entire collection has been traversed without finding a match, Linear Search concludes that the target value is not present in the collection and returns a special value (e.g., -1) to indicate the absence of the target.



function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Match found, return the index
      }
    }
    return -1; // No match found, return -1
  }
  
  // Example usage
  var arr = [4, 2, 7, 1, 9];
  var target = 7;
  console.log(linearSearch(arr, target)); // Output: 2







//   Time Complexity of Linear Search

// Worst-case time complexity: O(n)

// Linear Search checks each element in the collection in the worst case, where n is the size of the collection.

// Average-case time complexity: O(n)
// On average, Linear Search needs to examine half of the elements in the collection to find the target value.

// Best-case time complexity: O(1)
// The best-case scenario occurs when the target value is found at the beginning of the collection. In this case, Linear Search performs only one comparison.


// Space Complexity of Linear Search
// Space complexity of Linear Search: O(1)
// Linear Search requires a constant amount of extra space to store variables for iteration and comparison, regardless of the size of the collection.
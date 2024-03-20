// Working of Selection Sort

// Identify the Smallest Element: Start at the beginning of the list. Identify the smallest element in the list.

// Swap the Smallest Element: Swap the smallest element found with the first element of the list. Now, the first element of the list is the smallest and can be considered as part of the sorted portion of the list.

// Move to the Next Element: Move one position to the right. This is the first element in the unsorted portion of the list.

// Identify the Smallest Element in the Unsorted Portion: From this position, identify the smallest element in the unsorted portion of the list.

// Swap the Smallest Element: Swap the smallest element found with the first element in the unsorted portion of the list. Now, this element can be considered as part of the sorted portion of the list.

// Repeat Until the List is Sorted: Keep repeating this process, each time starting from the next unsorted element, until you reach the end of the list. At this point, the list is fully sorted.


function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      // Assume the first element of the unsorted part is the smallest
      let min = i;
      for (let j = i + 1; j < len; j++) {
        // If any element is smaller, mark its position
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      // If the current first element isn't the smallest then swap it with the smallest
      if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
    }
    return arr;
  }
  
  // Example usage
  var arr = [3, 7, 5, 4, 2, 1, 6];
  console.log(selectionSort(arr));
  
  // Output
//   [1, 2, 3, 4, 5, 6, 7]




// Time Complexity of Selection Sort

// Worst-case time complexity: O(n^2)
// The worst-case scenario for selection sort occurs when the array is sorted in descending order and we want to sort it in ascending order. In this situation, the algorithm has to perform the maximum number of comparisons and swaps, leading to the highest possible computational complexity.

// Average-case time complexity: O(n^2)
// This situation arises when the elements within the array are in a jumbled order.

// Best-case time complexity: O(n^2)
// This happens when the input list is already sorted. In this case, selection sort only needs to pass through the list once to confirm that it is sorted.

// Space Complexity of Selection Sort
// Space complexity of Selection Sort: O(1)
// Selection sort is an in-place sorting algorithm that only uses a constant amount of extra space to hold the current minimum element and its index, regardless of the size of the input array.
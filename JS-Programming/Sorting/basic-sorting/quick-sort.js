// Working of Quick Sort

// Choose a Pivot: Select a pivot element from the list. The pivot can be any element, but it's common to choose the last element or a random element.

// Partitioning: Reorder the list so that all elements less than the pivot come before it, and all elements greater than the pivot come after it. The pivot should be in its final sorted position.

// Recursive Sort: Recursively apply the above two steps to the sublists formed by the partitioning. That is, select a pivot for each sublist and partition the sublist until all sublists are sorted.

// Combine the Sorted Sublists: Once all sublists are sorted, combine them to obtain the final sorted list.

// Repeat steps 1 to 4 until the entire list is sorted. The pivot selection and partitioning steps play a crucial role in the efficiency of the quicksort algorithm. By selecting a good pivot and efficiently partitioning the list, quicksort achieves a fast average-case time complexity.


function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage
  const arr = [5, 3, 6, 2, 10];
  console.log(quickSort(arr));
  
  // Output
  [2, 3, 5, 6, 10]



//   The quickSort function takes an array arr as input.
// If the array has one or fewer elements, it is already considered sorted and is returned as is.
// Otherwise, a pivot element is chosen. In this implementation, we select the last element of the array as the pivot.
// We create two empty arrays, left and right, to hold elements less than the pivot and elements greater than or equal to the pivot, respectively.
// We iterate through the array (excluding the pivot) and compare each element to the pivot. Elements smaller than the pivot are added to the left array, and elements greater than or equal to the pivot are added to the right array.
// We recursively apply the quickSort function to the left and right arrays, which sorts them independently.
// Finally, we combine the sorted left array, pivot, and sorted right array using the spread operator (...) to obtain the final sorted array.





// Time Complexity of Quick Sort

// Worst-case time complexity: O(n^2)
// The worst-case scenario for quicksort occurs when the pivot selection is poor, leading to highly unbalanced partitions. This can happen, for example, when the input array is already sorted or nearly sorted. In this case, the algorithm may make n recursive calls, each dealing with only one fewer element, resulting in a quadratic time complexity.

// Average-case time complexity: O(n log n)
// On average, quicksort has a time complexity of O(n log n). This is because, on average, the partitioning process splits the array into two roughly equal halves. Each recursive call deals with approximately half of the elements, leading to a balanced divide-and-conquer approach.

// Best-case time complexity: O(n log n)
// The best-case scenario for quicksort occurs when the pivot selection consistently divides the array into two equal or almost equal halves. This results in an efficient divide-and-conquer strategy, leading to a time complexity of O(n log n).


// Space Complexity of Quick Sort
// Space complexity of Quick Sort: O(log n)
// Quicksort generally has a space complexity of O(log n) due to the recursive calls and the partitioning process. This represents the maximum amount of space required by the call stack to handle the recursive calls. However, quicksort is an in-place sorting algorithm, meaning it does not require additional space proportional to the input size. It operates directly on the input array, using only a small amount of extra space for variables and temporary storage during the sorting process.
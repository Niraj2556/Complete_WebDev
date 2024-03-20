// Start with the Second Element: Begin with the second element of the list. Assume that the first element is already sorted.

// Compare and Insert: Compare the second element with the elements in the sorted portion of the list. Insert the second element at the correct position in the sorted portion, shifting other elements as needed.

// Move to the Next Element: Move one position to the right and consider it as the next element in the unsorted portion of the list.

// Compare and Insert Again: Compare the new element with the elements in the sorted portion of the list. Insert the element at its correct position in the sorted portion, shifting other elements if necessary.

// Repeat Until the List is Sorted: Continue this process, moving to the next unsorted element and inserting it into the correct position within the sorted portion, until all elements are sorted.

// List is Fully Sorted: Once all elements have been inserted into their correct positions, the list is fully sorted.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      arr[j + 1] = key;
    }
    
    return arr;
  }
  
  // Example usage
  let arr = [5, 3, 6, 2, 10];
  console.log(insertionSort(arr));
  
  // Output
//   [2, 3, 5, 6, 10]

// Time Complexity of Insertion Sort

// Worst-case time complexity: O(n^2)
// The worst-case scenario for insertion sort occurs when the array is sorted in reverse order, and we want to sort it in ascending order. In this case, each element needs to be compared and shifted to its correct position, resulting in a quadratic time complexity.


// Average-case time complexity: O(n^2)
// On average, insertion sort also requires quadratic time to sort the elements. This occurs when the input array is randomly shuffled or has no specific pattern.


// Best-case time complexity: O(n)
// The best-case scenario for insertion sort occurs when the input array is already sorted in ascending order. In this case, the algorithm makes a single pass through the array, comparing each element to its previous element and making no shifts. This results in a linear time complexity.



// Space Complexity of Insertion Sort
// Space complexity of Insertion Sort: O(1)
// Insertion sort is an in-place sorting algorithm, meaning it does not require additional space proportional to the input size. It performs sorting operations directly on the input array, using a constant amount of extra space for variables and temporary storage, regardless of the size of the input array.
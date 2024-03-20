// Working of Bubble Sort

// Compare the First Two Elements: Start at the beginning of the list. Compare the first and second elements. Switch their positions if the first element is greater than the second.

// Move to the Next Pair: Move one position to the right and compare the second and third elements. Again, if the second element is larger than the third, swap them.

// Continue Until the End of the List: Repeat this process for each pair of adjacent elements in the list, from the start to the end. At the end of this process, The largest item in the list will have moved to the end due to the "bubbling up" process finding its correct position.

// Repeat the Process: Now, start again from the beginning of the list. To continue, repeat the process of comparing neighboring pairs and switching them if they are not in the correct sequence. This time, since the largest element has already found its correct position, you need to go only up to the second last element.

// Continue Until the List is Sorted: Keep repeating this process, each time going up to one less element until you go through the list without making a single swap. At this point, the list is fully sorted.






function bubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Example usage
  var arr = [6, 2, 5, 3, 9];
  console.log(bubbleSort(arr));
  
  // Output
//   [2, 3, 5, 6, 9]




// Worst-case time complexity: O(n^2)
// This happens when the input list is in reverse order, meaning every pair of elements is swapped in every pass through the list.


// Average-case time complexity: O(n^2)
// On average, Bubble Sort will need to go through the entire array n times for each of the n elements.


// Best-case time complexity: O(n)
// This happens when the input list is already sorted. In this case, bubble sort only needs to pass through the list once to confirm that it is sorted.


// Space Complexity of Bubble Sort
// The space complexity of Bubble Sort: O(1)
// Bubble Sort is an in-place sorting algorithm, meaning it only uses a constant amount of extra space to rearrange the elements directly within the input array or list.
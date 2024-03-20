// Working of Merge Sort

// Divide: Divide the unsorted array into two equal-sized subarrays. This step is recursively applied until each subarray contains only one element. This can be done by repeatedly dividing the array in half.

// Merge: Merge the subarrays in a sorted manner to produce a new sorted array. This is done by comparing the elements from the two subarrays and selecting the smaller element to place in the merged array. Continue this process until all elements from both subarrays are merged into a single sorted array.

// Recursion: Recursively repeat the divide and merge steps on the subarrays until all subarrays have been sorted and merged into a single sorted array.
// Complete Merge: After merging all subarrays, the original unsorted array will be completely sorted.



function mergeSort(arr) {
    // Base case: If the array has only one element, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
  
    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(leftArr, rightArr) {
    const mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from the left and right arrays and merge them in sorted order
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        mergedArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        mergedArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add the remaining elements from the left or right array (if any)
    mergedArr.push(...leftArr.slice(leftIndex));
    mergedArr.push(...rightArr.slice(rightIndex));
  
    return mergedArr;
  }
  
  // Example usage
  const arr = [6, 5, 3, 1, 8, 7, 2, 4];
  const sortedArr = mergeSort(arr);
  console.log(sortedArr);
  
  // Output
//   [1, 2, 3, 4, 5, 6, 7, 8]



// Time Complexity of Merge Sort

// Worst-case time complexity: O(n log n)
// The worst-case scenario for merge sort occurs when we have to recursively split the array until we reach individual elements and then merge them back together. In this case, the time complexity is logarithmic due to the recursive nature of the algorithm and the merging step.


// Average-case time complexity: O(n log n)
// On average, merge sort also has a time complexity of n log n. It consistently divides the array into halves and performs merging operations. This results in efficient sorting even for large input sizes.

// Best-case time complexity: O(n log n)
// The best-case scenario for merge sort also has a time complexity of n log n. Regardless of the initial order of the elements, merge sort divides the array into halves until each subarray contains a single element and then merges them back together. This guarantees the time complexity of n log n.


// Space Complexity of Merge Sort
// Space complexity of Merge Sort: O(n)
// Merge sort requires additional space to store temporary arrays during the merging process. The space complexity is directly proportional to the size of the input array. However, the auxiliary space used is not dependent on the order of the elements or the input size. Therefore, the space complexity of merge sort is considered linear.
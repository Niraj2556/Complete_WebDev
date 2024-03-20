// Introduction to Bucket Sort
// Bucket Sort is a sorting algorithm that works by distributing elements of an input array into a finite number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm or by recursively applying the bucket sort algorithm. After sorting all the buckets, the elements are concatenated to obtain the sorted array.
// Working of Bucket Sort
// Create Buckets: Divide the range of the input values into a fixed number of equally sized intervals or buckets. Each bucket represents a subrange of values.
// Distribute Elements: Iterate over the input array and place each element into its corresponding bucket based on its value. The placement can be determined by dividing the element by the range of values and multiplying it by the number of buckets.
// Sort Buckets: Sort each bucket individually, either using another sorting algorithm or by recursively applying the bucket sort algorithm if the bucket size is large enough.
// Concatenate Buckets: After all the buckets are sorted, concatenate them in order to obtain the sorted array. The elements from each bucket are combined to form the final sorted array.
// notion image
// Implementation of Bucket Sort
// Here's a simple implementation of the Bucket Sort algorithm in JavaScript:


function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  // Find the minimum and maximum values in the input array
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // Determine the number of buckets needed
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  // Initialize the buckets
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // Distribute the elements into the buckets
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  // Sort each bucket and concatenate them
  const sortedArray = [];
  for (let i = 0; i < bucketCount; i++) {
    insertionSort(buckets[i]);
    sortedArray.push(...buckets[i]);
  }

  return sortedArray;
}

function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

// Example usage
var arr = [6, 2, 5, 3, 9];
console.log(bucketSort(arr));

// Output
[2, 3, 5, 6, 9]

// Explanation
// Time Complexity of Bucket Sort
// Average-case time complexity: O(n + k)
// The average-case time complexity of Bucket Sort depends on the average number of elements in each bucket. When the elements are evenly distributed across the buckets, the average time complexity becomes linear. Here, n represents the number of elements in the input array, and k represents the number of buckets.
// Worst-case time complexity: O(n^2)
// The worst-case time complexity of Bucket Sort occurs when all the elements fall into the same bucket. In such cases, the algorithm needs to use another sorting algorithm, such as insertion sort, to sort the elements within the bucket. This results in a quadratic time complexity.
// Space Complexity of Bucket Sort
// The space complexity of Bucket Sort: O(n + k)
// Bucket Sort requires additional space to store the buckets and their elements. The space complexity is dependent on the number of elements in the input array (n) and the number of buckets (k). In the worst case, when all the elements fall into the same bucket, the space complexity is O(n). However, on average, the space complexity is O(n + k).
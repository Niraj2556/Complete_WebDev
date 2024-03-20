// Introduction to Radix Sort
// Radix Sort is a non-comparative sorting algorithm that sorts elements by processing their digits or bits from the least significant digit to the most significant digit. It works based on the concept of grouping elements by their place value and repeatedly sorting them based on each digit or bit position. Radix Sort can be applied to both integer and string representations.
// Working of Radix Sort
// Choose a Radix: Radix Sort uses a radix, which represents the number of unique digits or bits in the elements being sorted. Common radices include base 10 (decimal) for integers and base 2 (binary) for bits.
// Grouping by Digits/Bits: Start by considering the least significant digit or bit of each element. Group the elements into buckets based on the value of this digit or bit. Elements with the same digit or bit value are placed in the same bucket.
// Sorting Each Bucket: Sort the elements within each bucket. This can be done using any stable sorting algorithm, such as counting sort, insertion sort, or recursively applying Radix Sort.
// Repeat for Each Digit/Bit: Move to the next significant digit or bit and repeat steps 2 and 3 until all digits or bits have been processed.
// Concatenating Buckets: After sorting the elements based on the most significant digit or bit, concatenate the elements from each bucket to obtain the fully sorted array.
// notion image
// Implementation of Radix Sort
// Here's a simple implementation of the Radix Sort algorithm in JavaScript:
function radixSort(arr) {
  const max = Math.max(...arr);
  let divisor = 1;

  while (divisor <= max) {
    arr = countingSort(arr, divisor);
    divisor *= 10;
  }

  return arr;
}

function countingSort(arr, divisor) {
  const count = new Array(10).fill(0);
  const n = arr.length;
  const output = new Array(n);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor((arr[i] / divisor) % 10);
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor((arr[i] / divisor) % 10);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }

  return arr;
}

// Example usage
var arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));

// Output
[2, 24, 45, 66, 75, 90, 170, 802]
// Explanation
// Time Complexity of Radix Sort
// Time complexity: O(d * (n + k))
// Here, n represents the number of elements in the input array, d represents the number of digits or bits in the maximum element, and k represents the range of values for each digit or bit (usually 10 or 2). The time complexity of Radix Sort is linear with respect to the number of elements and the number of digits or bits being processed.
// Space Complexity of Radix Sort
// The space complexity of Radix Sort: O(n + k)
// Radix Sort requires additional space to store the count array and the output array used in the counting sort step. The space complexity is dependent on the number of elements in the input array (n) and the range of values for each digit or bit (k).
 
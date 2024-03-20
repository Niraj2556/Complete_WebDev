// Write the JavaScript code that performs the given operations on the arr = [69, 92, 45, 7, 28] array and print the output of each operation:
// Displays the number at the third index of the array.
// Find if the array contains 7 or not.
// Adds 33 at the beginning of the array.
// Subtracts 5 from every number in the array using the map method.









// Solution
const arr = [69, 92, 45, 7, 28];

// 1. Display the number at the third index of the array.
const numberAtThirdIndex = arr[2];
console.log(numberAtThirdIndex);

// 2. Find if the array contains 7 or not.
const containsSeven = arr.includes(7);
console.log(containsSeven);

// 3. Adds 33 at the beginning of the array.
arr.unshift(33);
console.log(arr);

// 4. Subtracts 5 from every number in the array using the map method.
const subtractedArr = arr.map((num) => num - 5);
console.log(subtractedArr);
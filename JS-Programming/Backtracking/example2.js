// Function to find a subset of numbers that add up to a target sum
function findSubsetSum(arr, target) {
    let solution = [];
  
    // Recursive function to find a solution
    function backtrack(start, sum) {
      // Check if the solution is valid
      if (sum === target) {
        console.log(solution);
        return;
      }
  
      // Try all possible paths
      for (let i = start; i < arr.length; i++) {
        solution.push(arr[i]);
        backtrack(i + 1, sum + arr[i]);
        solution.pop();
      }
    }
  
    // Call the recursive function
    backtrack(0, 0);
  }
  
  // Test the function
  findSubsetSum([1, 2, 3, 4, 5], 7);
  
  // Output
  [1, 2, 4]
  [2, 5]
  [3, 4]




//   Explanation
// The findSubsetSum function takes an array arr and a target sum target as parameters.
// It initializes an empty solution array to store the current subset that adds up to the target sum.
// Inside the function, there is a recursive function named backtrack that takes two parameters: start and sum.
// If the current sum is equal to the target sum, a valid subset is found. The solution array is logged to the console.
// The function iterates over the remaining elements in the array, starting from the start index.
// For each element, it adds it to the solution array, updates the sum by adding the element's value, and recursively calls the backtrack function with the updated parameters.
// After the recursive call returns, the last element is removed from the solution array using solution.pop() to allow backtracking and explore other possibilities.
// The process continues until all possible subsets have been explored.
// Finally, the findSubsetSum function is called with the initial parameters, backtrack(0, 0), to start the backtracking algorithm.
// In the given example, the findSubsetSum function is called with an array [1, 2, 3, 4, 5] and a target sum of 7. The code will find all possible subsets from the array that add up to the target sum and log them to the console.
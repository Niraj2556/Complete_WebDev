// Evaluate and compare the efficiencies based on Execution Speed and Memory Usage of the two codes provided.


// Code 1
function factorialRecursive(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorialRecursive(num - 1);
    }
  }
  
  console.log(factorialRecursive(5)); // Output: 120
  
  
  // Code 2
  function factorialLoop(num) {
    let result = 1;
    
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  
    return result;
  }
  
  console.log(factorialLoop(5)); // Output: 120







//   Execution Speed:
// Code 1 (Recursive):

// Recursion involves the function calling itself, which can lead to a higher overhead compared to a loop.
// Recursive solutions may result in a deeper call stack, potentially causing a performance hit.
// Code 2 (Loop):

// Iterative solutions, like the one using a loop, often have a lower overhead compared to recursion.
// The loop iterates through the numbers, performing a simple multiplication in each iteration.
// Memory Usage:
// Code 1 (Recursive):

// Recursive solutions generally use the call stack to keep track of function calls.
// In this case, each recursive call adds a new frame to the call stack, potentially leading to a higher memory usage for large input values.
// Code 2 (Loop):

// The loop-based solution uses a single variable (result) to store intermediate results.
// It doesn't rely on the call stack to the same extent as the recursive solution, potentially resulting in lower memory usage.
// Conclusion:
// Execution Speed: The loop-based solution is likely to have better execution speed due to lower overhead compared to the recursive solution, especially for larger input values.

// Memory Usage: The loop-based solution is likely to have lower memory usage, as it doesn't rely on a growing call stack.

// In general, for simple operations like factorial calculation, a loop-based solution is often more efficient in terms of both execution speed and memory usage compared to a recursive solution.







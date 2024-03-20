// ques - Provide me with a JavaScript code example that illustrates the Promises using an optimal solution.

// Certainly! Promises in JavaScript are used for asynchronous programming, and they provide a clean way to handle asynchronous operations. Here's a simple example illustrating the use of Promises:


// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        // Simulate success
        resolve(data);
        // Simulate an error
        // reject(new Error('Failed to fetch data'));
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Using the Promise
  fetchData()
    .then((result) => {
      console.log(result.message);
      // You can perform additional operations with the result here
      return result; // Pass the result to the next then block
    })
    .then((result) => {
      console.log('Additional operation with the result:', result);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    })
    .finally(() => {
      console.log('Cleanup or finalization logic here');
    });

    


//     In this example:

// The fetchData function returns a Promise that resolves after a simulated asynchronous operation.
// The then method is used to handle the successful resolution of the Promise. You can chain multiple then blocks to perform sequential operations.
// The catch method is used to handle any errors that may occur during the asynchronous operation or in the preceding then blocks.
// The finally method allows you to specify code that should be executed regardless of whether the Promise was fulfilled or rejected.
// You can uncomment the reject line in the fetchData function to simulate an error scenario and see how the catch block is executed.
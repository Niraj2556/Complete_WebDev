// Error handling in Promise-based and async/await code involves capturing and handling errors that occur during asynchronous operations. Both approaches provide mechanisms for handling errors, but they differ slightly in their syntax and usage.




// Error Handling in Promises:

// In Promise-based code, you can handle errors using the " .catch() method ", which allows you to catch any rejected promises or thrown errors within the promise chain.
fetchData()
  .then(data => {
    // Process the data
  })
  .catch(error => {
    // Handle the error
  });
// In the example above, the .catch() block is used to handle any errors that occur during the promise chain. If any promise in the chain is rejected or an error is thrown, the control jumps to the nearest .catch() block, allowing you to handle the error.


// You can also handle errors within each .then() callback by returning a rejected promise:
fetchData()
  .then(data => {
    // Process the data
    if (data.error) {
      return Promise.reject(new Error('Data processing error'));
    }
    return data;
  })
  .catch(error => {
    // Handle the error
  });
// In this example, if the data processing encounters an error condition, the .then() callback returns a rejected promise using Promise.reject(), and the error is caught in the .catch() block.





// Error Handling in async/await:
// In async/await code, error handling is done using regular " try/catch blocks. "  You can wrap the awaited promise inside a try block and catch any errors that occur using the catch block.
async function fetchData() {
  try {
    const data = await fetch('<https://api.example.com/data>');
    // Process the data
  } catch (error) {
    // Handle the error
  }
}
// In the example above, the awaited promise (fetch()) is wrapped inside a try block, and any errors that occur during the execution are caught in the catch block.


// You can also use the throw statement to throw an error within an async function manually:
async function fetchData() {
  try {
    const data = await fetch('<https://api.example.com/data>');
    if (data.error) {
      throw new Error('Data processing error');
    }
    // Process the data
  } catch (error) {
    // Handle the error
  }
}
// If the data processing encounters an error condition, the throw statement is used to throw an error, which is then caught in the catch block.

// Both Promise-based code with .catch() and async/await code with try/catch blocks provide effective ways to handle errors in asynchronous operations. The choice between the two depends on personal preference and the specific requirements of your codebase.
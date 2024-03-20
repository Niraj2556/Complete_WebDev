// Promises are a powerful feature introduced in JavaScript to simplify asynchronous programming and improve code readability and maintainability. They provide a way to handle the result of an asynchronous operation (either success or failure) in a more structured and predictable manner.

// A promise represents the eventual completion or failure of an asynchronous operation and can be in one of three states:


//1.  Pending: The initial state of a promise, indicates that the asynchronous operation is still in progress and the final result is not yet available.

//2. Fulfilled: The state of a promise when the asynchronous operation is successfully completed, resulting in a value. Once fulfilled, the promise is considered "resolved."

//3. Rejected: The state of a promise when the asynchronous operation encounters an error or failure. Once rejected, the promise is considered "resolved."
// Here's an example that demonstrates the usage of promises:
// // Function that returns a promise


function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous request
    setTimeout(() => {
      const data = { message: 'Data fetched successfully' };
      resolve(data); // Resolve the promise with the fetched data
    //   reject(new Error('Failed to fetch data')); // Uncomment to simulate a rejection
    }, 2000);
  });
}

// Using the promise
fetchData('<https://api.example.com/data>')
  .then(data => {
    console.log(data.message);
  })
  .catch(error => {
    console.error(error);
  });


// In the example above, the fetchData function returns a promise that encapsulates the asynchronous request. Inside the promise constructor, the asynchronous operation is simulated using setTimeout. When the operation is complete, the resolve function is called with the fetched data to fulfill the promise. Uncommenting the reject line would simulate a rejection by passing an error object.


// To consume the promise, we use the " .then() method", which allows us to handle the fulfillment of the promise. Inside the .then() block, we log the message property of the resolved data. Additionally, we can use the .catch() method to handle any errors that occur during the promise execution.


// Promises provide several benefits:
// Improved Readability: Promises to use a chaining syntax that allows for a more linear and readable flow of asynchronous operations, avoiding excessive callback nesting.
// Error Handling: Promises have a built-in mechanism for handling errors through the .catch() method. Errors can be caught and handled at a single point in the promise chain.
// Composition: Promises can be easily composed and combined using methods like Promise.all() or Promise.race(), allowing for advanced handling of multiple asynchronous operations.
// Asynchronous Flow Control: Promises provide better control over the flow of asynchronous operations by using methods like .then(), allowing you to execute subsequent operations only when previous promises have been fulfilled.
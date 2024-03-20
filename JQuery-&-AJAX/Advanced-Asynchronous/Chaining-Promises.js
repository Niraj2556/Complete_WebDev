// Promise chaining is a technique in JavaScript that allows you to perform sequential asynchronous operations using promises. It provides a clean and readable way to handle a series of asynchronous tasks one after another. Promise chaining is achieved by returning a new promise from each .then() callback, allowing you to chain additional .then() or .catch() handlers.
// Here's an example that demonstrates promise chaining:
// Function that returns a promise to fetch data
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous request
    setTimeout(() => {
      const data = { message: 'Data fetched successfully' };
      resolve(data);
    }, 2000);
  });
}

// Chaining promises
fetchData('<https://api.example.com/data>')
  .then(data => {
    console.log(data.message);
    // Returning a new promise for the next operation
    return fetchData('<https://api.example.com/other-data>');
  })
  .then(otherData => {
    console.log(otherData.message);
    // Returning a new promise for the next operation
    return fetchData('<https://api.example.com/more-data>');
  })
  .then(moreData => {
    console.log(moreData.message);
  })
  .catch(error => {
    console.error(error);
  });
// In the example above, the fetchData function returns a promise that represents the asynchronous request to fetch data. Inside the promise chain, the first .then() callback is used to handle the resolved data from the initial request. It then returns another promise created by calling fetchData with a different URL.
// The subsequent .then() callbacks handle the resolved data from each promise in the chain, and each one returns a new promise for the next operation in the sequence.
// By chaining promises in this manner, you can ensure that each asynchronous operation is performed sequentially and that the subsequent operations depend on the results of the previous ones.
// If any promise in the chain is rejected, the control jumps to the nearest .catch() block, allowing you to handle the error. It's important to include a .catch() block at the end of the chain to capture any errors that occur in the promise chain.
// Promise chaining provides a clean and readable way to handle sequential asynchronous operations, avoiding callback hell and allowing for better error handling and composition of asynchronous code.
// Async/await is a syntactic feature introduced in ECMAScript 2017 (ES8) that provides a more readable and synchronous-like way of writing asynchronous code in JavaScript. It is built on top of promises and offers a simpler and cleaner alternative to promise chaining and nested callbacks.
// Here's an overview of the async/await syntax and its usage:

// Async Functions:
// An async function is declared using the async keyword before the function declaration. It allows you to use the await keyword inside the function body to pause the execution and wait for a promise to resolve before proceeding further.
async function fetchData() {
  // Asynchronous code using await
}


// Await Keyword:
// The await keyword is used to pause the execution of an async function until a promise is resolved. It can only be used inside an async function. When encountering an await expression, the function will be paused, and control will be handed back to the caller until the promise is fulfilled. The await keyword can be used with any promise-based function, including built-in methods like fetch() or custom functions that return promises.
async function fetchData() {
  const data = await fetch('<https://api.example.com/data>');
  console.log(data);
}


// Error Handling:
// Async functions handle promise rejections and thrown errors by automatically wrapping them in a rejected promise. You can use regular try/catch blocks to handle errors in an async function. If an error is thrown inside an async function, the promise will be rejected, and you can catch the error using a try/catch block or handle it using the .catch() method.
async function fetchData() {
  try {
    const response = await fetch('<https://api.example.com/data>');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


// Returning Promises:
// Async functions automatically wrap the returned value in a resolved promise. If you return a value from an async function, it will be equivalent to wrapping it in Promise.resolve(). If you throw an error inside an async function, it will be equivalent to returning a rejected promise.
async function fetchData() {
  return 'Data fetched successfully';
}

fetchData().then(result => {
  console.log(result); // Output: Data fetched successfully
});




// Async/await provides a more synchronous-like coding style for handling asynchronous operations, making code easier to read and reason about. It allows you to write code that appears to be sequential, even though it's executing asynchronously. However, it's important to note that async/await is still based on promises and doesn't eliminate the asynchronous nature of JavaScript.
// Async/await is widely supported in modern JavaScript environments and is commonly used for handling asynchronous operations, such as making HTTP requests, interacting with databases, or performing complex asynchronous tasks.
const readFileAsync = () => {
    return new Promise((resolve, reject) => {
      // Asynchronous operation to read a file
      // If successful, call resolve() with the result
      // If there's an error, call reject() with the error message
    });
  };
  
  readFileAsync()
    .then((result) => {
      // Handle the successful completion of the async operation
      console.log("File ready: " + result);
    })
    .catch((error) => {
      // Handle errors during the async operation
      console.log("Error reading file: " + error);
    });
    

    // Instead of nesting callbacks, promises allow us to chain callbacks using then() and handle errors using catch(). This makes the code more readable and manageable. Multiple callbacks can be added by chaining then() calls, ensuring they are executed in order. The catch() function is used to handle any errors that occur during the promise execution.
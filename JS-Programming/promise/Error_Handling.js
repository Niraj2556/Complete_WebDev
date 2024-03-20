// Error handling is crucial when dealing with rejected promises in async functions. When a promise is rejected, an error is thrown by the browser, and the code following that will not be executed. To properly handle errors, the try and catch block is used. It allows us to capture and handle errors gracefully.

// Here's an example that demonstrates error handling in async functions:

const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // Process the data
    return data;
  } catch (error) {
    // Handle the error
    console.log('Error fetching data:', error);
    // Optionally, throw the error again to propagate it
    throw error;
  }
};

// Calling the async function
fetchData()
  .then((data) => {
    // Use the fetched data
    console.log('Data:', data);
  })
  .catch((error) => {
    // Handle any errors that occur during promise execution
    console.log('Error in promise chain:', error);
  });


// In this example, the fetchData async function makes an HTTP request and processes the returned data. The try block wraps the code that might throw an error, such as a rejected promise. If an error occurs, it is caught by the catch block. Inside the catch block, we can handle the error, log it, and even propagate it further if needed.
// Using the try and catch block in async functions ensures that the execution of the script continues even if errors occur. It allows us to gracefully handle errors and keep the code running for the correct parts.
// In summary, the try and catch block is essential for error handling in async functions. It prevents the script from abruptly stopping due to errors, allowing us to handle and manage errors effectively.
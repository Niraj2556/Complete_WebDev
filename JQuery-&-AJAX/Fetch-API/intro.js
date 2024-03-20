// The Fetch API is a modern JavaScript API that provides an interface for making HTTP requests and handling responses. It simplifies the process of sending and receiving data over the network, replacing older techniques like XMLHttpRequest.
// Here's an overview of how to use the Fetch API:
// Making a GET Request:
// To make a GET request using the Fetch API, you can use the fetch() function, providing the URL of the resource you want to retrieve.
fetch('<https://api.example.com/data>')
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle any errors
  });

// The fetch() function returns a promise that resolves to the response of the HTTP request. You can use .then() to handle the response, which allows you to access information like the response headers and status. In the .catch() block, you can handle any errors that occur during the request.


// Handling the Response:
// Inside the .then() block, you can handle the response using various methods provided by the Response object. For example, you can use the .json() method to parse the response as JSON data.
fetch('<https://api.example.com/data>')
  .then(response => response.json())
  .then(data => {
    // Handle the parsed JSON data
  })
  .catch(error => {
    // Handle any errors
  });


// Making Other Types of Requests:
// By default, the Fetch API performs a GET request. However, you can also make other types of requests, such as POST, PUT, DELETE, etc., by providing additional options in the fetch() function.
fetch('<https://api.example.com/data>', {
  method: 'POST',
  body: JSON.stringify({ key: 'value' }),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle any errors
  });


// In the example above, we specify the method option as "POST" and provide a JSON payload in the body option. The headers option is used to set the content type as JSON.


// Handling Errors:
// The Fetch API does not reject the promise on HTTP error status codes (e.g., 404 or 500). It only rejects the promise if a network error occurs or the request is aborted. To handle HTTP errors, you need to check the response status in the .then() block and throw an error if necessary.


fetch('<https://api.example.com/data>')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data
  })
  .catch(error => {
    // Handle any errors
  });


// In the example above, we check the response.ok property is false, indicating an HTTP error. We throw an error with a custom message containing the response status.
// The Fetch API provides a flexible and powerful way to perform HTTP requests and handle responses in modern JavaScript applications. It supports various options, response-handling methods, and error-handling techniques, making it a preferred choice for many developers.
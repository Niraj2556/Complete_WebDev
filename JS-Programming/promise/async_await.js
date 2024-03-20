// Async functions are declared with the async keyword and allow the use of the await keyword inside them. They provide a more convenient way to write asynchronous code without explicitly configuring promise chains. The async keyword is used before a function declaration to indicate that it is an asynchronous function. It enables the use of the await keyword for promises.
// Here's an example to illustrate the use of async functions and await:



const fetchAsyncData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  
  const processData = async () => {
    const asyncData = await fetchAsyncData();
    // Process the fetched data
    console.log('Processed data:', asyncData);
  };
  
  processData();

//   In this example, the fetchAsyncData function is declared as an async function. It uses the await keyword to wait for the promise returned by the fetch API to resolve and retrieve the data. The processData function also uses await to wait for the data to be fetched before further processing it. The use of async and await allows for a more synchronous-like coding style while still handling asynchronous operations.
// Async functions and the await keyword make it easier to handle asynchronous operations by simulating synchronous behavior and allowing the code to pause execution until promises are resolved or rejected. They also simplify error handling by enabling the use of regular try/catch blocks.
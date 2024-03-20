// The Promise.all() method allows you to execute multiple promises concurrently and wait for all of them to resolve. It takes an array of promises as input and returns a new promise that resolves to an array of the resolved values in the same order.
const promise1 = fetch('<https://api.example.com/data1>');
const promise2 = fetch('<https://api.example.com/data2>');
const promise3 = fetch('<https://api.example.com/data3>');

Promise.all([promise1, promise2, promise3])
  .then(responses => {
    // Handle the resolved responses
  })
  .catch(error => {
    // Handle any errors
  });
// In this example, Promise.all() is used to execute three fetch requests concurrently. The resulting promise resolves with an array of responses. You can handle the resolved responses in the .then() block.







// ------------------------------------------------------- Async/await with Promise.all()----------------------------------------------


// You can also use async/await with Promise.all() to achieve parallel asynchronous operations in a more readable and synchronous-like manner.
async function fetchData() {
  try {
    const [response1, response2, response3] = await Promise.all([
      fetch('<https://api.example.com/data1>'),
      fetch('<https://api.example.com/data2>'),
      fetch('<https://api.example.com/data3>')
    ]);
    // Handle the resolved responses
  } catch (error) {
    // Handle any errors
  }
}

fetchData();
// In this example, Promise.all() is used with an array of fetch requests inside an async function. The await keyword pauses the execution until all the promises are resolved, and the resolved responses are destructured into separate variables for further processing.
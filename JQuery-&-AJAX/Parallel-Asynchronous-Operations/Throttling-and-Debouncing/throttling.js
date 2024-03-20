// Throttling and debouncing are two techniques used to control the rate at which a function is invoked during asynchronous operations, such as handling user input or making frequent API requests. These techniques help optimize performance and avoid excessive function calls.



// Throttling:
// Throttling limits the frequency of function invocation by ensuring that the function is called at a fixed interval, regardless of how many times it is triggered. It ensures that the function is invoked at regular intervals and prevents it from being called more frequently than the specified threshold.
function throttle(func, delay) {
  let timeoutId;

  return function() {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
        timeoutId = null;
      }, delay);
    }
  };
}

const throttledFn = throttle(apiCall, 500);

// Example usage
input.addEventListener('input', throttledFn);
// In this example, the throttle function is a higher-order function that takes a function func and a delay delay as parameters. It returns a new function that wraps the original function and ensures it is invoked at most once within the specified delay. The throttled function can be attached to event listeners to control the rate of function invocation.
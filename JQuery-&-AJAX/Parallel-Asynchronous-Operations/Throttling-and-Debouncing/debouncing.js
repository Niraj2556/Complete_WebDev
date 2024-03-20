// Debouncing:
// Debouncing delays the execution of a function until a certain period of inactivity has passed. It ensures that the function is invoked after a pause in activity rather than immediately after each event trigger. Debouncing is useful when you want to trigger a function only when the user has stopped interacting with an input or when a certain amount of time has passed since the last function call.
function debounce(func, delay) {
    let timeoutId;
  
    return function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }
  
  const debouncedFn = debounce(apiCall, 500);
  
  // Example usage
  input.addEventListener('input', debouncedFn);
  // In this example, the debounce function is a higher-order function that takes a function func and a delay delay as parameters. It returns a new function that wraps the original function and ensures it is invoked only after the specified delay has passed since the last function call. The debounced function can be attached to event listeners to trigger the function after a pause in activity.
  // Throttling and debouncing are useful techniques to prevent unnecessary or excessive function calls during asynchronous operations. Throttling ensures that a function is called at regular intervals while debouncing delays the function invocation until a pause in activity. These techniques can improve performance and responsiveness in scenarios where frequent function calls are not required.
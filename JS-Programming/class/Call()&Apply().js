// Call() & Apply()
// The call() and apply() methods are built-in JavaScript functions that allow you to invoke a function with a specified this value and arguments. They are often used to borrow methods from other objects, set a specific context for a function, or achieve dynamic function invocation.
// Here's how call() and apply() work:
// call() Method: The call() method invokes a function with a given this value and arguments provided individually.
function greet(message) {
  console.log(message + " " + this.name);
}

const person = { name: "Alice" };

greet.call(person, "Hello"); // Output: Hello Alice
// In this example, the call() method is used to invoke the greet function with person as the this value and "Hello" as the argument.
// apply() Method: The apply() method is similar to call(), but it accepts arguments as an array.
function greet(message) {
  console.log(message + " " + this.name);
}

// const person = { name: "Alice" };

greet.apply(person, ["Hi"]); // Output: Hi Alice
// Here, apply() is used to achieve the same result as call() but with an array of arguments.
// // Both methods allow you to set a specific this context for a function. The primary difference between call() and apply() is how you pass arguments:
// call(thisArg, arg1, arg2, ...) - You pass arguments individually.
// apply(thisArg, [arg1, arg2, ...]) - You pass arguments as an array.
// Here are a couple more examples to illustrate their usage:
function sum(a, b) {
  return a + b;
}

console.log(sum.call(null, 5, 10)); // Output: 15
console.log(sum.apply(null, [5, 10])); // Output: 15
// Both call() and apply() are particularly useful when working with functions that are not directly attached to an object, as they allow you to specify the context explicitly. The choice between call() and apply() depends on whether you prefer passing arguments individually or as an array.





// The primary difference between call() and apply() is how you pass arguments:
// call(thisArg, arg1, arg2, ...) - You pass arguments individually.
// apply(thisArg, [arg1, arg2, ...]) - You pass arguments as an array
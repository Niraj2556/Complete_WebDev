// Bind()
// The bind() method in JavaScript is used to create a new function that, when invoked, has a specific this value set explicitly. It allows you to establish a fixed context for a function, regardless of how it's called. The bind() method does not immediately invoke the function; instead, it returns a new function with the specified this value and, optionally, pre-bound arguments.
// The syntax for using the bind() method is as follows:
// const newFunction = originalFunction.bind(thisArg[, arg1[, arg2[, ...]]]);
// Here's a breakdown of the parameters:
// originalFunction: The function for which you want to set the this value.
// thisArg: The value to be used as the this value when the new function is called.
// arg1, arg2, etc.: Optional arguments that will be prepended to the arguments passed to the new function.
// Here's an example to illustrate how bind() works:
const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const greeting = function(greetMessage) {
  console.log(greetMessage + " " + this.getFullName());
};

const boundGreeting = greeting.bind(person, "Hello");

boundGreeting(); 
// Output: Hello John Doe
// In this example, the bind() method is used to create a new function boundGreeting from the greeting function. The this value of boundGreeting is explicitly set to the person object, and the "Hello" argument is pre-bound. When boundGreeting() is called, it outputs "Hello John Doe".
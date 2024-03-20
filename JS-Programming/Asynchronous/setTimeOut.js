function sayHello(name, message) {
    console.log(`Hello, ${name}! ${message}`);
  }
  
  setTimeout(sayHello, 3000, "John", "How are you?");
  
  // Output
//   Hello, John! How are you?     // After 3 seconds
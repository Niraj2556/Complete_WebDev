// Global Context:
//  In the global scope (outside of any function or object), this refers to the global object. In a web browser environment, the global object is usually the window object.
// console.log(this === window); 
// Output: true





// Function Context: 
// When this is used within a regular function (not an arrow function), its value depends on how the function is called.
// In a regular standalone function call, this refers to the global object (window in a browser).
// function printThis() {
//     console.log(this);
//   }

//   printThis(); 
  // Output: window (in a browser)


//   In a method of an object, this refers to the object itself.
//   const obj = {
//     prop: "Hello",
//     method: function() {
//       console.log(this.prop);
//     }
//   };
  
//   obj.method(); // Output: Hello









// Method Invocation:
//  When a function is called as a method of an object, this refers to the object that the method is a property of.
// const obj = {
//   prop: "Hello",
//   method: function() {
//     console.log(this.prop);
//   }
// };

// obj.method(); // Output: Hello









// Constructor Invocation:
//  When a function is used as a constructor to create new objects (using the new keyword), this refers to the newly created instance.
// function Person(name) {
//   this.name = name;
// }

// const person = new Person("Alice");
// console.log(person.name); // Output: Alice









// Arrow Functions:
// Arrow functions (() => {}) behave differently regarding the this keyword. They capture the value of this from their surrounding context and do not have their own this binding.
const obj = {
  prop: "Hello",
  method: function() {
    const innerFunc = () => {
      console.log(this.prop);
    };
    innerFunc();
  }
};

obj.method(); // Output: Hello
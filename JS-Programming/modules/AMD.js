// AMD: AMD(Asynchronous Module Definition) is a popular module format used in asynchronous environments, such as browsers, where modules are loaded asynchronously using define and require functions. AMD is particularly useful for browser-based applications where modules can be loaded dynamically as needed.
// // Module using AMD
define(['dependency1', 'dependency2'], function(dep1, dep2) {
  function privateFunction() {
    console.log("This is private");
  }

  return {
    publicFunction: function() {
      console.log("This is public");
      dep1.someFunction();
      dep2.anotherFunction();
      privateFunction();
    }
  };
});

// Usage of the module
require(['myModule'], function(module) {
  module.publicFunction();
});
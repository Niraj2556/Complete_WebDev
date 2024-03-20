// CommonJS: CommonJS is a module system used in Node.js and server-side environments, where modules are loaded synchronously using require and are cached after the first load.
// Module using CommonJS
const dependency1 = require('dependency1');
const dependency2 = require('dependency2');

function privateFunction() {
  console.log("This is private");
}

module.exports = {
  publicFunction: function() {
    console.log("This is public");
    dependency1.someFunction();
    dependency2.anotherFunction();
    privateFunction();
  }
};
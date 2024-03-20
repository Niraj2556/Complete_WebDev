// JavaScript Prototype
// In JavaScript, the prototype is a fundamental concept that plays a crucial role in object-oriented programming and inheritance. It allows you to add properties and methods to objects, which can then be inherited by other objects. Understanding prototypes is essential for creating efficient and maintainable code.
// Here's an explanation of JavaScript prototypes:
// Prototype Chain: Each object in JavaScript has an associated prototype, which is another object. This creates a prototype chain, where objects inherit properties and methods from their prototype. When you access a property or method on an object, JavaScript first checks if the object itself has that property. If not, it looks up the prototype chain until it finds the property or reaches the end of the chain (usually Object.prototype).
// prototype Property: Constructor functions and classes have a special property called prototype. This property is used to add properties and methods that will be inherited by instances created from the constructor function or class.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person = new Person("Alice");
person.greet(); // Output: Hello, my name is Alice
// Inheritance: Prototypes enable inheritance, allowing you to create objects that inherit properties and methods from other objects.
function Animal() {}
Animal.prototype.eat = function() {
  console.log("Animal is eating.");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {
  console.log("Dog is barking.");
};

const dog = new Dog();
dog.eat(); // Output: Animal is eating.
dog.bark(); // Output: Dog is barking.
// The prototype is a powerful concept that forms the basis for object-oriented programming and inheritance in JavaScript. It allows you to create reusable code and build complex object relationships efficiently.
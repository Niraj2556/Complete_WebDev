// Getters and setters are a feature in JavaScript that allow you to define custom behavior when reading (getting) or writing (setting) the value of an object property. They provide a way to encapsulate data and perform additional actions when accessing or modifying object properties. Getters and setters are part of the ECMAScript 5 (ES5) standard and can be used with regular object literals, as well as with classes in modern JavaScript.
// Here's how you define getters and setters:
// Getter:
// A getter is a function that is defined as a property of an object using the get keyword.
// It is used to retrieve the value of the property when the property is accessed.
// The syntax for defining a getter is: get propertyName() { /* getter logic */ }
// Example:
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName);

// // Output
// "John Doe"

// In the example above, we define a getter for the fullName property of the person object. When we access person.fullName, the getter function is automatically invoked, and it returns the concatenation of firstName and lastName.









// Setter:
// A setter is a function that is defined as a property of an object using the set keyword.
// It is used to set the value of the property when the property is modified.
// The syntax for defining a setter is: set propertyName(value) { /* setter logic */ }
// Example:

const Person = {
  _age: 30,
  set age(newAge) {
    if (newAge >= 0 && newAge <= 120) {
      this._age = newAge;
    } else {
      console.log("Invalid age value");
    }
  }
};

Person.age = 25; // Sets the age property using the setter
console.log(Person._age);

person.age = 150; // Attempts to set an invalid age (will be rejected by the setter)
console.log(Person._age);

// Output
// 25
// 25
// In this example, we define a setter for the age property of the person object. The setter validates the new age value and only updates the _age property if the new age is within a valid range (0 to 120). If the new age is invalid, a message is logged to the console, and the age remains unchanged.
// Getters and setters are powerful tools for controlling access to object properties, enforcing data validation, and implementing computed properties in JavaScript objects. They provide a way to abstract away the internal representation of an object and offer a cleaner and more controlled interface for working with object data.
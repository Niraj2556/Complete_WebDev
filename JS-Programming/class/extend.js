// `extends` keyword
// In JavaScript, the extends keyword is used to create a new class that inherits properties and methods from an existing class. This is a fundamental feature of class-based inheritance and object-oriented programming. The class that is being extended is often referred to as the "superclass" or "parent class," while the new class is the "subclass" or "child class." The extends keyword simplifies the process of creating subclasses and helps organize and reuse code.
// Here's the basic syntax for using the extends keyword to create a subclass:
// class ParentClass {
//   // properties and methods of the parent class
// }

// class ChildClass extends ParentClass {
//   // properties and methods of the child class
// }
// Here's an example to illustrate the use of the extends keyword:








class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Buddy", "Labrador");
dog.eat(); 
// Output: Buddy is eating.
dog.bark(); 
// Output: Buddy is barking.


// In this example, the Dog class extends the Animal class using the extends keyword. The super(name) call in the Dog constructor refers to the constructor of the parent class (Animal) and initializes the name property using the parent's constructor. The bark method is specific to the Dog class and is not present in the Animal class.
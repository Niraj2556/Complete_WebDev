// Provide me with a JavaScript code example that illustrates the Getters and Setters using an optimal solution.



class Circle {
    constructor(radius) {
      this._radius = radius; // Using underscore convention to indicate it's a private property
    }
  
    // Getter for radius
    get radius() {
      return this._radius;
    }
  
    // Setter for radius with validation
    set radius(newRadius) {
      if (newRadius > 0) {
        this._radius = newRadius;
      } else {
        console.log("Radius must be greater than 0");
      }
    }
  
    // Getter for diameter
    get diameter() {
      return this._radius * 2;
    }
  
    // Getter for area
    get area() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  }
  
  // Example usage
  const myCircle = new Circle(5);
  
  console.log("Radius:", myCircle.radius); // Using the getter
  console.log("Diameter:", myCircle.diameter); // Using the getter
  console.log("Area:", myCircle.area); // Using the getter
  
  myCircle.radius = 8; // Using the setter
  console.log("Updated Radius:", myCircle.radius); // Using the getter
  
  myCircle.radius = -3; // Trying to set an invalid value

  


//   In this example, the Circle class has a private property _radius and defines three getters (radius, diameter, and area) and a setter (radius). The getter methods allow you to retrieve information about the circle, and the setter method ensures that the new radius is a valid, positive value before updating the _radius property.
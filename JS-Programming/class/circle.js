function main() {
    var radius = parseInt(readLine());

	// Create an instance of Circle
	const circle = new Circle(radius);

	// Compute and print the area
	console.log("Area:", circle.getArea());

	// Compute and print the circumference
	console.log("Circumference:", circle.getCircumference());
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
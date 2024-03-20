function main() {
    // var width = parseInt(readLine());
    // var height = parseInt(readLine());
    var width = 4;
    var height = 7;
    // Create an instance of Rectangle
    const rectangle = new Rectangle(width, height);
  
    // Compute and print the area
    console.log(rectangle.getArea());
  
    // Compute and print the perimeter
    console.log(rectangle.getPerimeter());
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
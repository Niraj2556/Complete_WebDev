// Reusability: Helper functions can be used in multiple places within a program or across different projects, promoting code reuse and reducing redundancy.
// Let's say you have a function called calculateArea that calculates the area of a rectangle. You can call this function multiple times with different parameters to calculate the area of different rectangles:

function calculateArea(length, width) {
  return length * width;
}

let area1 = calculateArea(5, 10); // returns 50
let area2 = calculateArea(3, 7); // returns 21
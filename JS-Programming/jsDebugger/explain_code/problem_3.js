// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 7)); // Output: 3
const numbers = [1, 2, 3, 4, 5];
const sum = (...numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

console.log(sum(...numbers)); // Output: 15
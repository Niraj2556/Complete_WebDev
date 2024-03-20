// Calculate the sum of numbers in an array and print the result
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  const data = [2, 4, 6, 8, 10];
  const result = calculateSum(data);
  console.log(`The sum is: ${result}`);
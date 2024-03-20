// Calculate the average of numbers in an array and print the result.
function calculateAverage(numbers) {
    let total = 0;
    let count = 0;
    for (let i = 0; i <= numbers.length -1; i++) {
      total += numbers[i];
      count++;
    }
    const average = total / count;
    return average;
  }
  
  const data = [5, 7, 9, 11, 13];
  const result = calculateAverage(data);
  console.log(`The average is: ${result}`);
// Filter out even numbers from an array and print the resulting array.
function filterEvenNumbers(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = filterEvenNumbers(data);
  console.log(`Even numbers: ${result}`);
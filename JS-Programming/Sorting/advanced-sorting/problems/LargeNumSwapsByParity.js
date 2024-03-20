// Largest Number After Digit Swaps by Parity
// You have to write a code that returns the largest possible value of num after any number of swaps.
// Example 1:
// Input:  1234

// Output: 3412
// Explanation:
// Swap the digit 3 with the digit 1, this results in the number 3214. Swap the digit 2 with the digit 4, this results in the number 3412. Note that there may be other sequences of swaps, but it can be shown that 3412 is the largest possible number. Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.
// Example 2:
// Input:  6587

// Output: 8765
// Explanation:
// Swap the digit 8 with the digit 6, this results in the number 85675. Swap the first digit 5 with the digit 7, this results in the number 87655. Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.




function main() {
    var num = parseInt(readLine());
    console.log(largestInteger(num));
  }
  
  var largestInteger = function(num) {
    num = num.toString()
    let even = []
    let odd = []
    let result = ''
  
    for (let i = 0; i < num.length; i++) {
      num[i] % 2 === 0 ? even.push(num[i]) : odd.push(num[i])
    }
  
    if (even.length > 1) even.sort((a, b) => (+a) - (+b))
    if (odd.length > 1) odd.sort((a, b) => (+a) - (+b))
  
    for (let i = 0; i < num.length; i++) {
      if (+num[i] % 2 === 0 && even.length) {
        result += even.pop()
      } else if (+num[i] % 2 !== 0 && odd.length) {
        result += odd.pop()
      } else {
        result += num[i]
      }
    }
  
    return +result;
  };
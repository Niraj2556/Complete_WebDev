// Calculate the average of numbers in an array and print the result.
 function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  const text = "Hello, world!";
  const reversedText = reverseString(text);
  console.log(reversedText);
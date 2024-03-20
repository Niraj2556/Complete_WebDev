// Input: The price of the product is $250.50
// Output: [250.50]

function main() {
    var str = readLine();
    console.log(extractNumbers(str));
  }
  
  function extractNumbers(str) {
    const regex = /\d+(\.\d+)?/g;
    return str.match(regex).map(Number);
  }
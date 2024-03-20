// Input: Hello, World!
// Output: Hll, Wrld!

function main() {
    var str = readLine();
    console.log(removeVowels(str));
  }
  
  function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }
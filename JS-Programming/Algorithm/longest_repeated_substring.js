function main() {
    var str = readLine();
    console.log(findLongestRepeatedSubstring(str));
  }
  
  function findLongestRepeatedSubstring(str) {
    let maxLength = 0;
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        let k = 0;
        while (str[i + k] === str[j + k]) {
          k++;
        }
  
        if (k > maxLength) {
          maxLength = k;
          result = str.substring(i, i + maxLength);
        }
      }
    }
  
    return result;
  }
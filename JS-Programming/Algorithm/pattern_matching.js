function main() {
    var str = readLine();
    var pattern = readLine();
    console.log(patternMatching(str, pattern));
  }
  
  function patternMatching(str, pattern) {
    if (pattern.length > str.length) {
      return false;
    }
  
    for (let i = 0; i <= str.length - pattern.length; i++) {
      let j;
      for (j = 0; j < pattern.length; j++) {
        if (str[i + j] !== pattern[j]) {
          break;
        }
      }
      if (j === pattern.length) {
        return true;
      }
    }
  
    return false;
  }
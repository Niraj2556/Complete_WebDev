function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  }
// Input: https://www.example.com/
// Output: true

function main() {
    var url = readLine();
    console.log(isValidURL(url));
  }
  
  function isValidURL(url) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  }
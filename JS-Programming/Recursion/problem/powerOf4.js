// Do not remove nor make any changes in  main() function
function main() {
    var n = parseInt(readLine());
    console.log(isPowerOfFour(n));
}
var isPowerOfFour = function(n) {
   if (n <= 0) {
        return false;
    }
    
    while (n % 4 === 0) {
        n /= 4;
    }

    return n === 1;
};
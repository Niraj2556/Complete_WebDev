function main() {
    var n = parseInt(readLine());
    console.log(isPowerOfTwo(n));
}
var isPowerOfTwo = function(n) {
   if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;     
};
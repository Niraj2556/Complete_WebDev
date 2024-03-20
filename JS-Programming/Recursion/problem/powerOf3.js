function main() {
    var n = parseInt(readLine());
    console.log(isPowerOfThree(n));
}
const isPowerOfThree = function(n){
    if (n <= 0) {
        return false;
    }

    while (n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
    
};
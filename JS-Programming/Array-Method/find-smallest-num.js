function main() {
    var nums1 = readLine().split(" ").map(x => parseInt(x));
    var nums2 = readLine().split(" ").map(x => parseInt(x));
    console.log(minNumber(nums1, nums2));
}
var minNumber = function(nums1, nums2) {
     let both = [];
    for (const x of nums1) {
        if (nums2.includes(x)) both.push(x);
    }
    if (both.length > 0) return Math.min(...both);
    let pa = Math.min(...nums1), pb = Math.min(...nums2);
    return pa < pb ? pa + "" + pb : pb + "" + pa; 
};
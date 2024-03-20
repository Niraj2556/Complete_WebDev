// function calculateBMI(weight, height) {
//     // Write your code here
//     const bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 || bmi < 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 || bmi < 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }





// Here is the Function definition
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Example-1, as showed in problem statement
const weight1 = 65; // in kilograms
const height1 = 1.75; // in meters
const classification1 = calculateBMI(weight1, height1);
console.log("Example 1 - BMI Classification:", classification1);


// Example-2, as showed in problem statement
const weight2 = 45; // in kilograms
const height2 = 1.60; // in meters
const classification2 = calculateBMI(weight2, height2);
console.log("Example 2 - BMI Classification:", classification2);


//BMI
//Error
// The error in the original code lies in the conditions used to check the BMI ranges. The logical operators used (|| and &&) do not properly separate the ranges, causing overlaps and incorrect classifications. The conditions should be adjusted to ensure that each range is checked accurately and independently.


// Time Complexity:

// The function consists of simple arithmetic operations (division and multiplication) and conditional statements.
// These operations have constant time complexity, denoted as O(1).
// Therefore, the time complexity of the function is O(1), as it does not depend on the size of any input.
// Space Complexity:

// The function only uses a constant amount of additional memory for storing variables and returning the result.
// Regardless of the input values, the space complexity remains constant.
// Therefore, the space complexity of the function is O(1), indicating constant space usage.








// BMI-calculate
// Vowel Count
// Temperature Converter
// Longest Word Length
// Shopping Cart Total
// Character Reversal
// Check Sign

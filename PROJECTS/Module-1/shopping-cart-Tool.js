
// Example 1:
// const cart1 = [
//   { name: "Laptop", price: 1000, quantity: 1 },
//   { name: "Phone", price: 500, quantity: 2 },
//   { name: "Headphones", price: 50, quantity: 4 },
// ];

// Input: cart1
// Output: 2200
// Explanation: price * quantity of all products = 1000 + 2 * 500 + 4 * 50 = 2200
// Example 2:
// const cart2 = [
//   { name: "Fruits", price: 10, quantity: 5 },
//   { name: "Vegetables", price: 8, quantity: 3 },
//   { name: "Dairy", price: 5, quantity: 2 },
//   { name: "Snacks", price: 3, quantity: 10 },
// ];

// Input: cart2
// Output: 114
// Explanation: price * quantity of all products = (5 * 10 + 3 * 8 + 2 * 5 + 10 * 3) = 114
 
// Approach 1:
function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

// Do not modify the below lines
module.exports = { calculateTotal };
 



// Approach 2: Rewrite the code using reduce() method.

function calculateTotal(cart) {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
}

// Do not modify the below lines
module.exports = { calculateTotal };



// Shopping-cart-tool 
// Certainly! Here's a breakdown of the code:

// The calculateTotal function takes an array of product objects (cart) as input.
// It uses the reduce() method to iterate over each product in the cart array.
// In each iteration, it calculates the total cost of the current product by multiplying its price with its quantity.
// This product cost is added to the accumulator (total).
// Finally, the function returns the accumulated total, which represents the total cost of all products in the shopping cart.
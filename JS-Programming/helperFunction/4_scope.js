// Scope: Functions have their own scope, which means they can access and modify variables within their scope, but not outside of it. This can help prevent naming collisions and make your code more secure.
// Let's say you have a function called calculateTotal that calculates the total cost of an order. Within this function, you define a variable called subtotal. This variable is only accessible within the scope of the function, and cannot be accessed or modified from outside of it:
function calculateTotal(items) {
  let subtotal = 0;
  for (let item of items) {
    subtotal += item.price;
  }
  let tax = subtotal * 0.1;
  let total = subtotal + tax;
  return total;
}

let myItems = [
  { name: 'Widget', price: 9.99 },
  { name: 'Gadget', price: 14.99 },
  { name: 'Doohickey', price: 4.99 }
];

let myTotal = calculateTotal(myItems); // returns 31.47
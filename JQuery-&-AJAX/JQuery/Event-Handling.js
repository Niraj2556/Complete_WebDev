// Attaching Event Listeners:


// To attach an event listener, you select the target element(s) and use the on() method or a specific event-specific method provided by jQuery.
// Example using on() method:
$('button').on('click', function() {
  // Event handling code
});
// Example using specific event methods:
$('button').click(function() {
  // Event handling code
});




// Event Object:
// When an event occurs, jQuery provides an event object that contains information about the event and its properties. This object is automatically passed as an argument to the event handler function.
// Example accessing event properties:
$('button').click(function(event) {
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
});





// Event Delegation:
// Event delegation allows you to attach an event listener to a parent element and handle events for its child elements. This is useful when you dynamically add or remove child elements.
// Example using event delegation:
$('#parent').on('click', 'button', function() {
  // Event handling code
});
// Preventing Default Behavior:
// You can prevent the default behavior of an event, such as submitting a form or following a link, using the preventDefault() method.
// Example preventing default behavior:
$('a').click(function(event) {
  event.preventDefault();
});





// Event Propagation:
// Events in HTML can propagate through multiple elements (event bubbling). You can stop event propagation to prevent it from reaching parent elements using the stopPropagation() method.
// Example stopping event propagation:
$('button').click(function(event) {
  event.stopPropagation();
});






// Event Shortcut Methods:
// jQuery provides shortcut methods for common events such as click(), hover(), submit(), etc. These methods simplify event handling code.
// Example using event shortcut methods:
$('button').click(function() {
  // Event handling code
});

$('input').submit(function() {
  // Event handling code
});






// Event Chaining:
// jQuery allows chaining multiple methods together to perform consecutive operations on selected elements.
// Example using event chaining:
$('button').click(function() {
  $(this).addClass('active').text('Clicked');
});
// These are some of the fundamental concepts and techniques for event handling in jQuery. By attaching event listeners, accessing event properties, using event delegation, and utilizing jQuery's event-related methods, you can create interactive and dynamic web pages.
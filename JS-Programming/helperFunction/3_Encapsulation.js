// Encapsulation: They allow you to encapsulate specific logic or operations, hiding the implementation details from the main functions, and promoting abstraction.
// Let's say you have a function called toggleButton that toggles the state of a button between on and off. Instead of manipulating the button directly in your code, you can encapsulate this behavior in a function and call it whenever you need to toggle the button:


function toggleButton(button) {
  if (button.getAttribute('data-state') === 'on') {
    button.setAttribute('data-state', 'off');
    button.textContent = 'Off';
  } else {
    button.setAttribute('data-state', 'on');
    button.textContent = 'On';
  }
}

let myButton = document.querySelector('#my-button');
toggleButton(myButton); // toggles button state

// createElement()

// The createElement() method is a built-in function in JavaScript that allows you to dynamically create a new DOM element. It is part of the Document Object Model (DOM) API and is available on the document object.
// The syntax for using createElement() is as follows:

// document.createElement(tagName)





// Create a new div element
var newDiv = document.createElement("div");

// Modify the properties of the new div
newDiv.textContent = "This is a dynamically created div.";
newDiv.style.backgroundColor = "blue";

// Append the new div to the document
document.body.appendChild(newDiv);
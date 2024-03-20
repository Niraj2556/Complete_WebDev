// appendChild()
// The appendChild() method in JavaScript is used to add a new child node to an existing parent node in the DOM (Document Object Model). It appends the specified node as the last child of the target parent node.
// The syntax for using appendChild() is as follows:
parentNode.appendChild(childNode);
// Here, parentNode is the existing node to which you want to append the childNode, which is the new node you want to add.
// When appendChild() is called, the following happens:
// The childNode is detached from its current position in the DOM, if it exists elsewhere.
// The childNode is then added as the last child of the parentNode.
// The DOM structure is updated to reflect the new relationship between the parent and child nodes.
// It's important to note that if the childNode already exists in the DOM, it will be moved to the new position as the last child of the parentNode.



// Here's an example that demonstrates the usage of appendChild():
// Create a new paragraph element
var paragraph = document.createElement('p');
paragraph.textContent = 'This is a new paragraph.';

// Find the parent element
var parentElement = document.getElementById('myDiv');

// Append the paragraph as the last child of the parent element
parentElement.appendChild(paragraph)
// removeChild()
// The removeChild() method in JavaScript is used to remove a specified child node from its parent node in the DOM (Document Object Model). It allows you to dynamically remove elements from the HTML structure. The removeChild() method is called on the parent node to which the child node belongs. It takes the child node as an argument and removes it from the parent node, effectively removing it from the DOM tree. The removed child node is no longer accessible or part of the DOM structure.
// Example 1:
parentNode.removeChild(childNode);
// parentNode is the parent node from which the child node will be removed. childNode is the specific child node that needs to be removed from the parent node.


// Example 2:
// HTML: <div id="parent"><p id="child">This is a child element.</p></div>

var parent = document.getElementById('parent');
var child = document.getElementById('child');

parent.removeChild(child);
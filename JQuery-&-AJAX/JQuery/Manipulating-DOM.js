// text(): This method gets or sets the text content of an element. When used without any arguments, it returns the text content of the selected element. You can also pass a string as an argument to set the text content of the selected element.
// Example:
// Get the text content of an element
var content = $('p').text();
console.log(content);
// Set the text content of an element
$('p').text('New text content');



// html(): This method gets or sets the HTML content of an element. Similar to the text() method, it can be used to both retrieve and update the content of elements.
// Example:
// Get the HTML content of an element
var content = $('#myElement').html();
console.log(content);

// Set the HTML content of an element
$('#myElement').html('<p>New HTML content</p>');



// append(): This method appends content to the end of the selected element. It can be used to add new elements, text, or HTML content as the last child of the selected element.
// Example:
// Append a new paragraph element to an existing element
$('#myElement').append('<p>Appended content</p>');



// prepend(): This method works similar to append(), but it adds content as the first child of the selected element.
// Example:
// Prepend a new paragraph element to an existing element
$('#myElement').prepend('<p>Prepended content</p>');



// after(): This method inserts content after the selected element.
// Example:
// Insert a new paragraph element after an existing element
$('#myElement').after('<p>Inserted content</p>');



// before(): This method inserts content before the selected element.
// Example:
// Insert a new paragraph element before an existing element
$('#myElement').before('<p>Inserted content</p>');


// These methods provide flexible ways to modify the content of HTML elements using jQuery. Whether you want to update the text, add new elements, or insert content around existing elements, these methods give you the necessary tools to manipulate the element content dynamically.
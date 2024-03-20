// jQuery Selectors:

// Element Selector: Selects elements based on their tag name.
// Syntax: $('elementName')
// Example: 
$('p') 

// selects all <p> elements.


// ID Selector: Selects an element with a specific ID attribute.
// Syntax: $('#idName')
// Example: 
$('#myElement') 
// selects the element with id="myElement".


// Class Selector: Selects elements based on their class attribute.
// Syntax: $('.className')
// Example: 
$('.myClass') 
// selects all elements with class="myClass".


// Attribute Selector: Selects elements based on their attribute values.
// Syntax: $('element[attribute="value"]')
// Example: 
$('input[type="text"]') 
// selects all <input> elements with type="text".


// Descendant Selector: Selects elements that are descendants of another element.
// Syntax: $('parentElement descendantElement')
// Example: 
$('div p') 
// selects all <p> elements that are descendants of <div> elements.


// Child Selector: Selects direct children of an element.
// Syntax: $('parentElement > childElement')
// Example: 
$('ul > li') 
// selects all <li> elements that are direct children of <ul> elements.


// :first Selector: Selects the first element that matches the selector.
// Syntax: $('selector:first')
// Example: 
$('p:first') 
// selects the first <p> element on the page.


// :last Selector: Selects the last element that matches the selector.
// Syntax: $('selector:last')
// Example: 
$('div:last')
//  selects the last <div> element on the page.


// :even and :odd Selectors: Selects elements with even or odd indices.
// Syntax: $('selector:even') or $('selector:odd')
// Example: 
$('tr:even') 
// selects all even-indexed <tr> elements.


// :not Selector: Selects elements that do not match the specified selector.
// Syntax: $('selector:not(otherSelector)')
// Example: 
// $('input:not(:checked)') 
// selects all unchecked <input> elements.


// These are just a few examples of the many selectors available in jQuery. By using these selectors, you can efficiently target specific elements in your HTML document and apply various operations, such as modifying their content, changing styles, attaching event handlers, and more.

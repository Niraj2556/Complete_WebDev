// Modifying Element Attributes
// In jQuery, there are several methods available to modify element attributes. These methods allow you to get or set the values of attributes for selected elements. Here are some commonly used jQuery methods for modifying element attributes:


// attr(): This method is used to get or set the value of an attribute for the selected elements.
// Get the value of an attribute:

var value = $('#myElement').attr('attributeName');
// Set the value of an attribute:
$('#myElement').attr('attributeName', 'value');

// Example: Set the src attribute of an image element:
$('img').attr('src', 'newImage.jpg');





// removeAttr(): This method is used to remove an attribute from the selected elements.
// Remove an attribute:
$('#myElement').removeAttr('attributeName');

// Example: Remove the disabled attribute from an input element:
$('input').removeAttr('disabled');





// prop(): This method is used to get or set the value of a property for the selected elements. It is commonly used for boolean attributes such as checked, disabled, etc.

// Get the value of a property:
var value = $('#myElement').prop('propertyName');
// Set the value of a property:
$('#myElement').prop('propertyName', value);

// Example: Set the checked property of a checkbox element:
$('input[type="checkbox"]').prop('checked', true);





// val(): This method is specifically used for getting or setting the value of form elements such as input, select, and textarea.
// Get the value of a form element:
var value = $('#myInput').val();
// Set the value of a form element:
$('#myInput').val('new value');

// Example: Set the value of an input element:
$('input[type="text"]').val('John Doe');
// These methods provide a convenient way to modify element attributes in jQuery. They allow you to retrieve attribute values, set attribute values, remove attributes, and work with boolean properties. By leveraging these methods, you can easily manipulate and update attributes of elements on your web page.
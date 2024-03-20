addClass() 
// Adds one or more CSS classes to selected elements.
// Adds the "highlight" class to all <p> elements
$('p').addClass('highlight');


removeClass()
//  Removes one or more CSS classes from selected elements.
// // Removes the "highlight" class from all <p> elements
$('p').removeClass('highlight');



toggleClass()
//  Toggles one or more CSS classes on selected elements. If a class is already present, it removes it; otherwise, it adds it.
// Toggles the "highlight" class on all <p> elements
$('p').toggleClass('highlight');



hasClass();
//  Checks if selected elements have a specific CSS class. It returns true if the class is present on at least one element; otherwise, it returns false.
// Checks if the first <p> element has the "highlight" class
var hasClass = $('p:first').hasClass('highlight');




css()
//  Modifies CSS properties directly on selected elements. While not specifically for classes, you can use it to add or remove styles associated with a class.
// Adds a custom CSS style to all elements with the "highlight" class
$('.highlight').css('background-color', 'yellow');
// toggleClass() with a function: Allows more advanced toggling based on a function's return value. You can use this to conditionally add or remove a class.


// Toggles the "highlight" class based on the current width of the element
$('.myElement').toggleClass(function() {
  return $(this).width() > 200 ? 'highlight' : '';
});


// These methods provide convenient ways to add, remove, toggle, and check the presence of CSS classes on selected elements using jQuery. They allow you to dynamically manipulate styles and apply visual effects to enhance the appearance and interactivity of your web page.











// width() and height() Methods:
// The width() and height() methods jare used to get or set the width and height of elements, respectively.
// Example - Setting element dimensions:
// Setting the width and height of an element
$('div').width(200);
$('div').height(150);




// show() and hide() Methods:
// The show() and hide() methods are used to display or hide elements, respectively.
// Example - Showing and hiding elements:
// Showing an element
$('p').show();





// Hiding an element
$('div').hide();
// fadeIn() and fadeOut() Methods:
// The fadeIn() and fadeOut() methods are used to fade in or fade out elements with a smooth transition.
// Example - Fading in and fading out elements:


// Fading in an element
$('h1').fadeIn();



// Fading out an element
$('p').fadeOut();



// These are just a few examples of how you can modify CSS styles using jQuery. jQuery provides a wide range of methods to manipulate CSS properties, allowing you to dynamically change the appearance and behavior of elements on your web page.
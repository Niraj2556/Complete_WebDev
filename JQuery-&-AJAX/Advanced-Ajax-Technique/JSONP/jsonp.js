// JSONP (JSON with Padding):
// JSONP is a technique used to overcome the same-origin policy limitation of AJAX requests. It allows cross-domain communication by making use of <script> tags, which are not subject to same-origin restrictions. JSONP works by injecting a <script> tag into the HTML document that loads a JavaScript file from a different domain. The server responds with a callback function that wraps the JSON data, enabling the client-side code to access the data.
// Example usage of JSONP:
function handleResponse(data) {
  // Handle the JSONP response data
}

const script = document.createElement('script');
script.src = '<https://api.example.com/data?callback=handleResponse>';
document.head.appendChild(script);
// In this example, a callback function named handleResponse is defined to process the JSONP response. A script tag is created dynamically with the src attribute pointing to the JSONP endpoint. The callback function name is included as a query parameter, typically named callback, to inform the server how to wrap the JSON data. When the script is loaded, the server responds with the JSON data wrapped in a function call to handleResponse.
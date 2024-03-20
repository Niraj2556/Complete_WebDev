// CORS (Cross-Origin Resource Sharing):
// CORS is a mechanism that allows controlled cross-origin requests in modern browsers. It enables web applications to make AJAX requests to different domains while maintaining security. CORS involves both server-side configuration and client-side handling.


// On the server side, the server needs to respond to the AJAX requests with the appropriate CORS headers, such as Access-Control-Allow-Origin, Access-Control-Allow-Methods, and Access-Control-Allow-Headers. These headers inform the browser which domains are allowed to make requests and what types of requests are allowed.


// On the client side, the browser automatically handles the CORS preflight requests (OPTIONS method) to determine if the actual request (e.g., GET, POST) is allowed. If the server responds with the appropriate CORS headers, the browser proceeds with the actual request. Otherwise, the browser blocks the request due to security restrictions.
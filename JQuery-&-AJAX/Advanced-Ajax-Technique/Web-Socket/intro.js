// WebSockets
// WebSockets is a communication protocol that enables real-time, full-duplex communication between a client (typically a web browser) and a server. Unlike traditional HTTP requests, which are based on a request-response model, WebSockets allow for continuous, bidirectional communication, making them ideal for real-time applications such as chat systems, collaborative editing, and live data updates.
// Here's an overview of how WebSockets work:


// Establishing a WebSocket Connection:
// To establish a WebSocket connection, the client sends a WebSocket handshake request to the server. If the server supports WebSockets, it responds with a WebSocket handshake response, and the connection is established. The handshake typically occurs over HTTP or HTTPS and includes a specific WebSocket protocol header.


// WebSocket API:
// Once the connection is established, the client and server can send data back and forth in real time. In JavaScript, you can use the WebSocket API, which provides methods and events for interacting with WebSocket connections.
// To create a WebSocket connection, you can use the following syntax:
// const socket = new WebSocket('wss://example.com/socket');
// The URL passed to the WebSocket constructor specifies the WebSocket server's address, typically using the ws:// or wss:// protocol.


// Sending and Receiving Data:
// Once the WebSocket connection is open, you can send and receive data between the client and server using the send() and onmessage methods, respectively.
// ---------------------------------------------// To send data from the client to the server:
socket.send('Hello, server!');


// -----------------------------------------------// To handle incoming data from the server:
socket.onmessage = function(event) {
  console.log('Received message from server:', event.data);
};
// The event.data property contains the received data from the server.


// Handling WebSocket Events:
// The WebSocket API provides various events that you can listen to, allowing you to handle different states of the WebSocket connection. Some commonly used events include:
// open: Triggered when the WebSocket connection is successfully established.
// message: Triggered when a message is received from the server.
// close: Triggered when the WebSocket connection is closed.
// error: Triggered when an error occurs during the WebSocket connection.
// You can listen to these events using the corresponding event handlers:
socket.onopen = function(event) {
  console.log('WebSocket connection established.');
};

socket.onclose = function(event) {
  console.log('WebSocket connection closed.');
};

socket.onerror = function(error) {
  console.error('WebSocket error:', error);
};


// Closing the WebSocket Connection:
// To close the WebSocket connection, you can call the close() method:
socket.close();
// Closing the connection is important to release server resources and ensure proper cleanup.
// WebSockets provide a powerful mechanism for real-time communication between clients and servers. They eliminate the need for continuous polling and enable efficient, bidirectional data transfer. WebSockets are supported by most modern browsers and are widely used in applications requiring real-time updates or instant communication.
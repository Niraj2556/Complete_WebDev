//PROJECT: Task API
// Set Up Project
// Create the Server in servrer.js
// Set up a basic route to test the server.
// Create a new file called tasks.js
// Define the routes for creating, reading, and deleting tasks in tasks.js
// Test the API in Postman





// Solution ---------------------------------------------------------------------


// 1. Set Up Project:
// Create a new directory for your project and navigate into it using your terminal:
// mkdir express-tasks-api
// cd express-tasks-api
// Initialize a new Node.js project:
// npm init -y
// Install necessary packages:
// npm install express body-parser






// 2. Create the Server in server.js:
// Create a file named server.js in your project directory and set up a basic Express server:
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







// 3. Set up a Basic Route to Test the Server:
// Modify server.js to add a basic route that responds with a message:
app.get('/', (req, res) => {
  res.send('Welcome to the Tasks API');
});





// 4. Create a New File called tasks.js:
// Create a file named tasks.js in your project directory.






// 5. Define the Routes for Creating, Reading, and Deleting Tasks in tasks.js:
// In tasks.js, set up routes for creating, reading and  deleting tasks:
const express = require('express');
const router = express.Router();

let tasks = [];

// Create a task
router.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  tasks.push(newTask);
  res.json(newTask);
});

// Read all tasks
router.get('/tasks', (req, res) => {
  res.json(tasks);
});


// Delete a task
router.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter(task => task.id !== taskId);
  res.json({ message: 'Task deleted successfully' });
});

module.exports = router;






// 6. Test the API in Postman:
// Open Postman and create requests to test your API. Make sure you have the server running (node server.js).
// Create a new task: Send a POST request to http://localhost:3000/tasks with a JSON body containing title and description.
// Read all tasks: Send a GET request to http://localhost:3000/tasks.
// Delete a task: Send a DELETE request to http://localhost:3000/tasks/:id (replace :id with the task ID).
// Remember to import the tasks.js router in your server.js:
const tasksRouter = require('./tasks');
// app.use('/', tasksRouter);
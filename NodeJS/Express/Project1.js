// You are tasked with creating a simple Express.js web application for managing a list of tasks. The application should have routes to add, retrieve, update, and delete tasks. Your task is to implement error-handling mechanisms for this application.


// Instructions:
// Set up a new Express.js application with the necessary routes for managing tasks: /add, /retrieve/:id, /update/:id, and /delete/:id.
// Implement appropriate error handling for the following scenarios:
// a. When trying to retrieve a task with an invalid id, respond with a 404 Not Found status code and a JSON object indicating the error.
// b. When attempting to update a task with an invalid id, respond with a 400 Bad Request status code and a JSON object indicating the error.
// c. If the request payload for adding or updating a task is missing the title field, respond with a 422 Unprocessable Entity status code and a JSON object indicating the error.
// d. In case of any unhandled errors in the application (e.g., unexpected server errors), respond with a 500 Internal Server Error status code and a JSON object indicating the error.
// Test your error-handling mechanisms by using tools like Postman or cURL to send requests to your application's routes with various scenarios, including invalid ids, missing fields, and unhandled errors.
// Create a detailed document explaining the error handling mechanisms you implemented and how they work. Include code snippets, screenshots of test results, and explanations for each error scenario.



// SOlution

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

// Sample data for tasks
let tasks = [];

// Route to add a task
app.post('/add', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(422).json({ error: 'Title field is required' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
  };

  tasks.push(newTask);
  res.json(newTask);
});

// Route to retrieve a task by id
app.get('/retrieve/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  if (isNaN(taskId) || taskId < 1 || taskId > tasks.length) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const task = tasks.find(task => task.id === taskId);
  res.json(task);
});

// Route to update a task by id
app.put('/update/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title } = req.body;

  if (isNaN(taskId) || taskId < 1 || taskId > tasks.length) {
    return res.status(400).json({ error: 'Invalid task id' });
  }

  if (!title) {
    return res.status(422).json({ error: 'Title field is required' });
  }

  const updatedTask = { id: taskId, title };
  tasks[taskId - 1] = updatedTask;
  res.json(updatedTask);
});

// Route to delete a task by id
app.delete('/delete/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  if (isNaN(taskId) || taskId < 1 || taskId > tasks.length) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks = tasks.filter(task => task.id !== taskId);
  res.json({ message: 'Task deleted successfully' });
});



// Default error handler for unhandled errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
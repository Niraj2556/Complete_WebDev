const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  const id = users.length + 1;
  const user = { id, name };
  users.push(user);
  res.json(user);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find(u => u.id == id);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    user.name = name;
    res.json(user);
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);
  if (index < 0) {
    res.status(404).send('User not found');
  } else {
    const user = users[index];
    users.splice(index, 1);
    res.json(user);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Custom Handling for Each Route:
// An obvious, naive way of going about this would be to define your custom error-handling logic for each route handler as so:
const express = require('express')
const fsPromises = require('fs').promises;

const app = express()
const port = 3000

app.get('/one', (req, res) => {
  fsPromises.readFile('./one.txt')
    .then(data => res.send(data))
    .catch(err => { // error handling logic 1
        console.error(err) // logging error
        res.status(500).send(err)
    })
})

app.get('/two', (req, res) => {
  fsPromises.readFile('./two.txt')
    .then(data => res.send(data))
    .catch(err => { // error handling logic 2
        console.error(err)
        res.redirect('/error') // redirecting user
    })
})

app.get('/error', (req, res) => {
  res.send("Custom error landing page.")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
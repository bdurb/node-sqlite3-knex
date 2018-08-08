const express = require('express');
const db = require('./data/dbConfig');

const server = express();
server.use(express.json());

const PORT = 3300;

server.get('/users', (req, res) => {
  db('users')
  .then(users => {
    res.status(200).json(users);
  })
  .catch(() => {
    res.status(500).json({ message: "error, error, error"})
  })
})

server.get('/posts', (req, res) => {
  db('posts')
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(() => {
    res.status(500).json({mesage: "error"})
  })
})




server.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`)
})
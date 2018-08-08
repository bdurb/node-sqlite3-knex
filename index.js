const express = require('express');
const db = require('./data/posts.sqlite3');

const server = express();
server.use(express.json());

const PORT = 3300;

server.get('users', (req, res) => {
  db('users')
  .then(users => {
    res.status(200).json(users);
  })
  .catch(() => {
    res.status(500).json({ message: "error, error, error"})
  })
})




server.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`)
})
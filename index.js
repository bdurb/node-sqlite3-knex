const express = require('express');

const server = express();
server.use(express.json());

const PORT = 3300;






server.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`)
})
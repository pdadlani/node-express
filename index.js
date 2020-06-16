const express = require('express');

const server = express();

const PORT = 5000;

// setting up the different routes
server.get(`/`, (req, res) => {
  res.json({ hello: "talls" })
})

server.get("/hello", (req, res) => {
  res.json({ hello: "my love" })
})

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT}`);
})
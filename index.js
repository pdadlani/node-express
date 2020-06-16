const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

const PORT = 5000;

const channels = [];
const lessons = [];

// setting up the different routes
server.get(`/`, (req, res) => {
  res.json({ hello: "talls" })
})

server.get("/hello", (req, res) => {
  res.json({ hello: "my love" })
})

server.post(`/api/channels`, (req, res) => {
  const channelInfo = req.body;
  channelInfo.id = shortid.generate();
  channels.push(channelInfo);
  res.status(201).json(channelInfo);
})

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT}`);
})
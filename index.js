const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

const PORT = 5000;

let channels = [];
let lessons = [];

// setting up the different routes
server.get(`/`, (req, res) => {
  res.json({ hello: "talls" });
});

server.get("/hello", (req, res) => {
  res.json({ hello: "my love" });
});

server.post(`/api/channels`, (req, res) => {
  const channelInfo = req.body;
  channelInfo.id = shortid.generate();
  channels.push(channelInfo);
  res.status(201).json(channelInfo);
});

server.get("/api/channels", (req, res) => {
  res.status(200).json(channels);
});

server.post(`/api/lessons`, (req, res) => {
  const lessonInfo = req.body;
  lessonInfo.id = shortid.generate();
  lessons.push(lessonInfo);
  res.status(201).json(lessonInfo);
});

server.get("/api/lessons", (req, res) => {
  res.status(200).json(lessons);
});

server.delete('/api/channels/:id', (req, res) => {
  const { id } = req.params;
  const deleted = channels.find(channel => channel.id === id);

  if (deleted) {
    channels = channels.filter(channel => channel.id !== id);
    res.status(200).json(deleted);
  } else {
    res
      .status(404)
      .json({ message: "Channel you are looking for does not exist." });
  }
});

server.delete("/api/lessons/:id", (req, res) => {
  const { id } = req.params;
  const deleted = lessons.find((lesson) => lesson.id === id);

  if (deleted) {
    lessons = lessons.filter((lesson) => lesson.id !== id);
    res.status(200).json(deleted);
  } else {
    res
      .status(404)
      .json({ message: "Lesson you are looking for does not exist." });
  }
});

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT}`);
})
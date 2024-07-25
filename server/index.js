// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { msg, env } = require('./models/workout');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(bodyParser.json());


const us = [
  // Your user data array here...
];

// Route to get user data
app.get("/api/mp", (req, res) => {
  res.send(us);
});

// Route to get messages
app.get("/api/msg", msg);

// Route to insert a new message
app.post("/api/env", env);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});

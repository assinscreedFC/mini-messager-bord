require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// const workoutRoutes = require('./routes/workouts'); // Décommente cette ligne si tu as ce fichier

// express app
const app = express();


// middleware


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

// routes

// connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database');
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log('Error connecting to the database:', err);
  });

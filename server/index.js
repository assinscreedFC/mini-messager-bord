require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// const workoutRoutes = require('./routes/workouts'); // Décommente cette ligne si tu as ce fichier

// express ap
const app = express();


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

// rout

// connect to db
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to database');
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT); });
   
  })
  .catch((err) => {
    console.log('Error connecting to the database:', err);
  });

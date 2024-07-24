// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
require('dotenv').config();

// Configuration du client PostgreSQL
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Connexion à la base de données
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

// Initialisation d'Express

const app = express();


// Middleware pour parser les requêtes JSON
app.use(express.json());
// Middleware de journalisation des requêtes
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();

});

// Route POST pour insérer des données dans la base de données
app.post('/', async (req, res) => {
  console.log(req.path, req.method);
  const { use, title, des } = req.body;
  console.log(req.body);

  if (!title || !des) {
    return res.status(400).json({ error: 'Title and description are required', emptyFields: ['title', 'des'] });
  }

  try {
    const result = await client.query(
      'INSERT INTO message (use, title, des, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
      [use, title, des]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting data', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});

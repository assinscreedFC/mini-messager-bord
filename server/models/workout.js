// models/workout.js
const client = require('../db.js');

const msg = async (req, res) => {
  try {
    const rep = await client.query("SELECT * FROM message");
    res.status(200).json(rep.rows);
  } catch (err) {
    console.error('Error retrieving messages', err);
    res.status(500).json({ error: 'Something went wrong while retrieving messages' });
  }
};

const env = async (req, res) => {
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
    res.status(500).json({ error: 'Something went wrong while inserting data' });
  }
};

module.exports = {
  msg,
  env
};

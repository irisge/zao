require('dotenv').config();

const express = require('express');

const router = require('./router');

const app = express();

app.use('/api', router);

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found !' });
});

module.exports = app;

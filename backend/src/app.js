require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');

const cors = require('cors');

const router = require('./router');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
    // eslint-disable-next-line comma-dangle
  })
);

app.use('/api', router);

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found !' });
});

module.exports = app;

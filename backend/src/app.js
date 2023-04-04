require('dotenv').config();

const fs = require('node:fs');
const path = require('node:path');

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

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, '../public')));
// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  '..',
  '..',
  'frontend',
  'dist',
  'index.html'
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));
  // app.use("/", express.static(path.join(__dirname, "../public")));
  app.use('/images', express.static(path.join(__dirname, '../public/images')));

  // redirect all requests to the REACT index file

  app.get('*', (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found !' });
});

module.exports = app;

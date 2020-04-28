const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  res.send('Hello world!');
});

const PORT = 8008;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
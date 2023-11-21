const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello, this is a simple API!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
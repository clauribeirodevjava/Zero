'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Nginx proxy reverso contexto /');
});

app.get('/blog', (req, res) => {
  res.send('Nginx proxy reverso contexto /blog');
});


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
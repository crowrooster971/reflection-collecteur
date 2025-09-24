const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue dans l'API de Reflection Collecteur');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
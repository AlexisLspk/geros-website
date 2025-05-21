const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTE DE TEST GET
app.get('/api/test', (req, res) => {
  console.log('Route de test appelée');
  res.json({ message: 'API OK' });
});

// ROUTE GENERATE PLAN
app.use('/api/generate-plan', require('./api/generate-plan'));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur API lancé sur http://localhost:${PORT}`);
});
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log('Requête reçue sur /api/generate-plan');
  console.log('Corps de la requête :', req.body);

  const apiKey = process.env.OPENROUTER_API_KEY;
  console.log('Clé API utilisée :', apiKey ? apiKey.slice(0, 10) + '...' : 'Aucune clé trouvée');
  const { situation } = req.body;
  const prompt = `Tu es un expert en gériatrie. Génère un plan de soins détaillé pour la situation suivante :\n${situation}\nPlan de soins :`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mistralai/mixtral-8x7b-instruct',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 600,
        temperature: 0.4
      })
    });
    const data = await response.json();
    const plan = data.choices?.[0]?.message?.content || 'Erreur IA';
    res.json({ plan });
  } catch (e) {
    res.status(500).json({ plan: 'Erreur lors de la génération du plan.' });
  }
});

module.exports = router;
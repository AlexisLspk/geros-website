import { useState } from 'react';

export default function ChatbotPlanSoins() {
  const [situation, setSituation] = useState('');
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setPlan('');
    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ situation }),
      });
      const data = await response.json();
      setPlan(data.plan);
    } catch (e) {
      setError('Erreur lors de la génération du plan.');
    }
    setLoading(false);
  };

  return (
    <div className="card p-6 my-8">
      <h3 className="text-xl font-bold mb-4">Générer un plan de soins avec l'IA</h3>
      <textarea
        className="input-dark mb-4"
        rows={4}
        placeholder="Décris la situation du patient (ex : Mme Dupont, 85 ans, chute, antécédents d'Alzheimer...)"
        value={situation}
        onChange={e => setSituation(e.target.value)}
      />
      <button className="btn-primary" onClick={handleGenerate} disabled={loading || !situation}>
        {loading ? 'Génération...' : 'Générer le plan'}
      </button>
      {plan && (
        <div className="mt-6 bg-[#162024] p-4 rounded-lg border border-[#3ed6b6]/30">
          <h4 className="font-bold mb-2">Plan de soins généré :</h4>
          <pre className="whitespace-pre-wrap text-main">{plan}</pre>
        </div>
      )}
      {error && <div className="text-red-400 mt-2">{error}</div>}
    </div>
  );
} 
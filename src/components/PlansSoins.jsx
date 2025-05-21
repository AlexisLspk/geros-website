import { useState, useRef } from 'react'
import { HiOutlineClipboardCheck, HiOutlineDocumentText, HiOutlineClock, HiOutlineLockClosed, HiOutlineDownload, HiChevronDown } from 'react-icons/hi'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import ChatbotPlanSoins from './ChatbotPlanSoins'

const besoins = [
  'Alimentation',
  'Mobilité',
  'Toilette',
  'Habillage',
  'Communication',
  'Cognition'
]

export default function PlansSoins() {
  const [form, setForm] = useState({ nom: '', gir: '', besoin: '' })
  const [plans, setPlans] = useState([])
  const [result, setResult] = useState(null)
  const [premium, setPremium] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const planRef = useRef()

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!premium && plans.length >= 1) {
      setShowPopup(true)
      return
    }
    const plan = {
      nom: form.nom,
      gir: form.gir,
      besoin: form.besoin,
      date: new Date().toLocaleDateString('fr-FR'),
      details: genererPlan(form),
    }
    setPlans([plan, ...plans])
    setResult(plan)
    setForm({ nom: '', gir: '', besoin: '' })
  }

  function genererPlan({ nom, gir, besoin }) {
    const patient = nom || 'le patient'
    const niveau = gir || '?'
    let diagnostic = ''
    let objectifs = ''
    let actions = ''
    let suivi = ''
    let conseils = ''
    switch (besoin) {
      case 'Alimentation':
        diagnostic = "Risque de dénutrition ou d'hydratation insuffisante."
        objectifs = "Maintenir un état nutritionnel optimal et prévenir la déshydratation."
        actions = "- Adapter la texture et la présentation des repas\n- Proposer des collations enrichies\n- Surveiller la prise alimentaire et hydrique\n- Impliquer la famille lors des repas\n- Pesée hebdomadaire"
        suivi = "Suivi du poids, bilan nutritionnel mensuel, adaptation des apports."
        conseils = "Favoriser un environnement calme, valoriser les goûts du patient, encourager l'autonomie."
        break
      case 'Mobilité':
        diagnostic = "Risque de perte d'autonomie motrice, chutes, fonte musculaire."
        objectifs = "Préserver la mobilité, prévenir les chutes et maintenir l'autonomie."
        actions = "- Mise en place d'exercices quotidiens adaptés\n- Surveillance de l'équilibre\n- Utilisation d'aides techniques (déambulateur, canne)\n- Sécurisation de l'environnement\n- Mobilisation douce au lit et au fauteuil"
        suivi = "Bilan de mobilité mensuel, évaluation des chutes, adaptation du plan."
        conseils = "Encourager la participation, valoriser les progrès, impliquer les proches."
        break
      case 'Toilette':
        diagnostic = "Difficultés dans la réalisation de la toilette, risque d'escarres ou d'infections."
        objectifs = "Assurer une hygiène corporelle optimale et préserver la dignité."
        actions = "- Assistance à la toilette selon l'autonomie\n- Utilisation de produits adaptés\n- Prévention des escarres (soins de la peau)\n- Respect de l'intimité et du rythme du patient"
        suivi = "Surveillance de l'état cutané, adaptation de l'aide selon l'évolution."
        conseils = "Respecter les habitudes, favoriser l'autonomie, rassurer le patient."
        break
      case 'Habillage':
        diagnostic = "Difficultés à s'habiller seul, risque de perte d'autonomie."
        objectifs = "Maintenir l'autonomie dans l'habillage et préserver l'estime de soi."
        actions = "- Proposer des vêtements adaptés (faciles à enfiler)\n- Encourager la participation\n- Adapter l'aide selon les capacités\n- Respecter les choix vestimentaires"
        suivi = "Évaluation régulière de l'autonomie, adaptation de l'aide."
        conseils = "Valoriser les efforts, respecter les préférences, impliquer la famille."
        break
      case 'Communication':
        diagnostic = "Troubles de la communication orale ou écrite, isolement social."
        objectifs = "Maintenir les capacités de communication et prévenir l'isolement."
        actions = "- Solliciter la parole, utiliser des supports visuels\n- Adapter le rythme des échanges\n- Favoriser les activités de groupe\n- Impliquer l'orthophoniste si besoin"
        suivi = "Bilan de communication, adaptation des supports, suivi orthophonique."
        conseils = "Être patient, valoriser chaque échange, encourager la participation sociale."
        break
      case 'Cognition':
        diagnostic = "Déclin cognitif, troubles de la mémoire, désorientation."
        objectifs = "Préserver les fonctions cognitives et l'autonomie décisionnelle."
        actions = "- Proposer des activités de stimulation cognitive\n- Mettre en place des repères visuels\n- Adapter l'environnement\n- Impliquer la famille et l'équipe pluridisciplinaire"
        suivi = "Évaluation neuropsychologique, adaptation des activités, suivi régulier."
        conseils = "Encourager la stimulation, rassurer, valoriser les capacités restantes."
        break
      default:
        diagnostic = "À préciser."
        objectifs = "À définir selon l'évaluation."
        actions = "À compléter."
        suivi = "À compléter."
        conseils = "À compléter."
    }
    return {
      patient,
      niveau,
      besoin,
      diagnostic,
      objectifs,
      actions,
      suivi,
      conseils
    }
  }

  const handleDownloadPDF = async () => {
    const input = planRef.current
    const canvas = await html2canvas(input)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const width = pdf.internal.pageSize.getWidth()
    const height = (canvas.height * width) / canvas.width
    pdf.addImage(imgData, 'PNG', 0, 0, width, height)
    pdf.save(`plan-soins-${result.nom || 'patient'}.pdf`)
  }

  return (
    <div className="relative max-w-6xl mx-auto mt-12 px-4 fade-in fade-in-delay-1">
      <div className="text-center max-w-5xl mx-auto mb-10">
        <h1 className="title-main font-logo holo-title text-4xl md:text-5xl lg:text-6xl mb-6 uppercase font-bold leading-tight md:leading-tight lg:leading-tight">
          Plans de soins en 1 clic
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-[#162024] border border-[#3ed6b6]/20 rounded-2xl shadow-lg flex flex-col gap-6 p-10 mb-12 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-[#3ed6b6] font-logo mb-4 uppercase tracking-wide">Créer un plan personnalisé</h2>
        <div>
          <label className="block text-main mb-2 font-semibold">Nom du patient</label>
          <input name="nom" value={form.nom} onChange={handleChange} className="input-dark w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ed6b6] bg-[#10171a] border border-[#3ed6b6]/20" placeholder="Mme Dupont" required />
        </div>
        <div>
          <label className="block text-main mb-2 font-semibold">Niveau GIR</label>
          <div className="relative h-full flex items-center">
            <select name="gir" value={form.gir} onChange={handleChange} className="input-dark w-full px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ed6b6] bg-[#10171a] border border-[#3ed6b6]/20 appearance-none" required>
              <option value="">Sélectionner</option>
              {[1,2,3,4,5,6].map(g => <option key={g} value={g}>GIR {g}</option>)}
            </select>
            <HiChevronDown className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-lg text-white opacity-80" />
          </div>
        </div>
        <div>
          <label className="block text-main mb-2 font-semibold">Besoin principal</label>
          <div className="relative h-full flex items-center">
            <select name="besoin" value={form.besoin} onChange={handleChange} className="input-dark w-full px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ed6b6] bg-[#10171a] border border-[#3ed6b6]/20 appearance-none" required>
              <option value="">Sélectionner</option>
              {besoins.map(b => <option key={b}>{b}</option>)}
            </select>
            <HiChevronDown className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-lg text-white opacity-80" />
          </div>
        </div>
        <button className="btn-primary self-center mt-4 text-lg px-10 py-3 border-2 border-[#3ed6b6] rounded-lg">Générer le plan</button>
      </form>

      {/* Génération de plan de soins par IA */}
      <ChatbotPlanSoins />

      {result && (
        <div className="bg-[#162024] border border-[#3ed6b6]/30 rounded-2xl shadow-lg p-8 mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#3ed6b6] font-logo uppercase mb-6 text-center">Plan généré</h2>
          <div ref={planRef} className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#4ECDC4] mb-1 uppercase tracking-wide">Informations patient</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-main">
                <span><b>Nom :</b> {result.nom}</span>
                <span><b>Date :</b> {result.date}</span>
                <span><b>Niveau GIR :</b> {result.gir}</span>
                <span><b>Besoin principal :</b> {result.besoin}</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4ECDC4] mb-1 uppercase tracking-wide">Diagnostic</h3>
              <p className="text-main mb-2">{result.details.diagnostic}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4ECDC4] mb-1 uppercase tracking-wide">Objectifs de soins</h3>
              <p className="text-main mb-2">{result.details.objectifs}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4ECDC4] mb-1 uppercase tracking-wide">Actions à mettre en place</h3>
              <pre className="whitespace-pre-wrap text-main mb-2 bg-[#10171a] rounded-lg p-4 border border-[#3ed6b6]/10">{result.details.actions}</pre>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4ECDC4] mb-1 uppercase tracking-wide">Suivi et évaluation</h3>
              <p className="text-main mb-2">{result.details.suivi}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4ECDC4] mb-1 uppercase tracking-wide">Conseils personnalisés</h3>
              <p className="text-main mb-2">{result.details.conseils}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button onClick={handleDownloadPDF} className="btn-primary flex items-center gap-2 px-8 py-3 border-2 border-[#3ed6b6] rounded-lg text-lg">
              <HiOutlineDownload className="w-5 h-5" /> Télécharger en PDF
            </button>
          </div>
        </div>
      )}

      {plans.length > 0 && (
        <div className="bg-[#162024] border border-[#3ed6b6]/20 rounded-2xl shadow-lg p-8 mb-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#3ed6b6] font-logo uppercase mb-6 text-center">Historique des plans</h2>
          <ul className="divide-y divide-[#3ed6b6]/20">
            {plans.map((p, i) => (
              <li key={i} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between text-main">
                <span className="mb-2 md:mb-0"><b>{p.nom}</b> – {p.date} – {p.besoin}</span>
                <button className="text-[#3ed6b6] hover:underline mt-2 md:mt-0 font-semibold" onClick={() => setResult(p)}>Voir détails</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="card flex flex-col items-center p-8">
            <p className="mb-4 text-main text-lg">Limite atteinte. Passez Premium pour générer plus de plans.</p>
            <button className="btn-primary px-8 py-3 mb-2 border-2 border-[#3ed6b6] rounded-lg text-lg" onClick={() => { setPremium(true); setShowPopup(false); }}>
              Passez Premium (9,99 €/mois)
            </button>
            <button className="text-[#3ed6b6] underline" onClick={() => setShowPopup(false)}>Annuler</button>
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <button className="btn-primary px-8 py-3 border-2 border-[#3ed6b6] rounded-lg text-lg">Testez gratuitement</button>
      </div>
    </div>
  )
} 
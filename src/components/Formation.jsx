import { useState, useEffect } from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Link } from 'react-router-dom'

// Nouvelle fonction utilitaire pour parser le contenu en cards par sous-partie
function renderContentCards(contenu) {
  // On découpe par sous-titres (ligne seule ou majuscule)
  const lines = contenu.trim().split(/\n+/)
  const cards = []
  let currentTitle = null
  let currentBlocks = []
  const pushCard = () => {
    if (currentTitle || currentBlocks.length) {
      cards.push({ title: currentTitle, blocks: [...currentBlocks] })
      currentBlocks = []
    }
  }
  lines.forEach(line => {
    // Titre de sous-partie (ligne seule, majuscule, ou ancienne syntaxe **titre**)
    if (/^\*+.*\*+$/.test(line.trim()) || /^[A-ZÀ-ÿ][^\n]*$/.test(line.trim())) {
      pushCard()
      currentTitle = line.trim().replace(/^\*+\s*/, '').replace(/\s*\*+$/, '').replace(/\*/g, '').trim()
    } else {
      currentBlocks.push(line)
    }
  })
  pushCard()
  return cards.map((card, idx) => (
    <div key={idx} className="bg-[#162024] rounded-2xl shadow-lg p-6 md:p-8 mb-10 border border-[#3ed6b6]/20">
      {card.title && (
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#3ed6b6] font-logo tracking-wide uppercase bg-[#10171a] rounded px-3 py-2 inline-block shadow-sm border-l-4 border-[#3ed6b6]">
          {card.title}
        </h3>
      )}
      <div className="space-y-5">
        {card.blocks.map((block, i) => {
          // Étude de cas ou exemple
          if (/^(exemple|étude de cas) ?:/i.test(block.trim())) {
            return (
              <div key={i} className="bg-[#10171a] border-l-4 border-[#3ed6b6] p-4 rounded-xl text-main italic text-base md:text-lg shadow">
                <span className="font-bold text-[#3ed6b6]">{block.split(':')[0]} :</span>{block.substring(block.indexOf(':')+1)}
              </div>
            )
          }
          // Conseil pratique ou conseil
          if (/^conseil( pratique)? ?:/i.test(block.trim())) {
            return (
              <div key={i} className="bg-[#10171a] border-l-4 border-[#4ECDC4] p-4 rounded-xl text-main text-base md:text-lg shadow">
                <span className="font-bold text-[#4ECDC4]">Conseil :</span> {block.replace(/^conseil( pratique)? ?:/i, '').trim()}
              </div>
            )
          }
          // Liste à puces
          if (block.trim().startsWith('- ')) {
            const items = block.trim().split(/\n- /).map((li, j) => (j === 0 ? li.replace(/^- /, '') : li))
            return (
              <ul key={i} className="list-disc list-inside pl-4 space-y-2 text-main text-base md:text-lg">
                {items.map((li, j) => <li key={j}>{li}</li>)}
              </ul>
            )
          }
          // Paragraphe simple
          if (block.trim()) {
            return <p key={i} className="text-main leading-relaxed text-base md:text-lg">{block.replace(/^- /, '').trim()}</p>
          }
          return null
        })}
      </div>
    </div>
  ))
}

const modules = [
  {
    id: 1,
    titre: 'Prévention des chutes',
    type: 'freemium',
    intro: `Les chutes sont une problématique majeure en gériatrie, touchant environ 30 % des personnes âgées de plus de 65 ans chaque année, selon la Haute Autorité de Santé (HAS, 2023). En EHPAD, elles entraînent souvent des fractures (ex. : col du fémur), une perte d'autonomie, voire une hospitalisation prolongée. En tant que soignant, vous êtes en première ligne pour prévenir ces incidents. Cette formation approfondie vous fournit des outils concrets pour évaluer les risques, aménager l'environnement, intervenir de manière proactive, coordonner avec l'équipe, et éduquer les résidents, afin de réduire les chutes et leurs conséquences.`,
    contenu: `
Comprendre les causes des chutes
- Facteurs intrinsèques : faiblesse musculaire, troubles de l'équilibre, hypotension orthostatique, effets secondaires de médicaments (ex. : benzodiazépines).
- Facteurs extrinsèques : sols glissants, éclairage insuffisant, obstacles (ex. : tapis mal fixés).
- Statistiques : 50 % des chutes en EHPAD surviennent lors des transferts (lit-fauteuil) ou dans la salle de bain (INVS, 2024).
- Exemple : Mme Dupont, 78 ans, a chuté en se levant la nuit pour aller aux toilettes, à cause d'un manque de lumière et de sa prise de sédatifs.

Évaluation des risques
- Utilisez la grille de Morse pour chaque résident (score > 45 = haut risque).
- Observez les signes avant-coureurs : démarche hésitante, plaintes de vertiges, ou antécédents de chutes (plus de 2 en 6 mois).
- Collaborez avec le médecin pour revoir les traitements (ex. : ajuster les diurétiques).
- Étude de cas : M. Martin, 82 ans, score Morse de 60, a des antécédents de chutes et prend 3 médicaments à risque (sédatif, antihypertenseur, diurétique). Action : Signalement au médecin pour ajustement.

Aménagement de l'environnement
- Installez des tapis antidérapants (adhésivité testée) dans les zones à risque (salles de bain, couloirs).
- Assurez un éclairage de 100 lux minimum dans les chambres et 200 lux dans les espaces communs ; utilisez des veilleuses automatiques la nuit.
- Dégagez les obstacles : fixez les câbles, rangez les objets au sol, et sécurisez les meubles (ex. : fauteuils roulants avec freins).
- Conseil pratique : faites une ronde quotidienne avec une checklist (éclairage, tapis, obstacles).

Interventions physiques et éducatives
- Mettez en place des exercices d'équilibre supervisés : lever de chaise (10 répétitions/jour), marche en ligne droite (5 min/jour).
- Formez les résidents à l'utilisation des aides à la marche (canne, déambulateur) : vérifiez l'ajustement (hauteur, stabilité).
- Éduquez sur les bonnes pratiques : se lever lentement pour éviter l'hypotension, porter des chaussures fermées antidérapantes.
- Exemple : Mme Lefèvre, 80 ans, a réduit ses chutes de 60 % après 3 semaines d'exercices et le port de chaussures adaptées.

Coordination et suivi
- Tenez un registre des chutes dans le DUI : date, lieu, circonstances, conséquences.
- Participez à des réunions d'équipe hebdomadaires pour analyser les tendances (ex. : 70 % des chutes la nuit = besoin de veilleuses).
- Collaborez avec le kinésithérapeute pour un programme personnalisé si score Morse élevé.
- Conseil : utilisez Geros pour partager vos observations avec l'équipe via la communauté.

Sensibilisation des résidents et familles
- Organisez des ateliers mensuels pour les résidents sur la prévention (ex. : "Comment se lever en sécurité").
- Impliquez les familles : expliquez l'importance des chaussures adaptées et des exercices.
- Étude de cas : après un atelier, M. Robert, 85 ans, a accepté de retirer ses chaussons glissants, réduisant son risque de chute.
`,
    quiz: [
      {
        question: "Quel facteur augmente le risque de chute ?",
        options: ["Sédatifs", "Chaussures antidérapantes"],
        correct: 0
      },
      {
        question: "Quel niveau d'éclairage pour les espaces communs ?",
        options: ["50 lux", "200 lux"],
        correct: 1
      },
      {
        question: "Quelle action pour un score Morse > 45 ?",
        options: ["Ignorer", "Collaborer avec le kiné"],
        correct: 1
      },
      {
        question: "Où surviennent 50 % des chutes ?",
        options: ["Cuisine", "Salle de bain"],
        correct: 1
      }
    ]
  },
  {
    id: 2,
    titre: 'Comprendre Alzheimer',
    type: 'freemium',
    intro: `La maladie d'Alzheimer affecte 1,2 million de personnes en France (Alzheimer Europe, 2024), et en tant que soignant en EHPAD, vous êtes confronté quotidiennement à ses défis : agitation, perte de mémoire, dépendance croissante. Cette formation approfondie vous équipe pour comprendre les mécanismes de la maladie, gérer les comportements complexes, adapter vos soins, et préserver votre propre bien-être face à ces situations exigeantes. Vous apprendrez des techniques pratiques pour améliorer la qualité de vie des patients tout en optimisant votre pratique.`,
    contenu: `
Comprendre les mécanismes et phases de la maladie
- Mécanisme : accumulation de plaques amyloïdes et dégénérescence neuronale, affectant mémoire et cognition.
- Phases :
  - Légère : oubli récent, difficulté à planifier (ex. : M. Leclerc oublie ses rendez-vous).
  - Modérée : confusion, agitation, perte d'autonomie (ex. : Mme Girard ne reconnaît plus son fils).
  - Sévère : dépendance totale, troubles de la marche, infections fréquentes.
- Impact : 60 % des résidents d'EHPAD atteints de démence (HAS, 2023).

Gestion des symptômes comportementaux
- Agitation : parlez doucement, proposez une activité simple (ex. : pliage de serviettes, écouter de la musique calme).
- Errance : identifiez les déclencheurs (ex. : anxiété) ; sécurisez les sorties (bracelets GPS, portes codées).
- Agressivité : restez calme, évitez les confrontations, redirigez l'attention (ex. : "Voulez-vous regarder des photos ?").
- Exemple : Mme Dupont, 82 ans, s'agite à 18h ; une routine (thé + musique) a réduit ses crises de 40 %.

Adaptation des soins quotidiens
- Hygiène : divisez en étapes (ex. : "On lave d'abord les mains"), expliquez chaque action, utilisez des gestes rassurants.
- Repas : proposez des aliments faciles à manger (ex. : purées), surveillez la déglutition pour éviter les fausses routes.
- Médication : utilisez un pilulier clair, vérifiez la prise 2 fois/jour.
- Étude de cas : M. Martin, 79 ans, refuse la toilette ; en chantant une chanson familière, il accepte plus facilement.

Communication adaptée
- Évitez les questions complexes ; proposez des choix simples (ex. : "Veux-tu un pull bleu ou rouge ?").
- Utilisez des repères visuels : étiquettes sur les tiroirs, photos pour les routines.
- Soyez patient : répétez sans frustration, utilisez un ton apaisant.
- Conseil : si le patient répète une question, répondez comme si c'était la première fois.

Coordination avec l'équipe et les familles
- Notez les changements de comportement dans le DUI (ex. : "Mme Girard refuse de manger depuis 2 jours").
- Organisez des réunions mensuelles avec l'équipe pour ajuster les stratégies.
- Impliquez les familles : expliquez les symptômes et donnez des conseils (ex. : apporter des objets familiers).
- Exemple : la famille de M. Leclerc a apporté un album photo, réduisant son anxiété.

Prendre soin de soi
- Prenez des pauses régulières (5 min toutes les 2 heures) pour éviter le burn-out.
- Participez à des groupes de soutien ou partagez vos expériences sur la communauté Geros.
- Conseil : suivez une formation annuelle sur la démence pour rester à jour (ex. : normes HAS).
`,
    quiz: [
      {
        question: "Quelle phase montre une confusion marquée ?",
        options: ["Légère", "Modérée"],
        correct: 1
      },
      {
        question: "Comment gérer l'errance ?",
        options: ["Sécuriser les sorties", "Laisser sortir"],
        correct: 0
      },
      {
        question: "Quel outil aide pour la toilette ?",
        options: ["Parler fort", "Gestes rassurants"],
        correct: 1
      },
      {
        question: "Que faire si le patient répète une question ?",
        options: ["S'énerver", "Répondre patiemment"],
        correct: 1
      }
    ]
  },
  {
    id: 3,
    titre: 'Gestion des polypathologies',
    type: 'premium',
    intro: `En gériatrie, la polypathologie est la norme : 70 % des résidents d'EHPAD souffrent d'au moins 3 maladies chroniques (ex. : diabète, hypertension, arthrose), selon l'INSEE (2024). En tant que soignant, vous devez jongler avec des traitements multiples, des risques d'interactions médicamenteuses, et des priorités changeantes, tout en assurant un suivi rigoureux. Cette formation détaillée vous donne les clés pour identifier les pathologies, prioriser les soins, gérer les traitements, coordonner avec l'équipe, et anticiper les complications, afin d'optimiser la prise en charge et d'améliorer la qualité de vie des patients.`,
    contenu: `
Identification et documentation
- Recueillez un historique médical complet : liste des diagnostics, traitements, allergies.
- Utilisez le DUI pour créer une fiche patient (ex. : M. Dupont, 79 ans : diabète type 2, insuffisance cardiaque, arthrose, allergie à la pénicilline).
- Collaborez avec le médecin pour confirmer les diagnostics (ex. : test HBA1c pour diabète).
- Exemple : Mme Lefèvre, 81 ans, a 5 pathologies ; une fiche claire a permis d'éviter une erreur médicamenteuse.

Priorisation des interventions
- Évaluez les urgences : douleur aiguë (ex. : arthrose), glycémie instable (diabète).
- Planifiez les soins quotidiens : médication matin/midi/soir, mobilité (marche 10 min), hygiène (toilette à 8h).
- Ajustez selon l'état du jour : si fatigue, reportez les exercices non essentiels.
- Étude de cas : M. Martin, 82 ans, souffre d'hypertension et de douleur arthrosique ; priorité donnée à un antalgique avant la marche.

Gestion des traitements et interactions
- Vérifiez les interactions : diurétiques + antihypertenseurs = risque d'hypotension ; metformine + insuffisance rénale = risque d'acidose lactique.
- Utilisez un tableau médicamenteux : nom, dose, horaire, effets secondaires surveillés.
- Collaborez avec le pharmacien pour ajuster (ex. : réduire la dose si hypotension).
- Exemple : Mme Blanc, 78 ans, a vu sa tension stabilisée après un ajustement (diurétique réduit de 50 %).

Surveillance des complications
- Contrôlez les signes vitaux : tension (hypertension), glycémie (diabète), douleur (échelle EVA).
- Notez les changements : ex. : œdème (insuffisance cardiaque), fatigue (anémie).
- Signalez immédiatement : chute de tension (< 90/60), glycémie < 4 mmol/L.
- Conseil : gardez un tensiomètre et un glucomètre à portée de main.

Coordination interdisciplinaire
- Travaillez avec le kiné pour la mobilité (ex. : arthrose), le nutritionniste pour le diabète (régime adapté).
- Organisez des réunions hebdomadaires : discutez des cas complexes (ex. : "M. Dupont refuse ses médicaments").
- Impliquez les familles : expliquez les priorités et surveillez les signes à domicile.
- Exemple : la famille de Mme Girard a signalé une fatigue, permettant un dépistage précoce d'anémie.

Utilisation des outils numériques
- Intégrez les plans de soins dans Geros : générez un plan personnalisé (ex. : "M. Dupont : Contrôle glycémie 3x/jour").
- Partagez les bonnes pratiques via la communauté Geros (ex. : "Comment gérer un patient réfractaire ?").
- Conseil : mettez à jour les données quotidiennement pour un suivi précis.
`,
    quiz: [
      {
        question: "Quelle urgence prioriser ?",
        options: ["Douleur aiguë", "Exercice"],
        correct: 0
      },
      {
        question: "Quel risque avec metformine + insuffisance rénale ?",
        options: ["Acidose lactique", "Hypertension"],
        correct: 0
      },
      {
        question: "Qui consulter pour ajuster un traitement ?",
        options: ["Pharmacien", "Cuisinier"],
        correct: 0
      },
      {
        question: "Quelle glycémie signale un problème ?",
        options: ["< 4 mmol/L", "6 mmol/L"],
        correct: 0
      }
    ]
  },
  {
    id: 4,
    titre: 'Hygiène en EHPAD',
    type: 'premium',
    intro: `L'hygiène est un enjeu critique en EHPAD, où les infections (ex. : grippe, infections urinaires, pneumonies) touchent 20 % des résidents chaque année, selon Santé Publique France (2024). En tant que soignant, vous jouez un rôle clé pour prévenir ces risques, protéger les résidents fragiles, et maintenir un environnement sûr. Cette formation approfondie couvre les protocoles d'hygiène, la gestion des épidémies, la désinfection des équipements, l'éducation des équipes, et la gestion des situations complexes, afin de garantir des soins de qualité et de réduire les infections nosocomiales.`,
    contenu: `
Protocoles d'hygiène de base
- Lavez-vous les mains avant et après chaque contact (40-60 secondes avec savon, ou 30 secondes avec gel hydroalcoolique si mains non souillées).
- Portez des gants pour les soins à risque (ex. : pansements, toilette intime) et changez-les entre chaque résident.
- Utilisez des tabliers jetables pour les soins salissants (ex. : change).
- Exemple : Mme Blanc, 83 ans, a évité une infection urinaire grâce à une toilette avec gants changés.

Désinfection de l'environnement
- Nettoyez les surfaces fréquemment touchées (poignées, chaises roulantes, tables) avec de l'alcool 70 % ou un désinfectant agréé (ex. : Anios).
- Lavez les literies à 60 °C minimum, changez-les au moins 1 fois/semaine ou après un incident (ex. : incontinence).
- Aérez les chambres 10 min/jour pour réduire les germes.
- Conseil : créez une checklist quotidienne (surfaces, literie, aération).

Prévention des infections spécifiques
- Infections urinaires : assurez une toilette intime 2x/jour, encouragez une hydratation (1,5 L/jour si pas de contre-indication).
- Infections respiratoires : portez un masque si toux ou rhume, vaccinez contre la grippe (90 % d'efficacité selon HAS, 2024).
- Plaies : désinfectez avec un antiseptique (ex. : Biseptine), couvrez avec un pansement stérile.
- Exemple : M. Robert, 85 ans, a évité une septicémie grâce à un pansement changé quotidiennement.

Gestion des épidémies
- Isolez un résident symptomatique (fièvre, toux) dans une chambre dédiée, avec masque et gants pour tout contact.
- Signalez à l'infirmière référente dans l'heure et notez dans le DUI.
- Limitez les visites si épidémie confirmée (ex. : grippe).
- Étude de cas : en 2024, une épidémie de grippe a été limitée à 2 cas grâce à un isolement rapide.

Formation et sensibilisation
- Formez les nouveaux soignants aux normes HAS (ex. : lavage des mains, port de gants).
- Organisez des rappels mensuels : affiches, ateliers pratiques (ex. : simulation de désinfection).
- Impliquez les résidents et familles : expliquez l'importance de l'hygiène (ex. : "Lavez vos mains avant de toucher Grand-Mère").
- Conseil : partagez vos astuces sur la communauté Geros (ex. : "Désinfection rapide avec lingettes Anios").

Gestion des situations complexes
- Résident réfractaire : expliquez calmement (ex. : "On va nettoyer pour éviter les microbes"), proposez une distraction (musique).
- Matériel limité : priorisez les gants pour les soins à haut risque, utilisez des alternatives (ex. : savon classique si plus de gel).
- Épidémie majeure : collaborez avec l'ARS pour des renforts (ex. : kits de protection).
- Exemple : Mme Girard, 80 ans, refusait la toilette ; une approche douce a permis de la convaincre.
`,
    quiz: [
      {
        question: "Combien de temps pour un lavage de mains efficace ?",
        options: ["20 sec", "40-60 sec"],
        correct: 1
      },
      {
        question: "Quelle température pour laver les literies ?",
        options: ["40 °C", "60 °C"],
        correct: 1
      },
      {
        question: "Comment prévenir les infections urinaires ?",
        options: ["Hydratation", "Moins d'eau"],
        correct: 0
      },
      {
        question: "Que faire en cas de fièvre suspecte ?",
        options: ["Signaler dans l'heure", "Attendre 48h"],
        correct: 0
      }
    ]
  }
]

export default function Formation() {
  const [current, setCurrent] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(null)
  const [premium, setPremium] = useState(false)
  const [progression, setProgression] = useState([false, false, false, false])

  const module = modules[current]
  const isLocked = module.type === 'premium' && !premium

  // Réinitialise le quiz à chaque changement de module
  useEffect(() => {
    setShowQuiz(false)
    setScore(null)
    setAnswers({})
  }, [current])

  const handleAnswer = (q, idx) => {
    setAnswers(prev => ({ ...prev, [q]: idx }))
  }

  const validateQuiz = () => {
    let correct = 0
    module.quiz.forEach((q, i) => {
      if (answers[i] === q.correct) correct++
    })
    setScore(Math.round((correct / module.quiz.length) * 100))
    setProgression(prev => {
      const arr = [...prev]
      arr[current] = true
      return arr
    })
  }

  return (
    <div className="relative max-w-6xl mx-auto my-4 px-4 fade-in fade-in-delay-1">
      <div className="text-center max-w-5xl mx-auto mb-10">
        <h1 className="title-main font-logo holo-title text-4xl md:text-5xl lg:text-6xl mb-6 mt-8 uppercase font-bold leading-tight md:leading-tight lg:leading-tight">
          Formation en 5 min
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 mb-12 justify-center">
        {modules.map((m, i) => (
          <button
            key={m.id}
            className={`px-6 py-3 rounded-xl font-semibold shadow-md text-lg transition-colors duration-200 border-2 ${i === current ? 'bg-[#3ed6b6] text-[#10171a] border-[#3ed6b6]' : 'bg-[#162024] text-white border-[#3ed6b6]/30'} ${m.type === 'premium' && !premium ? 'opacity-60 cursor-not-allowed' : 'hover:bg-[#3ed6b6] hover:text-[#10171a] hover:border-[#3ed6b6]'}`}
            onClick={() => setCurrent(i)}
            disabled={m.type === 'premium' && !premium}
          >
            {m.titre} {m.type === 'premium' && <HiOutlineLockClosed className="inline ml-1" />}
          </button>
        ))}
      </div>
      <div className="card p-10 mb-12 fade-in fade-in-delay-2">
        <h2 className="title-section text-2xl md:text-3xl font-bold uppercase mb-2 font-logo">{module.titre}</h2>
        <p className="text-secondary text-lg mb-8">{module.intro}</p>
        {isLocked ? (
          <div className="flex flex-col items-center justify-center py-8">
            <HiOutlineLockClosed className="w-14 h-14 text-[#4ECDC4] mb-4" />
            <p className="mb-4 text-main text-lg">Ce module est réservé aux membres Premium.</p>
            <button className="btn-primary px-8 py-3 border-2 border-[#3ed6b6] rounded-lg text-lg" onClick={() => setPremium(true)}>
              Passez Premium (9,99 €/mois)
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8 text-lg leading-relaxed">
              {renderContentCards(module.contenu)}
            </div>
            {module.quiz.length > 0 && !showQuiz && (
              <div className="flex justify-center">
                <button className="btn-primary mb-4 px-8 py-3 border-2 border-[#3ed6b6] rounded-lg text-lg fade-in-scale" onClick={() => setShowQuiz(true)}>
                  Commencer le quiz
                </button>
              </div>
            )}
            {showQuiz && (
              <div className="flex flex-col items-center w-full fade-in-scale">
                {module.quiz.map((q, i) => (
                  <div key={i} className="w-full max-w-xl bg-[#162024] border border-[#3ed6b6]/30 rounded-2xl shadow-md p-6 mb-8">
                    <p className="font-semibold mb-4 text-main text-lg text-center">{q.question}</p>
                    <div className="flex flex-col gap-4 items-center">
                      {q.options.map((opt, j) => (
                        <label key={j} className={`flex items-center gap-2 cursor-pointer text-main text-base w-full justify-center ${answers[i] === j ? 'font-bold text-[#3ed6b6]' : ''}`}>
                          <input
                            type="radio"
                            name={`q${i}`}
                            checked={answers[i] === j}
                            onChange={() => handleAnswer(i, j)}
                            className="accent-[#3ed6b6]"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                {score === null ? (
                  <button className="btn-primary px-8 py-3 border-2 border-[#3ed6b6] rounded-lg text-lg fade-in-scale mt-2 mx-auto" onClick={validateQuiz}>
                    Valider
                  </button>
                ) : (
                  <div className="text-center mt-4 fade-in-scale w-full">
                    <div className="bg-[#10171a] border-l-4 border-[#3ed6b6] p-6 rounded-xl mb-4 max-w-xl mx-auto">
                      <p className="text-lg mb-2 text-main font-bold">Score : <span className="text-[#3ed6b6] font-bold">{score}%</span></p>
                    </div>
                    <button className="btn-primary px-8 py-3 border-2 border-[#3ed6b6] rounded-lg text-lg mx-auto" onClick={() => { setShowQuiz(false); setScore(null); setAnswers({}) }}>
                      Revoir le module
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 card p-8 fade-in fade-in-delay-3">
        <div className="text-lg">
          <span className="text-secondary">Votre progression : </span>
          <span className="text-[#3ed6b6] font-bold">{progression.filter(Boolean).length}/{modules.length}</span>
          <span className="text-secondary"> modules terminés ({Math.round((progression.filter(Boolean).length / modules.length) * 100)} %)</span>
        </div>
        <button className="btn-primary px-8 py-3 border-2 border-[#3ed6b6] rounded-lg text-lg" onClick={() => setPremium(true)}>
          Voir tous les modules (Premium)
        </button>
      </div>
    </div>
  )
} 
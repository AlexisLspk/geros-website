import { useState, useEffect } from 'react'
import { HiOutlineChat, HiOutlineUserGroup, HiOutlineLockClosed } from 'react-icons/hi'

const messagesInit = [
  { auteur: 'Marie (infirmière)', texte: 'Comment gérer un patient agité la nuit ?' },
  { auteur: 'Paul (étudiant)', texte: 'Essayez une routine apaisante avant le coucher !' },
]

const sujetsPopulaires = [
  { titre: 'Gestion du stress en EHPAD', count: 12 },
  { titre: 'Conseils pour les chutes', count: 8 },
]

export default function Communaute() {
  const [messages, setMessages] = useState(messagesInit)
  const [input, setInput] = useState('')
  const [premium, setPremium] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [userInfo, setUserInfo] = useState({ prenom: '', profession: '' })
  const [showUserPopup, setShowUserPopup] = useState(false)

  // Affiche le pop-up à la première visite
  useEffect(() => {
    const stored = localStorage.getItem('geros_user_info')
    if (!stored) {
      setShowUserPopup(true)
    } else {
      setUserInfo(JSON.parse(stored))
    }
  }, [])

  const handleUserPopupSubmit = (e) => {
    e.preventDefault()
    if (userInfo.prenom.trim() && userInfo.profession.trim()) {
      localStorage.setItem('geros_user_info', JSON.stringify(userInfo))
      setShowUserPopup(false)
    }
  }

  const handleSend = e => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, { auteur: `${userInfo.prenom} (${userInfo.profession})`, texte: input }])
    setInput('')
  }

  const handleJoin = () => {
    if (!premium) setShowPopup(true)
    else alert('Accès premium débloqué !')
  }

  return (
    <div className="relative max-w-6xl mx-auto my-12 px-4 fade-in fade-in-delay-1">
      <div className="text-center max-w-5xl mx-auto mb-10">
        <h1 className="title-main font-logo holo-title text-4xl md:text-5xl lg:text-6xl mb-6 uppercase font-bold leading-tight md:leading-tight lg:leading-tight">
          Communauté
        </h1>
      </div>

      {/* Pop-up première visite */}
      {showUserPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <form className="card flex flex-col items-center p-8 max-w-xs w-full" onSubmit={handleUserPopupSubmit}>
            <h2 className="text-xl font-bold mb-4 text-[#3ed6b6]">Bienvenue sur la communauté Geros !</h2>
            <label className="w-full mb-2 text-main font-semibold">Prénom</label>
            <input
              className="input-dark w-full mb-4 px-4 py-2 rounded-lg border border-[#3ed6b6]/30 bg-[#10171a]"
              value={userInfo.prenom}
              onChange={e => setUserInfo({ ...userInfo, prenom: e.target.value })}
              placeholder="Votre prénom"
              required
            />
            <label className="w-full mb-2 text-main font-semibold">Profession</label>
            <input
              className="input-dark w-full mb-4 px-4 py-2 rounded-lg border border-[#3ed6b6]/30 bg-[#10171a]"
              value={userInfo.profession}
              onChange={e => setUserInfo({ ...userInfo, profession: e.target.value })}
              placeholder="(ex : étudiant, soignant...)"
              required
            />
            <button className="btn-primary px-8 py-2 mt-2 border-2 border-[#3ed6b6] rounded-lg text-lg w-full" type="submit">
              Accéder à la communauté
            </button>
          </form>
        </div>
      )}

      <div className="card p-8 mb-12 fade-in fade-in-delay-2">
        <h2 className="title-section mb-1">Fil de discussion</h2>
        <div className="space-y-3 mb-4">
          {messages.map((m, i) => (
            <div key={i} className="bg-[#10171a] rounded p-3 text-main"><span className="font-semibold text-[#4ECDC4]">{m.auteur} :</span> {m.texte}</div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex gap-2 mt-4">
          <input value={input} onChange={e => setInput(e.target.value)} className="input-dark" placeholder="Écrire un message…" />
          <button className="btn-primary px-6">Envoyer</button>
        </form>
      </div>

      <div className="card p-8 mb-12 fade-in fade-in-delay-3">
        <h2 className="title-section mb-1">Sujets populaires</h2>
        <ul className="divide-y divide-[#3ed6b6]/20 mb-4">
          {sujetsPopulaires.map((s, i) => (
            <li key={i} className="py-2 flex items-center justify-between text-main">
              <span>{s.titre} <span className="text-[#4ECDC4]">({s.count} messages)</span></span>
              <button className="btn-primary px-4 py-1 text-sm flex items-center gap-1" onClick={handleJoin}>
                Rejoindre <HiOutlineLockClosed className="inline w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="card flex flex-col items-center p-8">
            <p className="mb-4 text-main text-lg">Accès réservé aux membres Premium.</p>
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
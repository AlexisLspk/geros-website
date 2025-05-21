import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import BackgroundEffect from './BackgroundEffect';

export default function Auth() {
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Empêche le scroll quand la page est affichée
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, []);

  // Gestion de l'inscription
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (password !== confirm) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    if (!prenom.trim() || !nom.trim()) {
      setError('Merci de renseigner votre prénom et votre nom.');
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setLoading(false);
      setError(error.message);
      return;
    }
    // Ajout des infos dans la table users
    if (data?.user) {
      await supabase.from('users').upsert({
        id: data.user.id,
        email,
        prenom,
        nom,
        role
      });
    }
    setLoading(false);
    setMessage("Si un compte n'existe pas avec cette adresse, vous recevrez un email de confirmation. Sinon, veuillez utiliser la page Se connecter.");
  };

  // Gestion de la connexion
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else setMessage('Connexion réussie !');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#10171a] p-4">
      <BackgroundEffect />
      <div className="w-full max-w-2xl bg-[#162024]/80 rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#3ed6b6]/30 relative z-10 fade-in fade-in-delay-1">
        <div className="flex mb-8 gap-1">
          <button
            className={`flex-1 py-2 rounded-t-lg font-bold font-logo text-lg relative transition-all duration-300
              ${tab === 'login' ? 'bg-[#3ed6b6]/10 text-[#3ed6b6] holo-title' : 'bg-transparent text-white/60'}
            `}
            style={{transitionProperty: 'background, color, box-shadow'}} 
            onClick={() => setTab('login')}
          >
            Se connecter
            {tab === 'login' && (
              <span className="absolute left-4 right-4 -bottom-1 h-1 rounded bg-gradient-to-r from-[#3ed6b6] via-[#4ecdc4] to-[#3ed6b6] opacity-80 animate-pulse" />
            )}
          </button>
          <button
            className={`flex-1 py-2 rounded-t-lg font-bold font-logo text-lg relative transition-all duration-300
              ${tab === 'signup' ? 'bg-[#3ed6b6]/10 text-[#3ed6b6] holo-title' : 'bg-transparent text-white/60'}
            `}
            style={{transitionProperty: 'background, color, box-shadow'}} 
            onClick={() => setTab('signup')}
          >
            S'inscrire
            {tab === 'signup' && (
              <span className="absolute left-4 right-4 -bottom-1 h-1 rounded bg-gradient-to-r from-[#3ed6b6] via-[#4ecdc4] to-[#3ed6b6] opacity-80 animate-pulse" />
            )}
          </button>
        </div>
        <h2 className="text-2xl font-logo holo-title text-center mb-8">{tab === 'login' ? 'Connexion à Geros' : 'Créer un compte Geros'}</h2>
        {tab === 'signup' && (
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Prénom" value={prenom} onChange={e => setPrenom(e.target.value)} required className="input-dark" />
              <input type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} required className="input-dark" />
            </div>
            <div className="relative">
              <select
                value={role}
                onChange={e => setRole(e.target.value)}
                className="input-dark appearance-none pr-10"
                required
              >
                <option value="" disabled>Choisir un rôle</option>
                <option value="soignant">Soignant</option>
                <option value="aidant">Aidant</option>
                <option value="famille">Famille</option>
                <option value="patient">Patient</option>
                <option value="etudiant">Étudiant</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center" style={{height: '1.2rem'}}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8L10 12L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                </svg>
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="input-dark" />
              <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required className="input-dark" />
            </div>
            <input type="password" placeholder="Confirmer le mot de passe" value={confirm} onChange={e => setConfirm(e.target.value)} required className="input-dark" />
            {error && <div className="text-red-400 text-sm font-semibold">{error}</div>}
            {message && <div className="text-green-400 text-sm font-semibold">{message}</div>}
            <button type="submit" className="btn-primary mt-2" disabled={loading}>{loading ? 'Chargement...' : "S'inscrire"}</button>
          </form>
        )}
        {tab === 'login' && (
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="input-dark" />
            <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required className="input-dark" />
            {error && <div className="text-red-400 text-sm font-semibold">{error}</div>}
            {message && <div className="text-green-400 text-sm font-semibold">{message}</div>}
            <button type="submit" className="btn-primary mt-2" disabled={loading}>{loading ? 'Chargement...' : 'Se connecter'}</button>
          </form>
        )}
      </div>
    </div>
  );
} 
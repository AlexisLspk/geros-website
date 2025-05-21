import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Récupère l'utilisateur courant
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null);
    });
    // Écoute les changements d'auth
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent" style={{backdropFilter: 'blur(8px)'}}>
      <div className="relative w-full flex items-center justify-center py-2" style={{minHeight: '68px'}}>
        {/* Logo parfaitement collé à gauche */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-8 flex-shrink-0">
          <Link to="/" className="flex items-center select-none">
            <img src="/geroslogo.png" alt="Logo Geros" className="h-16 w-auto object-contain" style={{marginTop: 2}} />
          </Link>
        </div>
        {/* Liens principaux centrés */}
        <ul className="flex gap-8 items-center font-semibold text-[#1A2A2A] bg-transparent mx-auto">
          <li><Link to="/" className="nav-holo">Accueil</Link></li>
          <li><Link to="/formation" className="nav-holo">Formation</Link></li>
          <li><Link to="/plans-soins" className="nav-holo">Plans de soins</Link></li>
          <li><Link to="/communaute" className="nav-holo">Communauté</Link></li>
          <li><Link to="/tarifs" className="nav-holo">Tarifs</Link></li>
          <li><Link to="/a-propos" className="nav-holo">À propos</Link></li>
        </ul>
        {/* Auth parfaitement collé à droite */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-8 flex items-center gap-4 flex-shrink-0">
          {user ? (
            <>
              <Link to="/profile" className="nav-holo" style={{color: '#3ed6b6', fontWeight: 700, border: '2px solid #3ed6b6', borderRadius: '0.5rem', padding: '0.5rem 1.2rem', background: 'rgba(62,214,182,0.08)', boxShadow: '0 2px 8px 0 #3ed6b622', transition: 'all 0.2s'}}>
                Profil
              </Link>
            </>
          ) : (
            <Link to="/auth" className="nav-holo" style={{color: '#3ed6b6'}}>Se connecter</Link>
          )}
        </div>
      </div>
    </nav>
  );
} 
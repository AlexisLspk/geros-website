import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        const { data } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen bg-[#10171a]">Chargement...</div>;
  if (!user) return <div className="flex justify-center items-center min-h-screen bg-[#10171a]">Veuillez vous connecter.</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#10171a] px-2">
      <div className="bg-[#162024]/90 border border-[#3ed6b6]/30 rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-logo holo-title text-center mb-8">Profil utilisateur</h2>
        <div className="w-full mb-4 flex flex-col md:flex-row md:gap-4">
          <div className="flex-1 mb-2 md:mb-0">
            <span className="font-semibold text-[#3ed6b6]">Prénom :</span> <span className="text-white/90">{profile?.prenom || '-'}</span>
          </div>
          <div className="flex-1">
            <span className="font-semibold text-[#3ed6b6]">Nom :</span> <span className="text-white/90">{profile?.nom || '-'}</span>
          </div>
        </div>
        <div className="w-full mb-4">
          <span className="font-semibold text-[#3ed6b6]">Email :</span> <span className="text-white/90">{user.email}</span>
        </div>
        <div className="w-full mb-4">
          <span className="font-semibold text-[#3ed6b6]">Rôle :</span> <span className="text-white/90 capitalize">{profile?.role || 'user'}</span>
        </div>
        <div className="w-full mb-8">
          <span className="font-semibold text-[#3ed6b6]">Progression :</span> <span className="text-white/90">{profile?.progression ? `${profile.progression.modules?.length || 0}/4 modules terminés` : '0/4 modules terminés'}</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full py-3 mt-2 rounded-lg font-bold text-lg border-2 border-[#3ed6b6] text-[#3ed6b6] bg-[#162024] hover:bg-[#3ed6b6] hover:text-[#10171a] transition-colors shadow-md"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
} 
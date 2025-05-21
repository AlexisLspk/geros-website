import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Accueil from './components/Accueil.jsx'
import Formation from './components/Formation.jsx'
import PlansSoins from './components/PlansSoins.jsx'
import Communaute from './components/Communaute.jsx'
import Tarifs from './components/Tarifs.jsx'
import APropos from './components/APropos.jsx'
import BackgroundEffect from './components/BackgroundEffect.jsx'
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import { useEffect } from 'react';
// La page APropos sera créée ensuite

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#10171a] text-white">
        <BackgroundEffect />
        <Navbar />
        <div className="pt-20"> {/* Pour ne pas masquer le contenu sous la navbar fixe */}
          <ScrollToTop />
          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/formation" element={<Formation />} />
              <Route path="/plans-soins" element={<PlansSoins />} />
              <Route path="/communaute" element={<Communaute />} />
              <Route path="/tarifs" element={<Tarifs />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
        <footer className="bg-transparent text-[#4ecdc4] p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2024 Geros - Tous droits réservés</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App 
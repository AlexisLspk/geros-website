import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Accueil from './components/Accueil'
import Formation from './components/Formation'
import PlansSoins from './components/PlansSoins'
import Communaute from './components/Communaute'
import Tarifs from './components/Tarifs'
import APropos from './components/APropos'
import BackgroundEffect from './components/BackgroundEffect'
// La page APropos sera créée ensuite

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#10171a] text-white">
        <BackgroundEffect />
        {/* Header */}
        <header className="bg-transparent p-2 max-h-16">
          <div className="flex justify-between items-center pl-2 pr-4">
            <Link to="/">
              <img src="/geroslogo.png" alt="Logo Geros" className="h-20 w-auto object-contain cursor-pointer" />
            </Link>
            <nav>
              <ul className="flex space-x-10">
                <li><Link to="/" className="nav-holo">Accueil</Link></li>
                <li><Link to="/formation" className="nav-holo">Formation</Link></li>
                <li><Link to="/plans-soins" className="nav-holo">Plans de soins</Link></li>
                <li><Link to="/communaute" className="nav-holo">Communauté</Link></li>
                <li><Link to="/tarifs" className="nav-holo">Tarifs</Link></li>
                <li><Link to="/a-propos" className="nav-holo">À propos</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/plans-soins" element={<PlansSoins />} />
            <Route path="/communaute" element={<Communaute />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/a-propos" element={<APropos />} />
          </Routes>
        </main>

        {/* Footer */}
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
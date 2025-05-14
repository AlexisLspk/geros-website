import { HiOutlineInformationCircle, HiOutlineChartBar, HiOutlineMail } from 'react-icons/hi'

export default function APropos() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-6">
        <HiOutlineInformationCircle className="w-8 h-8 text-[#4ECDC4]" />
        <h1 className="text-2xl font-bold text-[#4ECDC4]">À propos</h1>
      </div>
      <div className="bg-[#162024] rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-bold mb-2 text-[#3ed6b6]">Vision</h2>
        <p className="text-white/80 mb-2">Rendre la gériatrie attractive et efficace grâce au numérique.</p>
        <p className="text-white/80 mb-2">Former, Soigner, Connecter – La gériatrie réinventée.</p>
      </div>
      <div className="bg-[#162024] rounded-xl p-6 shadow-md mb-8 flex flex-col md:flex-row items-center gap-6">
        <HiOutlineChartBar className="w-10 h-10 text-[#3ed6b6]" />
        <div>
          <h2 className="text-lg font-semibold mb-1 text-[#3ed6b6]">Statistiques</h2>
          <ul className="text-white/80">
            <li>Objectif : <span className="font-bold">+20 % d'efficacité d'ici 2025</span></li>
            <li>Déjà <span className="font-bold">5 EHPAD pilotes</span> conquis</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#162024] rounded-xl p-6 shadow-md mb-8 flex flex-col md:flex-row items-center gap-6">
        <HiOutlineMail className="w-10 h-10 text-[#4ECDC4]" />
        <div>
          <h2 className="text-lg font-semibold mb-1 text-[#3ed6b6]">Contact</h2>
          <p className="text-white/80 mb-2">Nous contacter : <a href="mailto:contact@geros.fr" className="underline text-[#4ECDC4]">contact@geros.fr</a></p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#4ECDC4]">LinkedIn</a>
            <a href="#" className="hover:text-[#4ECDC4]">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="btn-primary text-lg px-8 py-3">Testez gratuitement</button>
      </div>
    </div>
  )
} 
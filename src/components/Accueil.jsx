import Banniere from './Banniere'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineChartBar, HiOutlineUserGroup, HiOutlineHeart, HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import ParticulesFloues from './ParticulesFloues'
import { MdSchool, MdHealing, MdPeople } from 'react-icons/md'

export default function Accueil() {
  return (
    <div className="relative max-w-6xl mx-auto">
      <ParticulesFloues />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 pb-20 fade-in fade-in-delay-1">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="title-main font-logo holo-title text-4xl md:text-5xl lg:text-6xl mb-6 mt-8 uppercase font-bold leading-tight md:leading-tight lg:leading-tight">
            La nouvelle ère de la gériatrie commence ici.
          </h1>
          <div className="my-12 fade-in fade-in-delay-2">
            <p className="text-main text-xl md:text-2xl mb-2 font-semibold">
              Former, connecter et soigner autrement grâce aux technologies numériques.
            </p>
            <p className="text-secondary text-base md:text-lg max-w-3xl mx-auto">
              Geros repense le vieillissement avec des outils numériques conçus pour renforcer l'autonomie, la connexion humaine et l'efficacité des soins, un accompagnement complet pour les professionnels du soin et les établissements.
            </p>
          </div>
          <div className="flex justify-center mb-12 fade-in fade-in-delay-3">
            <Link to="/formation">
              <button className="btn-primary px-8 py-4 text-lg flex items-center gap-2 group border-2 border-[#3ed6b6] rounded-lg">
                Commencer gratuitement
                <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          {/* Indication scroll vers Pourquoi Geros */}
          <div className="flex flex-col items-center my-6 fade-in fade-in-delay-4">
            <span className="font-logo holo-title text-xl md:text-2xl font-bold uppercase mb-1 select-none">
              Pourquoi Geros ?
            </span>
            <span className="inline-block animate-arrow-down-straight mt-1" style={{fontSize: '1.5rem'}}>
              ↓
            </span>
          </div>
        </div>
      </div>

      {/* Section Pourquoi Geros ? */}
      <section className="my-12 px-4 fade-in fade-in-delay-5">
        <h2 className="title-section text-4xl text-center mb-8 font-bold">Pour repenser la gériatrie&nbsp;!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {/* Formation intelligente */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#3ed6b6]/10 flex items-center justify-center mb-6 text-5xl">
              <MdSchool className="w-16 h-16 text-[#3ed6b6]" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Formation intelligente</h3>
            <p className="text-secondary text-lg">Des modules interactifs pensés pour les soignants d'aujourd'hui.</p>
          </div>
          {/* Soins personnalisés */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#3ed6b6]/10 flex items-center justify-center mb-6 text-5xl">
              <MdHealing className="w-16 h-16 text-[#3ed6b6]" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Soins personnalisés</h3>
            <p className="text-secondary text-lg">Outils numériques pour des plans de soins clairs et réactifs.</p>
          </div>
          {/* Connexion humaine */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#3ed6b6]/10 flex items-center justify-center mb-6 text-5xl">
              <MdPeople className="w-16 h-16 text-[#3ed6b6]" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Connexion humaine</h3>
            <p className="text-secondary text-lg">Créez du lien entre résidents, familles et équipes de soin.</p>
          </div>
        </div>
      </section>

      {/* Section Nos solutions */}
      <section id="nos-solutions" className="my-24 px-4 fade-in fade-in-delay-6">
        <h2 className="title-section text-4xl text-center mb-14 font-bold">Nos solutions</h2>
        <p className="text-main text-2xl text-center mb-14">Nos outils au service de votre impact</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Formation continue */}
          <div className="card card-holo transition-transform duration-300 hover:scale-105 p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Formation continue</h3>
            <p className="text-main text-xl">Capsules vidéos, quiz, cas pratiques</p>
          </div>
          {/* Plans de soins dynamiques */}
          <div className="card card-holo transition-transform duration-300 hover:scale-105 p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Plans de soins dynamiques</h3>
            <p className="text-main text-xl">Création assistée, actualisation rapide</p>
          </div>
          {/* Plateforme de communication */}
          <div className="card card-holo transition-transform duration-300 hover:scale-105 p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Plateforme de communication</h3>
            <p className="text-main text-xl">Liaison familles/soignants</p>
          </div>
          {/* Dashboard analytique */}
          <div className="card card-holo transition-transform duration-300 hover:scale-105 p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Dashboard analytique</h3>
            <p className="text-main text-xl">Suivi des progrès & qualité des soins</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="my-24 px-4 fade-in fade-in-delay-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          <div className="card p-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-[#3ed6b6] mb-2">+20%</span>
              <span className="text-secondary text-center text-lg md:text-xl">d'efficacité visée d'ici 2025</span>
            </div>
          </div>
          <div className="card p-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-[#3ed6b6] mb-2">98%</span>
              <span className="text-secondary text-center text-lg md:text-xl">de satisfaction utilisateurs</span>
            </div>
          </div>
          <div className="card p-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-[#3ed6b6] mb-2">1,2M</span>
              <span className="text-secondary text-center text-lg md:text-xl">personnes concernées par Alzheimer en France</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section (nouvelle version) */}
      <section className="text-center my-24 px-4 fade-in fade-in-delay-3">
        <h2 className="title-section text-3xl md:text-4xl mb-8 font-bold">Prêt à transformer l'expérience du vieillissement&nbsp;?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tarifs">
            <button className="btn-primary px-8 py-4 text-lg">Demander une démo</button>
          </Link>
          <Link to="/tarifs">
            <button className="px-8 py-4 text-lg border-2 border-[#3ed6b6] text-[#3ed6b6] rounded-lg hover:bg-[#3ed6b6] hover:text-white transition-colors">Découvrir les tarifs</button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <div className="flex justify-center my-24 px-4 fade-in fade-in-delay-4">
        <div className="card flex flex-col items-center py-10 px-8 w-full max-w-xl shadow-lg border border-[#3ed6b6]/30">
          <div className="flex items-center gap-3 mb-4">
            <HiOutlineMail className="w-7 h-7 text-[#3ed6b6]" />
            <h2 className="title-section text-2xl mb-0">Contact</h2>
          </div>
          <a href="mailto:contact@geros.fr" className="btn-primary px-6 py-3 mb-6 text-lg w-full text-center">contact@geros.fr</a>
          <div className="flex gap-8 mt-2">
            <a href="#" className="text-[#3ed6b6] hover:text-[#4ECDC4] text-3xl transition-colors" title="LinkedIn" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="text-[#3ed6b6] hover:text-[#4ECDC4] text-3xl transition-colors" title="Instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 
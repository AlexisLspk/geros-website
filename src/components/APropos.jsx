import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineUserGroup, HiOutlineChartBar, HiOutlineLightBulb } from 'react-icons/hi';
import { MdSchool, MdHealing, MdPeople } from 'react-icons/md';

export default function APropos() {
  return (
    <div className="relative max-w-6xl mx-auto my-12 px-4">
      {/* Hero Section */}
      <div className="text-center max-w-5xl mx-auto mb-16 fade-in fade-in-delay-1">
        <h1 className="title-main font-logo holo-title text-4xl md:text-5xl lg:text-6xl mb-6 uppercase font-bold leading-tight">
          Notre histoire
        </h1>
        <p className="text-main text-xl md:text-2xl mb-8">
          Une vision née d'une expérience personnelle, pour transformer la gériatrie
        </p>
      </div>

      {/* Fondateur Section */}
      <div className="card p-8 mb-16 fade-in fade-in-delay-2">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-[#3ed6b6]/10 flex items-center justify-center">
            <HiOutlineUserGroup className="w-16 h-16 text-[#3ed6b6]" />
          </div>
          <div className="flex-1">
            <h2 className="title-section text-2xl md:text-3xl mb-4">Alexis Lascou-Prokop</h2>
            <p className="text-main text-lg mb-4">
              Fondateur de Geros 1.0, originaire de Nantes, j'ai vécu l'expérience de l'accompagnement de mon père dans un EHPAD médicalisé. Cette expérience personnelle m'a révélé les défis majeurs de la gériatrie : manque de personnel, charge administrative écrasante, et manque de transparence dans certaines pratiques.
            </p>
          </div>
        </div>
      </div>

      {/* Contexte Section */}
      <div className="mb-16 fade-in fade-in-delay-3">
        <h2 className="title-section text-3xl text-center mb-12">La gériatrie en France : un défi majeur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6">
            <div className="text-4xl font-bold text-[#3ed6b6] mb-2">21.9%</div>
            <p className="text-main">de la population française aura plus de 65 ans en 2025 (14.7 millions)</p>
          </div>
          <div className="card p-6">
            <div className="text-4xl font-bold text-[#3ed6b6] mb-2">1.5M</div>
            <p className="text-main">personnes en situation de dépendance en 2025</p>
          </div>
          <div className="card p-6">
            <div className="text-4xl font-bold text-[#3ed6b6] mb-2">-25%</div>
            <p className="text-main">de vocations depuis la crise COVID</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-16 fade-in fade-in-delay-4">
        <h2 className="title-section text-3xl text-center mb-12">Notre mission</h2>
        <div className="card p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Rendre la gériatrie attractive et efficace grâce au numérique</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#3ed6b6]/10 flex items-center justify-center mb-4">
                <MdSchool className="w-10 h-10 text-[#3ed6b6]" />
              </div>
              <h4 className="text-xl font-bold mb-2">Former</h4>
              <p className="text-main">Modules interactifs en 5 minutes</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#3ed6b6]/10 flex items-center justify-center mb-4">
                <MdHealing className="w-10 h-10 text-[#3ed6b6]" />
              </div>
              <h4 className="text-xl font-bold mb-2">Soigner</h4>
              <p className="text-main">Plans de soins en 1 clic</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#3ed6b6]/10 flex items-center justify-center mb-4">
                <MdPeople className="w-10 h-10 text-[#3ed6b6]" />
              </div>
              <h4 className="text-xl font-bold mb-2">Connecter</h4>
              <p className="text-main">Communauté active et engagée</p>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Section */}
      <div className="mb-16 fade-in fade-in-delay-5">
        <h2 className="title-section text-3xl text-center mb-12">Notre engagement pour la transparence</h2>
        <div className="card p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-main text-lg mb-6">
                Après les révélations choquantes du livre "Les Fossoyeurs" en 2022, nous avons renforcé notre engagement pour la transparence. Nos plans de soins sont entièrement traçables et accessibles aux soignants et aux familles.
              </p>
              <div className="bg-[#3ed6b6]/10 p-6 rounded-lg">
                <p className="text-lg italic">"Geros a réduit notre charge administrative de 20% en un mois !"</p>
                <p className="text-right mt-2">– Claire, directrice d'EHPAD</p>
              </div>
            </div>
            <div className="w-32 h-32 rounded-full bg-[#3ed6b6]/10 flex items-center justify-center">
              <HiOutlineLightBulb className="w-16 h-16 text-[#3ed6b6]" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center fade-in fade-in-delay-7">
        <h2 className="title-section text-3xl mb-8">Rejoignez-nous pour transformer la gériatrie !</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="btn-primary px-8 py-4 text-lg">Nous contacter</button>
          </Link>
          <Link to="/tarifs">
            <button className="px-8 py-4 text-lg border-2 border-[#3ed6b6] text-[#3ed6b6] rounded-lg hover:bg-[#3ed6b6] hover:text-white transition-colors">
              Découvrir nos tarifs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 
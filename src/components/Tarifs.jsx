import { HiOutlineStar, HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineCheck, HiOutlineX, HiOutlineQuestionMarkCircle, HiOutlineMail } from 'react-icons/hi'

const features = [
  { name: 'Modules de formation de base', free: true, premium: true },
  { name: 'Plans de soins (1/mois)', free: true, premium: true },
  { name: 'Accès à la communauté', free: false, premium: true },
  { name: 'Modules premium exclusifs', free: false, premium: true },
  { name: 'Plans de soins illimités', free: false, premium: true },
  { name: 'Suivi personnalisé', free: false, premium: true },
  { name: 'Nouveautés en avant-première', free: false, premium: true },
  { name: 'Support prioritaire', free: false, premium: true }
]

const faqItems = [
  {
    question: "Comment fonctionne l'essai gratuit ?",
    reponse: "L'essai gratuit vous donne accès à un module de formation et un plan de soins par mois. Aucune carte bancaire n'est requise."
  },
  {
    question: "Puis-je annuler mon abonnement Premium ?",
    reponse: "Oui, vous pouvez annuler votre abonnement à tout moment. L'accès Premium reste actif jusqu'à la fin de la période payée."
  },
  {
    question: "Comment obtenir un devis pour mon établissement ?",
    reponse: "Remplissez le formulaire de contact ou appelez-nous. Nous étudierons vos besoins spécifiques pour vous proposer une offre adaptée."
  }
]

export default function Tarifs() {
  return (
    <div className="relative max-w-6xl mx-auto mt-12 px-4 fade-in fade-in-delay-1">
      <div className="text-center max-w-5xl mx-auto mb-10">
        <h1 className="title-main font-logo holo-title text-4xl md:text-5xl lg:text-6xl mb-6 uppercase font-bold leading-tight md:leading-tight lg:leading-tight">
          Tarifs
        </h1>
      </div>

      {/* Section Particuliers */}
      <div className="mb-20">
        <h2 className="title-section text-3xl text-center mb-12">Pour les professionnels de santé ou les étudiants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Plan gratuit */}
          <div className="card p-10 flex flex-col items-center justify-between h-full fade-in fade-in-delay-2">
            <h2 className="text-2xl font-bold mb-4 text-[#3ed6b6] font-logo uppercase">Plan gratuit</h2>
            <ul className="mb-6 text-white/80 text-lg text-center">
              <li>1 module gratuit</li>
              <li>1 plan/mois</li>
            </ul>
            <span className="text-2xl font-bold text-[#3ed6b6] mb-6">Gratuit</span>
            <button className="btn-primary text-lg px-8 py-3 border-2 border-[#3ed6b6] rounded-lg">Commencer gratuitement</button>
          </div>
          {/* Plan premium */}
          <div className="card p-10 flex flex-col items-center justify-between h-full fade-in fade-in-delay-3">
            <h2 className="text-2xl font-bold mb-4 text-[#3ed6b6] font-logo uppercase">Premium</h2>
            <ul className="mb-6 text-white/80 text-lg text-center">
              <li>Accès illimité à tous les modules</li>
              <li>Plans illimités</li>
              <li>Accès à la communauté</li>
            </ul>
            <span className="text-2xl font-bold text-[#3ed6b6] mb-6">9,99 €/mois</span>
            <button className="btn-primary text-lg px-8 py-3 border-2 border-[#3ed6b6] rounded-lg">Passer au Premium</button>
          </div>
        </div>

        {/* Tableau comparatif */}
        <div className="card p-8 mb-12 fade-in fade-in-delay-4">
          <h3 className="text-xl font-bold mb-6 text-center">Comparatif des fonctionnalités</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#3ed6b6]/20">
                  <th className="text-left py-4 px-4">Fonctionnalité</th>
                  <th className="text-center py-4 px-4">Gratuit</th>
                  <th className="text-center py-4 px-4">Premium</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={i} className="border-b border-[#3ed6b6]/20">
                    <td className="py-4 px-4">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {feature.free ? <HiOutlineCheck className="w-6 h-6 text-[#3ed6b6] mx-auto" /> : <HiOutlineX className="w-6 h-6 text-red-500 mx-auto" />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {feature.premium ? <HiOutlineCheck className="w-6 h-6 text-[#3ed6b6] mx-auto" /> : <HiOutlineX className="w-6 h-6 text-red-500 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section Établissements */}
      <div className="mb-20">
        <h2 className="title-section text-3xl text-center mb-12">Pour les établissements</h2>
        <div className="card p-10 mb-12 fade-in fade-in-delay-5">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-[#3ed6b6]">Solution sur mesure</h3>
              <p className="text-white/80 mb-6">
                Chaque établissement a des besoins spécifiques. Notre approche personnalisée permet d'adapter la solution à votre structure :
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <HiOutlineCheck className="w-5 h-5 text-[#3ed6b6]" />
                  Nombre d'utilisateurs
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlineCheck className="w-5 h-5 text-[#3ed6b6]" />
                  Niveau de formation du personnel
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlineCheck className="w-5 h-5 text-[#3ed6b6]" />
                  Intégration dans les outils existants
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlineCheck className="w-5 h-5 text-[#3ed6b6]" />
                  Reporting RH personnalisé
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <HiOutlineBriefcase className="w-20 h-20 text-[#3ed6b6] mb-4" />
              <button className="btn-primary text-lg px-8 py-3 border-2 border-[#3ed6b6] rounded-lg">Demander un devis gratuit</button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-20">
        <h2 className="title-section text-3xl text-center mb-12">Questions fréquentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`card p-6 fade-in fade-in-delay-6${i === faqItems.length - 1 ? ' md:col-span-2 md:mx-auto md:w-1/2' : ''}`}
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <HiOutlineQuestionMarkCircle className="w-5 h-5 text-[#3ed6b6]" />
                {item.question}
              </h3>
              <p className="text-white/80">{item.reponse}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Besoin d'aide */}
      <div className="card p-8 flex flex-col items-center text-center fade-in fade-in-delay-7">
        <HiOutlineMail className="w-12 h-12 text-[#3ed6b6] mb-4" />
        <h2 className="text-2xl font-bold mb-2">Besoin d'aide ?</h2>
        <p className="text-white/80 mb-6">Notre équipe est là pour vous accompagner dans votre choix.</p>
        <button className="btn-primary text-lg px-8 py-3 border-2 border-[#3ed6b6] rounded-lg">Contactez-nous</button>
      </div>
    </div>
  )
} 
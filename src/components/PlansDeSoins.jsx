import { HiOutlineDocumentText, HiOutlineClock, HiOutlineLockClosed } from 'react-icons/hi'

export default function PlansDeSoins() {
  return (
    <div className="relative max-w-6xl mx-auto my-4 px-4 fade-in fade-in-delay-1">
      <div className="text-center max-w-5xl mx-auto mb-10">
        <h1 className="title-main font-logo holo-title text-4xl md:text-5xl lg:text-6xl mb-6 uppercase font-bold leading-tight md:leading-tight lg:leading-tight">
          Plans de soins
        </h1>
      </div>
      <div className="card p-8 mb-12 fade-in fade-in-delay-2">
        <h2 className="title-section mb-1">Générer un plan de soins</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-main mb-2">Patient</label>
            <input type="text" className="input-dark w-full" placeholder="Nom du patient" />
          </div>
          <div>
            <label className="block text-main mb-2">Pathologie</label>
            <input type="text" className="input-dark w-full" placeholder="Type de pathologie" />
          </div>
          <div>
            <label className="block text-main mb-2">Observations</label>
            <textarea className="input-dark w-full h-32" placeholder="Notes importantes..."></textarea>
          </div>
          <button className="btn-primary px-8 py-3 w-full">Générer le plan</button>
        </form>
      </div>

      <div className="card p-8 mb-12 fade-in fade-in-delay-3">
        <h2 className="title-section mb-1">Historique des plans</h2>
        <div className="space-y-4">
          <div className="bg-[#10171a] rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#4ECDC4]">Jean Dupont</span>
              <span className="text-sm text-white/60">Il y a 2 jours</span>
            </div>
            <p className="text-main mb-2">Alzheimer - Stade modéré</p>
            <button className="btn-primary px-4 py-1 text-sm">Voir le plan</button>
          </div>
          <div className="bg-[#10171a] rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#4ECDC4]">Marie Martin</span>
              <span className="text-sm text-white/60">Il y a 1 semaine</span>
            </div>
            <p className="text-main mb-2">Parkinson - Suivi quotidien</p>
            <button className="btn-primary px-4 py-1 text-sm">Voir le plan</button>
          </div>
        </div>
      </div>

      <div className="card p-8 mb-12 flex items-center gap-4 fade-in fade-in-delay-4">
        <HiOutlineLockClosed className="w-8 h-8 text-[#3ed6b6]" />
        <div>
          <h2 className="text-lg font-semibold mb-1 text-[#3ed6b6]">Limite atteinte</h2>
          <p className="text-white/80">Passez Premium pour générer des plans illimités</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="btn-primary text-lg px-8 py-3 border-2 border-[#3ed6b6] rounded-lg">Testez gratuitement</button>
      </div>
    </div>
  )
} 
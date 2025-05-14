import { HiOutlineLightBulb, HiOutlineClipboardCheck, HiOutlineChatAlt2 } from 'react-icons/hi'

const icons = {
  ampoule: <HiOutlineLightBulb className="text-[#4ECDC4] w-8 h-8" />,
  checklist: <HiOutlineClipboardCheck className="text-[#2E8B8C] w-8 h-8" />,
  chat: <HiOutlineChatAlt2 className="text-[#A3D8D0] w-8 h-8" />,
}

export default function Banniere({ texte, type }) {
  return (
    <div className="flex items-center gap-4 bg-[#162024] rounded-xl px-6 py-4 shadow-lg mb-8">
      {icons[type]}
      <span className="text-xl font-semibold text-white">{texte}</span>
    </div>
  )
} 
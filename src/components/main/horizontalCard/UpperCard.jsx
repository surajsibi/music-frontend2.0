import { Avatar } from '../../index'
import { useSelector } from 'react-redux'

// Palette of distinct colors for initial avatars (Google-style)
const INITIAL_AVATAR_COLORS = [
  '#6366f1', '#8b5cf6', '#a855f7', '#7c3aed', '#5b21b6', // indigo/purple
  '#0ea5e9', '#0284c7', '#0369a1', '#0c4a6e',           // blue
  '#10b981', '#059669', '#047857', '#065f46',           // emerald
  '#f59e0b', '#d97706', '#b45309',                       // amber
  '#ef4444', '#dc2626', '#b91c1c',                       // red
  '#ec4899', '#db2777', '#be185d',                       // pink
]

const getInitialBgColor = (letter) => {
  if (!letter) return INITIAL_AVATAR_COLORS[0]
  const index = (letter.toUpperCase().charCodeAt(0) - 65) % INITIAL_AVATAR_COLORS.length
  return INITIAL_AVATAR_COLORS[Math.max(0, index)]
}

const UpperCard = () => {
    const userData = useSelector((state) => state.auth.userData)
    const displayName = userData?.username || userData?.fullname || "You"
    const hasAvatar = !!userData?.avatar?.url
    const initial = (displayName && displayName[0]) ? displayName[0].toUpperCase() : "?"

    return (
        <div className='w-full flex items-center pt-5'>
            <div className='flex items-center gap-5'>
                <div className='flex-shrink-0'>
                    {hasAvatar ? (
                        <Avatar className="w-14 h-14" src={userData.avatar.url} />
                    ) : (
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl select-none"
                            style={{ backgroundColor: getInitialBgColor(initial) }}
                        >
                            {initial}
                        </div>
                    )}
                </div>
                <div>
                    <div className='text-[#aaa] font-medium text-lg capitalize'>{displayName}</div>
                    <div className='text-3xl font-bold'>For You</div>
                </div>
            </div>
        </div>
    )
}

export default UpperCard

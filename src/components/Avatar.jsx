import React from 'react'
import { useNavigate } from 'react-router-dom'

const Avatar = ({src,channelId}) => {
    const navigate = useNavigate()

    const handleAvatarClicked=(e)=>{
        e.stopPropagation()
    }
  return (
    <div>
      <img
        src={src}
        alt='avatar'
        className='w-10 h-10 rounded-full object-cover'
        onClick={handleAvatarClicked}
      />
    </div>
  )
}

export default Avatar

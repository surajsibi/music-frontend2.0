import React from 'react'
import { useNavigate } from 'react-router-dom'

const Avatar = ({src,channelId,className}) => {
    const navigate = useNavigate()

    const handleAvatarClicked=(e)=>{
        e.stopPropagation()
    }
  return (
    <div>
      <img
        src={src}
        alt='avatar'
        className={` rounded-full object-cover ${className || "w-10 h-10"}`}
        onClick={handleAvatarClicked}
      />
    </div>
  )
}

export default Avatar

import React from 'react'
import {Button} from "../../index"

const UpperCard = () => {
  return (
    <div className='text-white flex justify-between items-center'>
      <div className='text-3xl font-bold text-center'>
        Quick picks
      </div>
      <div className='flex justify-center items-center'>
        <Button
          className="text-sm font-semibold border border-[#aaa] hover:bg-[#3b3b3b] p-2 rounded-3xl"
          children="play All"        />
      </div>
    </div>
  )
}

export default UpperCard

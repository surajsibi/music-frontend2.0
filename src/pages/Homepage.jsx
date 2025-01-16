import React from 'react'
import { Genre,HorizontalCrad,TableCard } from '../components/main'

const Homepage = () => {
  return (
   <div>
     <div className=' h-[40vh] '>
      <Genre/>
    </div>
    <div className='h'>
    <HorizontalCrad/>
    </div>
    <div className='py-1 px-24'>
    <TableCard/>
    </div>
    <div className='w-full h-20'>hello</div>
   </div>
  )
}

export default Homepage

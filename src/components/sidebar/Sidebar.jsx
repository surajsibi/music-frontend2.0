import React from 'react'
import UpperSidebar from './UpperSidebar'
import LowerSidebar from './LowerSidebar'

const Sidebar = () => {
  return (
   <div>
     <div className='bg-black border-b-2'>
      <UpperSidebar/>
    </div>
    <div className='pt-4 px-3'>
        <LowerSidebar/>
    </div>
   </div>
  )
}

export default Sidebar

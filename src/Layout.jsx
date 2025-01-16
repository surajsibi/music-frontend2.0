import React from 'react'
import {Navbar,Sidebar} from './components/index'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
    <nav className='h-[9vh]'>
      <Navbar/>
    </nav>
    <div className='flex'>
    <aside className='h-[91vh] w-[17vw] bg-black'>
      <Sidebar/>
    </aside>
    <main className='h-[91vh] w-[83vw] border-l bg-black overflow-y-scroll scrollbarMain'>
      <Outlet/>
    </main>
    </div>
    </div>
  )
}

export default Layout

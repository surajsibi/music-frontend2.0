import React from 'react'
import Search from './Search'
import { Logo, Avatar } from '../index'
import {RxHamburgerMenu} from "../icons"

const Navbar = () => {
  return (
    <nav className='bg-black flex justify-between p-[10px]'>
      <div className='leftside flex ml-2 gap-5 items-center'>
        <div className=''> <RxHamburgerMenu size="30" color="white"/></div>
        <div className='flex items-center'>
          <Logo />
        </div>
      </div>
      <div className='searchbar w-[35%]'>
        <Search/>
      </div>
      <div className='rightSide mr-4' >
        <Avatar  src={"https://yt3.ggpht.com/xl5EH08el1YL4bmh1ww5xi0wxDUfQ_QmbqpoaphZy9qU2nnZUnbL7wTuBWNyp4Pb-VvkECw0=s88-c-k-c0x00ffffff-no-rj"}/>
      </div>
    </nav>
  )
}

export default Navbar

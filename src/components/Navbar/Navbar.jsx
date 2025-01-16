import React from 'react'
import Search from './Search'
import { Logo, Avatar } from '../index'
import {RxHamburgerMenu} from "../icons"
import { useDispatch, useSelector } from 'react-redux'
import { changeGenre } from '../../store/Slice/utilsSlice'

const Navbar = () => {
  const currentGenre = useSelector((state) => state.utils.currentGenre)
  const dispatch = useDispatch()
  const handleHome = ()=>{
    dispatch(changeGenre("defaultGenre"))
  }
  return (
    <nav className='bg-black flex justify-between p-[10px]'>
      <button onClick={handleHome} className='leftside flex ml-2 gap-5 items-center'>
        <div className=''> <RxHamburgerMenu size="30" color="white"/></div>
        <div className='flex items-center'>
          <Logo />
        </div>
      </button>
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

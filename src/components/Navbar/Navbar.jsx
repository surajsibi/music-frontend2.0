import React from 'react'
import Search from './Search'
import { Logo, Avatar } from '../index'
import {RxHamburgerMenu} from "../icons"
import { useDispatch, useSelector } from 'react-redux'
import { changeGenre } from '../../store/Slice/utilsSlice'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const currentGenre = useSelector((state) => state.utils.currentGenre)
  const avatar = useSelector((state)=> state.auth.userData)
  const navigate = useNavigate()
  
  
  const dispatch = useDispatch()
  const handleLogoClick =()=>{
    navigate("/music")
  }
  const handleHome = ()=>{
    dispatch(changeGenre("defaultGenre"))
  }
  return (
    <nav className='bg-black flex justify-between p-[10px]'>
      <button onClick={handleHome} className='leftside flex ml-2 gap-5 items-center'>
        <div className=''> <RxHamburgerMenu size="30" color="white"/></div>
        <div className='flex items-center hover:bg-white'>
          <Logo  />
        </div>
      </button>
      <div className='searchbar w-[35%]'>
        <Search/>
      </div>
      <div className='rightSide mr-4' >
        <Avatar  src={avatar?.avatar?.url} />
      </div>
    </nav>
  )
}

export default Navbar

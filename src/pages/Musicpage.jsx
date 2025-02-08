import React from 'react'
import {RightSide} from "../components/main/index"
import {FaPlay} from "../components/icons"
import LowerSide from '../components/main/Music page/LowerSide'
import { useSelector } from 'react-redux'

const Musicpage = () => {

    const currentSong = useSelector((state) => state.howler.currentSong)
    console.log(currentSong);
    
    return (
        <div className=' h-[100%] w-[100%]'>
            <div className='h-[88%]   flex  pt-[2%] px-[9%]'>
                <div className='h-full w-[60%]   flex justify-center items-center '>
                    <img className='w-[88%] rounded-lg' src={currentSong?.images?.[2]?.url} />
                </div>
                <div className='h-full w-[40%]  '><RightSide/></div>
            </div>
            
            <div className=' w-full'><LowerSide/></div>


        </div>
    )
}

export default Musicpage

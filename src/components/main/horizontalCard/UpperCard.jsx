import React from 'react'
import { Avatar,Button } from '../../index'
import { useSelector } from 'react-redux'

const UpperCard = () => {
    // const avatar = useSelector((state)=>state.auth.userData)
    return (
        <div className='w-full flex items-center justify-between '>
            <div className='flex items-center gap-5  pt-5'>
                <div className=''>
                    <Avatar className="w-14 h-14" src="songsimg/sultan.jpg" />
                    </div>
                <div>
                    <div className='text-[#aaa] font-medium text-lg'>Suraj</div>
                    <div className='text-3xl font-bold'>Listen again</div>
                </div>
            </div>
            <div className='flex items-center'>
                <Button
                    children="More "
                    className='text-sm font-semibold border border-[#aaa] hover:bg-[#3b3b3b] p-2 rounded-3xl'
                />
            </div>
        </div>
    )
}

export default UpperCard

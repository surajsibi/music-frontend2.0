import React from 'react'
import { Avatar,Button } from '../../index'

const UpperCard = () => {
    return (
        <div className='w-full flex items-center justify-between '>
            <div className='flex items-center gap-5  pt-5'>
                <div className=''>
                    <Avatar className="w-14 h-14" src={"https://yt3.ggpht.com/xl5EH08el1YL4bmh1ww5xi0wxDUfQ_QmbqpoaphZy9qU2nnZUnbL7wTuBWNyp4Pb-VvkECw0=s88-c-k-c0x00ffffff-no-rj"} />
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

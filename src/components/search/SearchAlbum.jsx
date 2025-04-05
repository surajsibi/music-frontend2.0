import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SearchAlbum = ({album}) => {
  console.log(album)
  const navigate = useNavigate()
  return (
     <div onClick={()=>navigate(`/album/${album.id}`)}>
          <div className=" flex  group ">
            <div className="">
              <div className="w-16 rounded-xl relative">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <FaPlay color="white" size={30} />
                </div>
                <img
                  className="rounded-lg"
                  src={album?.image?.[1]?.url}
                />
              </div>
            </div>
            <div className="flex justify-between  items-center w-full mx-9">
              <div className=" flex justify-center flex-col">
                <div>
                  <h1 className="text-2xl font-bold">{album?.title}</h1>
                </div>
                <div className="flex text-[#cec9c9] max-w-100 truncate border">
                {album?.description}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SearchAlbum

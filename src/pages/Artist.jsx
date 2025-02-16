import React from 'react'
import { Button } from "../components/index"
import {
    CiHeart,
    FcLike,
} from "../components/icons"
import { setCurrentSong } from '../store/Slice/howler'
import { useNavigate, NavLink } from 'react-router-dom'
import { FaPlay } from "../components/icons"
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getArtistById } from "../store/Slice/artistSlice"
import { useDispatch, useSelector } from 'react-redux'
import { setPlaylist } from '../store/Slice/howler'



const Artist = () => {
    function decodeHtmlEntities(text) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(text, "text/html");
        return doc.body.textContent;
    }
    function formatNumber(num) {
        if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + "B";
        } else if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(1).replace(/\.0$/, '') + "K";
        }
        return num.toString();
    }
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }



    const dispatch = useDispatch()

    const { id } = useParams()





    useEffect(() => {
        if (id) {
            dispatch(getArtistById(id))
        }
    }, [id]);

    const playlist = useSelector((state) => state.howler.songPlaylist)
    console.log(playlist, "this is playlist");



    const artist = useSelector((state) => state.artist.artists)
    console.log(artist, "this is artist");
    useEffect(() => {
        if (artist?.songs) {
            dispatch(setPlaylist(artist.songs)); // Set playlist only when songs are updated
        }
    }, [artist]);
    const currentSong = (song) => {
        dispatch(setCurrentSong(song))
    }
    const navigate = useNavigate()

    const handlePlay = () => {
        dispatch(setPlaylist(artist.songs))
        setCurrentSong(artist.songs[0])
        navigate("/music")
    }



    return (
        <div>
            <div className='flex w-full  items-center'>
                <div className='  py-5 px-8 '>
                    <img className=' h-[50vh]  rounded-[50%]' src={artist?.images?.[2]?.url} />
                </div>
                <div className='text-white '>
                    <div className='text-5xl font-semibold mb-3'> {decodeHtmlEntities(artist?.name)}</div>
                    <div className='flex gap-2'>
                        <div className='text-lg'>Artist</div>
                        <div className='text- items-center font-bold'>.</div>
                        <div className='text-lg'>{artist?.fanCount}</div>
                        <div className='text-lg'>Listeners</div>
                    </div>
                    <div className='mt-9'>
                        <button onClick={handlePlay} className='text-white  py-2 px-10 rounded-2xl font-bold bg-[#1a867a] cursor-pointer hover:bg-[#11645b]'>
                            Play
                        </button>



                    </div>
                </div>
            </div>
            <div className='px-16   flex flex-col  mt-10 '>
                <div className='text-white text-4xl font-bold'>
                    Songs
                </div>
                <div className='mt-5 flex flex-col gap-6'>
                    {artist?.songs?.map((art) => (
                        <NavLink
                            to={'/music'}
                            key={art._id} onClick={(e) => { currentSong(art) }} className='group  '>
                            <div className='flex  items-center'>
                                <div
                                    className='max-w-10 relative '
                                >
                                    <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}>
                                        <FaPlay color="white" size={25} />
                                    </div>
                                    <img className='w-full h-full rounded-md' src={art?.images?.[0]?.url} />
                                </div>
                                <div className='text-white font-bold  w-56 max-w-56 truncate ml-16'>{art?.name}</div>
                                <div className='text-[#9d9d9d] font-semibold  w-96 truncate'>
                                    {art?.artists.map((artt, index) => (
                                        <NavLink to={`/artist/${artt._id}`} onClick={(e) => e.stopPropagation()} key={index} className="hover:underline">
                                            {index > 0 && ", "} {/* Adds a comma between names */}
                                            {decodeHtmlEntities(artt.name)}
                                        </NavLink>
                                    ))}
                                </div>


                                <div className='  w-20 ml-16 text-[#9d9d9d] font-semibold'>{formatNumber(art?.playCount)}</div>

                                <div className='text-[#9d9d9d] font-semibold'>{art?.album?.name}</div>
                                <div className='text-[#9d9d9d] font-semibold  w-16 ml-16'>{formatTime(art?.duration)}</div>
                            </div>
                        </NavLink>
                    ))}



                    {/* <NavLink to={"/music"} onClick={currentSong} className='  group'>
                        <div className=' flex justify-between items-center'>
                            <div className='max-w-10 relative'>
                                <div
                                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}
                                >
                                    <FaPlay color="white" size={25} />
                                </div>
                                <img className='w-full h-full rounded-md' src='https://c.saavncdn.com/778/Sultan-Hindi-2016-20190329150247-50x50.jpg' />
                            </div>
                            <div className='text-white font-bold'>Bulleya (from "Sultan")</div>
                            <div className='text-[#9d9d9d] font-semibold'><NavLink className="hover:underline">Vishal &amp; Shekhar</NavLink>,<NavLink className="hover:underline">Papon</NavLink>,<NavLink className="hover:underline">Irshad Kamil</NavLink></div>
                            <div className='text-[#9d9d9d] font-semibold'>306M plays</div>
                            <div className='text-[#9d9d9d] font-semibold'>Sultan</div>
                            <div className='text-[#9d9d9d] font-semibold'>5:91</div>
                        </div>
                    </NavLink> */}

                </div>
            </div>
        </div>
    )
}

export default Artist

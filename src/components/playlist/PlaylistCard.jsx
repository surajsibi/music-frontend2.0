import React,{useEffect} from 'react'
import { RxCross2, FaPlus } from "../../components/icons"
import { changeSavePlaylist } from "../../store/Slice/utilsSlice"
import { useDispatch, useSelector } from 'react-redux'
import { addSongToPlaylist, deletePlaylistId, getAllPlaylist } from '../../store/Slice/playlistSlice'
import { changeNewPlaylist } from '../../store/Slice/utilsSlice'


const PlaylistCard = () => {
  const userData = useSelector((state) => state.auth.userData)
  const dispatch = useDispatch()
  const playlist = useSelector(state => state.playlist.playlists)
  const currPlaylist = useSelector(state => state.playlist.currentPlaylistId)

  const saveToPlaylist = (id) => {
    dispatch(addSongToPlaylist({ songId: currPlaylist, playlistId: id }))
    dispatch(getAllPlaylist(userData._id))
  }
 useEffect(() => {
        async function fetchPlaylists() {
            const result = await dispatch(getAllPlaylist(userData._id));
        }
        fetchPlaylists();
    }, [ userData]);

    
  const closeSavePlaylist = () => {
    dispatch(deletePlaylistId())
    dispatch(changeSavePlaylist())
  };

  const toogleNewPlaylist = () => {
    dispatch(changeNewPlaylist(""))
  }


  return (
    <div className='bg-[#212121] w-[35%] rounded-lg '>
      <div className='flex justify-between items-center py-4 px-6 border-b '>
        <div className='text-white font-bold text-2xl'>Save to playlist</div>
        <div onClick={() => { dispatch(changeSavePlaylist()) }} className='font-bold  cursor-pointer hover:bg-[#3e3e3e] rounded-[50%] p-1'><RxCross2 color='white' size={25} /></div>
      </div>
      <div className='text-white py-3 px-6 font-bold'>
        All playlist
      </div>
      <div className='overflow-y-auto h-[40vh]  scrollbarPlaylist'>
        {playlist?.map((item, index) =>
        (
          <div onClick={() => { saveToPlaylist(item._id) }} key={index} className='flex gap-5 mb-4 px-6 hover:bg-[#2e2e2e] p-2 cursor-pointer '>
            <div className='max-w-12 rounded-lg'>
              <img className='rounded-md' src={item.songs?.[0]?.images?.[0].url || item.song?.[0]?.image?.[0]?.url} />
            </div>
            <div className=''>
              <div className='text-white w-64 truncate font-bold'>{item?.name}</div>
              <div className='text-[#aaa] font-semibold'>{item?.songs?.length} songs</div>
            </div>
          </div>
        )
        )}




        {/* <div className='flex gap-5 mb-4 px-6 hover:bg-[#2e2e2e] p-2'>
          <div className='max-w-12 rounded-lg'>
            <img className='rounded-md' src='/utils/like.png' />
          </div>
          <div className=''>
            <div className='text-white  w-64 truncate font-bold'>Liked Music</div>
            <div className='text-[#aaa] font-semibold'>12 songs</div>
          </div>
        </div>
        <div className='flex gap-5 mb-4 px-6 hover:bg-[#2e2e2e] p-2'>
          <div className='max-w-12 rounded-lg'>
            <img className='rounded-md' src='/songsimg/sultan.jpg' />
          </div>
          <div className=''>
            <div className='text-white w-64 truncate font-bold'>Sultan</div>
            <div className='text-[#aaa] font-semibold'>25 songs</div>
          </div>
        </div>
      </div> */}
      </div>
      <div onClick={toogleNewPlaylist} className='flex w-full justify-end mb-2 px-6 cursor-pointer '>
        <div className='flex bg-white w-36 p-2 gap-2 rounded-lg hover:bg-slate-200'>
          <div><FaPlus color='black' size={22} /></div>
          <div className='font-bold'>New playlist</div>
        </div>
      </div>
    </div>
  )
}


export default PlaylistCard
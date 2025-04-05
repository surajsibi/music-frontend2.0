import React,{useEffect} from 'react'
import { Genre, HorizontalCrad, TableCard } from '../components/main'
import PlaylistCard from '../components/playlist/PlaylistCard'
import { changeSavePlaylist,changeNewPlaylist } from '../store/Slice/utilsSlice'
import { useSelector,useDispatch } from 'react-redux'
import NewPlaylist from '../components/playlist/NewPlaylist'
import { setInPlaylist } from '../store/Slice/howler'
import { setInAlbum } from '../store/Slice/howler'
import SearchComponent from '../components/search/Search'

const Homepage = () => {
const dispatch =useDispatch()
const inPlaylist = useSelector((state) => state.howler.inPlaylist);
  useEffect(() => {
    dispatch(setInPlaylist(false))
    dispatch(setInAlbum(false))
    
  }, []);
  // console.log(inPlaylist);
  
  const savePlaylist = useSelector(state => state.utils.savePlaylist)
  const newPlaylist = useSelector(state => state.utils.newPlaylist.value)
  return (
    <div>
      <div>
        <div className=' h-[40vh] '>
          <Genre />
        </div>
        <div className=''>
          <HorizontalCrad />
        </div>
        <div className='py-1 px-24'>
          <TableCard />
        </div>

      </div>
      {savePlaylist &&<div className=' w-[82vw] h-full absolute top-0 flex justify-center items-center '>
         <PlaylistCard/>
      </div>}
      {newPlaylist &&<div className=' w-[82vw] h-full absolute top-0 flex justify-center items-center '>
         <NewPlaylist/>
      </div>}
      <SearchComponent/>
    </div>
    
  )
}

export default Homepage

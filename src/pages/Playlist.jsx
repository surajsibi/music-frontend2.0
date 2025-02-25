import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import PlaylistComponet from '../components/playlist/Playlist'
import { setInPlaylist } from '../store/Slice/howler';
import { useSelector,useDispatch } from 'react-redux';

const Playlist = () => {

  const dispatch = useDispatch();
  const inPlaylist = useSelector((state) => state.howler.inPlaylist);
  const { id } = useParams();

  useEffect(() => {
  dispatch(setInPlaylist(true))
  }, []);

  console.log(inPlaylist,"this is inPlauylist");
  



  console.log(id,"this is id");
  
  return (
    <div>
      <PlaylistComponet id={id}/>
    </div>
  )
}

export default Playlist

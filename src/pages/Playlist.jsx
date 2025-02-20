import React from 'react'
import { useParams } from 'react-router-dom';
import PlaylistComponet from '../components/playlist/Playlist'

const Playlist = () => {
  const { id } = useParams();
  console.log(id,"this is id");
  
  return (
    <div>
      <PlaylistComponet id={id}/>
    </div>
  )
}

export default Playlist

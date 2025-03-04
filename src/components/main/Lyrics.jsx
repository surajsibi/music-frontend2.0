import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Lyrics = () => {
  const [lyrics, setLyrics] = useState('');
  const currentSong = useSelector(state => state.howler.currentSong);

  useEffect(() => {
    if (!currentSong || !currentSong.lyrics) {
      setLyrics('');
      return;
    }

    setLyrics(currentSong.lyrics.replace(/<br\s*\/?>/g, '<br />')); 
  }, [currentSong]); 

  return (
    <div className='flex justify-center text-center' dangerouslySetInnerHTML={{ __html: lyrics }} />
  );
};

export default Lyrics;

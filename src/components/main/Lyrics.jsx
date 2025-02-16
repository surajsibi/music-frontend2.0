import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Lyrics = () => {
  const [lyrics, setLyrics] = useState('');
  const currentSong = useSelector(state => state.howler.currentSong);

  useEffect(() => {
    // Simulate fetching lyrics from an API
    const apiResponse = currentSong.lyrics

    // Replace `<br>` with `<br />` to make it JSX-compatible
    const processedLyrics = apiResponse.replaceAll('<br>', '<br/>');
    setLyrics(processedLyrics);
  }, [currentSong]); // Empty dependency array ensures this only runs once

  return (
    <div className='flex justify-center text-center' dangerouslySetInnerHTML={{ __html: lyrics }} />
  );
};

export default Lyrics;

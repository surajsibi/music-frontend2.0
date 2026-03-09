import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function decodeHtmlEntities(text) {
  if (!text) return '';
  const doc = new DOMParser().parseFromString(text, 'text/html');
  return doc.body.textContent ?? text;
}

const Lyrics = () => {
  const currentSong = useSelector((state) => state.howler.currentSong);
  const [lines, setLines] = useState([]);

  const lyricsStr = typeof currentSong?.lyrics === 'string' ? currentSong.lyrics : currentSong?.lyrics?.lyrics;
  const rawLyrics = lyricsStr ?? '';

  useEffect(() => {
    if (!rawLyrics) {
      setLines([]);
      return;
    }
    const normalized = rawLyrics.replace(/<br\s*\/?>/gi, '\n').trim();
    const lineArray = normalized
      .split(/\n/)
      .map((s) => decodeHtmlEntities(s.trim()))
      .filter(Boolean);
    setLines(lineArray);
  }, [rawLyrics]);

  if (!rawLyrics) {
    return (
      <div className="flex justify-center text-center text-white/60 py-8">
        No lyrics available
      </div>
    );
  }

  return (
    <div className="overflow-y-auto scrollbarMusic h-full py-4 px-2 flex flex-col items-center gap-2">
      {lines.map((line, index) => (
        <p
          key={`${index}-${line.slice(0, 20)}`}
          className="text-center text-white/80 text-base max-w-lg"
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default Lyrics;

import { useState, useEffect } from "react";
import {
  WorkoutImage,
  CommuteImage,
  EnergizeImage,
  FeelgoodImage,
  FocusImage,
  LoveImage,
  PartyImage,
  RelaxImage,
  SadImage,
  SleepImage,
  HomeImage,
} from "../../assets/genreImg/index";

const SLIDES = [
  HomeImage,
  WorkoutImage,
  FeelgoodImage,
  EnergizeImage,
  RelaxImage,
  LoveImage,
  PartyImage,
  CommuteImage,
  SadImage,
  FocusImage,
  SleepImage,
];

const SLIDE_INTERVAL_MS = 10000;

const Genre = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {SLIDES.map((src, i) => (
        <div
          key={i}
          role="img"
          aria-hidden={i !== current}
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
          }}
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        />
      ))}
    </div>
  );
};

export default Genre;

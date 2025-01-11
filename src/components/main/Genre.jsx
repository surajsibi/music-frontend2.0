import React, { useState } from 'react'
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
    HomeImage
} from "../../assets/genreImg/index"
import { Button } from "../index"
import { useSelector, useDispatch } from 'react-redux'
import { changeGenre } from '../../store/Slice/utilsSlice'


const Genre = () => {
    const currentGenre = useSelector(state => state.utils.currentGenre)
    const dispatch = useDispatch()
    console.log(currentGenre);
    // const [currentGenre, setCurrentGenre] = useState("")
    const genres = ["Workout", "Feel good", "Energize", "Relax", "Romance", "Party", "Commute", "Sad", "Focus", "Sleep"]
    const genreImages = {
        Workout: WorkoutImage,
        "Feel good": FeelgoodImage,
        Energize: EnergizeImage,
        Relax: RelaxImage,
        Commute: CommuteImage,
        Focus: FocusImage,
        Romance: LoveImage,
        Party: PartyImage,
        Sad: SadImage,
        Sleep: SleepImage,
        defaultGenre: HomeImage
    };


    return (
        <div style={{
            backgroundImage: `url(${genreImages[currentGenre] || genreImages["defaultGenre"]})`,
        }} className="w-full h-full bg-no-repeat bg-cover bg-center ">
            <div className='w-full flex items-center justify-between pt-8 px-24 '>
                {genres.map((genre) => (
                    <Button
                        key={genre}
                        children={genre}
                        className={` ${currentGenre == genre ? "bg-white text-black py-2 rounded-md px-2 font-medium text-xs" : "bg-[#FFFFFF1A] py-2 rounded-md px-2 font-medium text-xs text-white"}`}
                        onClick={() => { dispatch(changeGenre(genre)) }}
                    />
                ))}


            </div>
            {/* {genres.map((genre)=>(
                <Button
                    key={genre}
                    children={genre}
                    onCLick={()=>{setCurrentGenre(genre)}}
                />
            ))} */}
        </div>
    )
}

export default Genre

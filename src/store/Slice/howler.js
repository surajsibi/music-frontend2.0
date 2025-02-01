import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    volume: 0.5,
    duration:0,
    currentSong: null
}

const howlerSlice = createSlice({
    name: 'howler',
    initialState,
    reducers: {
        changeVolume: (state, action) => { state.volume = action.payload / 100 },
        setDuration:(state,action)=>{state.duration = action.payload},
        setCurrentSong:(state,action)=>{state.currentSong = action.payload}
    }
})

export const { changeVolume, setDuration , setCurrentSong } = howlerSlice.actions
export default howlerSlice.reducer
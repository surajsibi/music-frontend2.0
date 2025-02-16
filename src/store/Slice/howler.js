import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    volume: 0.5,
    duration: 0,
    currentSong: null,
    songPlaylist:[],
    currentIndex:0
}

const howlerSlice = createSlice({
    name: 'howler',
    initialState,
    reducers: {
        setPlaylist: (state, action) => {
            state.songPlaylist = [...action.payload]
        },
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload;
            state.currentIndex = state.songPlaylist.findIndex(song => song.songId === action.payload.songId);
        },
        playNext: (state) => {
            if (state.currentIndex < state.songPlaylist.length - 1) {
                state.currentIndex += 1;
                state.currentSong = state.songPlaylist[state.currentIndex];
            }
        },
        playPrev: (state) => {
            if (state.currentIndex > 0) {
                state.currentIndex -= 1;
                state.currentSong = state.songPlaylist[state.currentIndex];
            }
        },
        changeVolume: (state, action) => { state.volume = action.payload / 100 },
        setDuration: (state, action) => { state.duration = action.payload },
    }
})

export const { changeVolume, setDuration,setPlaylist, setCurrentSong, playNext, playPrev  } = howlerSlice.actions
export default howlerSlice.reducer
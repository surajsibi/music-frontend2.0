import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    volume: 0.5,
    duration: 0,
    currentSong: null,
    songPlaylist:[],
    currentIndex:0,
    playlistPlaylist:[],
    inPlaylist:false,
    isLoading:false,
    inAlbum:false
}

const howlerSlice = createSlice({
    name: 'howler',
    initialState,
    reducers: {
        setInPlaylist: (state,action ) => { state.inPlaylist = action.payload },
        setInAlbum:(state,action)=>{state.inAlbum =action.payload},
        setPlaylist: (state, action) => {
            state.songPlaylist = action.payload
        },
        setPlaylistPlaylist: (state, action) => {
            state.playlistPlaylist = [...action.payload]
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

export const { changeVolume, setDuration,setPlaylist,setInAlbum, setCurrentSong, playNext, playPrev ,setPlaylistPlaylist,setInPlaylist } = howlerSlice.actions
export default howlerSlice.reducer
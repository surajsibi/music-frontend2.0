import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    volume: 0.5,
    muted: false,
    previousVolume: 0.5,
    duration: 0,
    currentTime: 0,
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
            state.currentTime = 0;
            const d = action.payload?.duration;
            state.duration = typeof d === 'number' && d > 0 ? d : (Number(d) || 0);
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
        changeVolume: (state, action) => {
            const v = action.payload / 100;
            state.volume = v;
            if (state.muted && v > 0) state.muted = false;
        },
        toggleMute: (state) => {
            if (state.muted) {
                state.volume = state.previousVolume;
                state.muted = false;
            } else {
                state.previousVolume = state.volume;
                state.volume = 0;
                state.muted = true;
            }
        },
        setDuration: (state, action) => { state.duration = action.payload },
        setCurrentTime: (state, action) => { state.currentTime = action.payload },
    }
})

export const { changeVolume, toggleMute, setDuration, setCurrentTime, setPlaylist, setInAlbum, setCurrentSong, playNext, playPrev, setPlaylistPlaylist, setInPlaylist } = howlerSlice.actions
export default howlerSlice.reducer
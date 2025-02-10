import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isActive: false,
    currentGenre: "defaultGenre",
    savePlaylist: false,
    newPlaylist: {
        value: false,
        songId: ""
    }
}
const utilsSlice = createSlice({
    name: "utilsSlice",
    initialState,
    reducers: {
        switcher: (state) => { state.isActive = !state.isActive; },
        changeGenre: (state, action) => { state.currentGenre = action.payload },
        changeSavePlaylist: (state, action) => { state.savePlaylist = !state.savePlaylist },
        changeNewPlaylist: (state, action) => {
            state.newPlaylist.value = !state.newPlaylist.value
            state.newPlaylist.songId = action.payload || "";
        }
    }
})
export const { switcher, changeGenre, changeSavePlaylist, changeNewPlaylist } = utilsSlice.actions
export default utilsSlice.reducer
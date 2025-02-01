import { createSlice } from "@reduxjs/toolkit";
import NewPlaylist from "../../components/playlist/NewPlaylist";
const initialState ={
    isActive:false,
    currentGenre:"defaultGenre",
    savePlaylist:false,
    newPlaylist:false
    }
const utilsSlice = createSlice({
    name:"utilsSlice",
    initialState,
    reducers:{
        switcher:(state)=>{state.isActive = !state.isActive;},
        changeGenre:(state,action) =>{state.currentGenre = action.payload},
        changeSavePlaylist:(state,action) =>{state.savePlaylist = !state.savePlaylist} ,
        changeNewPlaylist:(state,action) =>{state.newPlaylist = !state.newPlaylist}
    }
})
export const {switcher,changeGenre,changeSavePlaylist,changeNewPlaylist} = utilsSlice.actions
export default utilsSlice.reducer
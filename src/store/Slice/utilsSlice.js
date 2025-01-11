import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    isActive:false,
    currentGenre:"defaultGenre"
    }
const utilsSlice = createSlice({
    name:"utilsSlice",
    initialState,
    reducers:{
        switcher:(state)=>{state.isActive = !state.isActive;},
        changeGenre:(state,action) =>{state.currentGenre = action.payload} 
    }
})
export const {switcher,changeGenre} = utilsSlice.actions
export default utilsSlice.reducer
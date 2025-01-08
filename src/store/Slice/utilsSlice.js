import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    isActive:false
    }
const utilsSlice = createSlice({
    name:"utilsSlice",
    initialState,
    reducers:{
        switcher:(state)=>{state.isActive = !state.isActive;}
    }
})
export const {switcher} = utilsSlice.actions
export default utilsSlice.reducer
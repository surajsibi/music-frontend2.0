import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    login :false
}

const loginSignupSlice = createSlice({
    name: "loginSignup",
    initialState,
    reducers:{
        switcher:(state)=>{
            state.login =!state.login
        }
    }
})
export const {switcher} = loginSignupSlice.actions
export default loginSignupSlice.reducer
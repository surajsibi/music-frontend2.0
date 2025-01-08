import { configureStore } from "@reduxjs/toolkit";
import loginSignupReducer from "./Slice/loginSignupSlice.js";
import utilsSliceReducer from "./Slice/utilsSlice.js"

const store= configureStore({
    reducer:{
        loginSignup: loginSignupReducer,
        utils:utilsSliceReducer
    }
})

export default store
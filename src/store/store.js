import { configureStore } from "@reduxjs/toolkit";
import utilsSliceReducer from "./Slice/utilsSlice.js"
import authSliceReducer from "./Slice/authSlice.js"

const store = configureStore({
    reducer: {
        utils: utilsSliceReducer,
        auth:authSliceReducer
    }
})

export default store
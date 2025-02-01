import { configureStore } from "@reduxjs/toolkit";
import utilsSliceReducer from "./Slice/utilsSlice.js"
import authSliceReducer from "./Slice/authSlice.js"
import howlerReducer from "./Slice/howler.js"

const store = configureStore({
    reducer: {
        utils: utilsSliceReducer,
        auth:authSliceReducer,
        howler:howlerReducer
    }
})

export default store
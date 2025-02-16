import { configureStore } from "@reduxjs/toolkit";
import utilsSliceReducer from "./Slice/utilsSlice.js"
import authSliceReducer from "./Slice/authSlice.js"
import howlerReducer from "./Slice/howler.js"
import songReducer from "./Slice/songSlice.js"
import playlistReducer from "./Slice/playlistSlice.js"
import artistReducer from "./Slice/artistSlice.js"

const store = configureStore({
    reducer: {
        utils: utilsSliceReducer,
        auth:authSliceReducer,
        howler:howlerReducer,
        song:songReducer,
        playlist:playlistReducer,
        artist:artistReducer,
    }
})

export default store
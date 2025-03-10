import { configureStore } from "@reduxjs/toolkit";
import utilsSliceReducer from "./Slice/utilsSlice.js"
import authSliceReducer from "./Slice/authSlice.js"
import howlerReducer from "./Slice/howler.js"
import songReducer from "./Slice/songSlice.js"
import playlistReducer from "./Slice/playlistSlice.js"
import artistReducer from "./Slice/artistSlice.js"
import likeReducer from "./Slice/likeSlice.js"
import albumReducer from "./Slice/albumSlice.js"

const store = configureStore({
    reducer: {
        utils: utilsSliceReducer,
        auth:authSliceReducer,
        howler:howlerReducer,
        song:songReducer,
        playlist:playlistReducer,
        artist:artistReducer,
        like:likeReducer,
        album:albumReducer
    }
})

export default store
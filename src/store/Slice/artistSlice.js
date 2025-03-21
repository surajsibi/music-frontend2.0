import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axisoInstance from "../../helpers/axiosInstance";

const initialState = {
    loading: false,
    isError: false,
    artists: null,
    artistTopSongs: null,
    loadingTopSongs: false
}

export const getArtistById = createAsyncThunk("getArtistById", async (id) => {
    try {
        const response = await axisoInstance.get(`/artists2/${id}`)
        return response.data.data[0];
    } catch (error) {
        throw error
    }
})


export const getArtistTopSongs = createAsyncThunk("getArtistTopSongs", async (artistsId) => {
    try {
        const response = await axisoInstance.post('/songs2/a/artistSongs', {artistsId})
        return response.data.data
        
    } catch (error) {
        throw error
    }

})

const artistSlice = createSlice({
    name: "artist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArtistById.fulfilled, (state, action) => {
            state.artists = action.payload
            state.loading = false
        }),
        builder.addCase(getArtistById.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(getArtistTopSongs.fulfilled, (state, action) => {
            state.artistTopSongs = action.payload
            state.loadingTopSongs = false
        }),
        builder.addCase(getArtistTopSongs.pending, (state) => {
            state.loadingTopSongs = true
        })
        
    }

    
})





export default artistSlice.reducer
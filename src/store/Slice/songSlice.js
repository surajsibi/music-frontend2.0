import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axiosInsatnce from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    currentSong: null,
    songs: [],
    isLoading: false,
    isError: false,
    suggestions: [],
    isLoadingSuggestion: false,
    isLoadingAllSongs: false,
    nextSong:"",
    isLoadingSong:false
}
export const getAllSongs = createAsyncThunk("getAllSongs", async (data) => {
    try {
        const response = await axiosInsatnce.get("/songs2")
        return response.data.data
    } catch (error) {
        throw error
    }
})
export const getSongById = createAsyncThunk("getSongById", async (id) => {
    try {
        const response = await axiosInsatnce.get(`/songs2/${id}`)
        return response?.data?.data?.[0]
    } catch (error) {
        throw error
    }
})
export const getSuggestions = createAsyncThunk("getSuggestions", async (id) => {
    try {
        const response = await axiosInsatnce.post(`/songs2/${id}`)
        return response.data.data
    } catch (error) {
        throw error
    }

})



const songSlice = createSlice({
    name: "song",
    initialState,
    reducers: {

        setSuggestion:(state,action)=>{
            state.suggestions = action.payload
        },

        setNextSongOfSuggestions: (state, action) => {
            if (state.suggestions.length === 0 || !state.currentSong) return 
            const currentIndex = state.suggestions.findIndex(song => song.songId === state.currentSong.songId)

            if(currentIndex ===-1){
                state.nextSong = state.suggestions[0]
            }
            else{
                const nextIndex = (currentIndex + 1) % state.suggestions.length
                state.nextSong = state.suggestions[nextIndex]

            }
        }



    },
    extraReducers: (builder) => {
        builder.addCase(getAllSongs.pending, (state) => {
            state.isLoadingAllSongs = true
        });
        builder.addCase(getAllSongs.fulfilled, (state, action) => {
            state.isLoadingAllSongs = false
            state.songs = action.payload
        });
        builder.addCase(getAllSongs.rejected, (state, action) => {
            state.isLoadingAllSongs = false
            state.isError = true
        });
        builder.addCase(getSongById.pending, (state) => {
            state.isLoadingSong = true
        });
        builder.addCase(getSongById.fulfilled, (state, action) => {
            state.isLoadingSong = false
            state.currentSong = action.payload
        });
        builder.addCase(getSongById.rejected, (state, action) => {
            state.isLoadingSong = false
            state.isError = true
        });
        builder.addCase(getSuggestions.pending, (state) => {
            state.isLoadingSuggestion = true
        });
        builder.addCase(getSuggestions.fulfilled, (state, action) => {
            state.isLoadingSuggestion = false
            state.suggestions = action.payload
        });
        builder.addCase(getSuggestions.rejected, (state, action) => {
            state.isLoadingSuggestion = false
            state.isError = true
        });
    }
})
export const {setNextSongOfSuggestions,setSuggestion } = songSlice.actions;
export default songSlice.reducer

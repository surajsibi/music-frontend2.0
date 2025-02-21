import { createSlice,createAsyncThunk, current } from "@reduxjs/toolkit";
import axiosInsatnce from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    currentSong: null,
    songs: [],
    isLoading: true,
    isError: false,

}

export const getAllSongs = createAsyncThunk("getAllSongs",async(data)=>{
        try {
            const response = await axiosInsatnce.get("/songs2")
            return response.data.data
        } catch (error) {
            throw error
        }
})
export const getSongById = createAsyncThunk("getSongById",async(id)=>{
   try {
     const response = await axiosInsatnce.get(`/songs2/${id}`)
     return response.data.data[0]
   } catch (error) {
    throw error    
   }
})


const songSlice = createSlice({
    name:"song",
    initialState,
    reducers:{
       

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllSongs.pending,(state)=>{
            state.isLoading = true
        });
        builder.addCase(getAllSongs.fulfilled,(state,action)=>{
            state.isLoading = false
            state.songs = action.payload
        });
        builder.addCase(getAllSongs.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
        });
        builder.addCase(getSongById.pending,(state)=>{
            state.isLoading = true
        }); 
        builder.addCase(getSongById.fulfilled,(state,action)=>{
            state.isLoading = false
            state.currentSong = action.payload
        });
        builder.addCase(getSongById.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
        });
    }
})
export const { } = songSlice.actions;
export default songSlice.reducer

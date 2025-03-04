import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axisoInstance from "../../helpers/axiosInstance";

const initialState = {
    loading: false,
    isError: false,
    response: null,
    
}

export const toggleLike = createAsyncThunk("toggleLike",async(data)=>{
   try {
     const response = await axisoInstance.post(`/likes/song/${data._id}`,data.songId)
     return response.data.data;
   } catch (error) {
    throw error
   }
})


const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(toggleLike.pending, (state) => {
                state.loading = true
            })
            .addCase(toggleLike.fulfilled, (state, action) => {
                state.loading = false
                state.response = action.payload
            })
            .addCase(toggleLike.rejected, (state) => {
                state.loading = false
                state.isError = true
            })
    }

})


export default likeSlice.reducer;
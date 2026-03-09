import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance.js";


const initialState = {
    loading:false,
    isError:false,
    genres:[]
}

export const getGenres = createAsyncThunk("getGenres", async (arg) => {
    const { genre, type } = typeof arg === "object" && arg !== null ? arg : { genre: arg, type: undefined };
    try {
        const response = await axiosInstance.post(`/genre/${genre}`, type != null ? { type } : {});
        return response.data    
    } catch (error) {
        throw error
    }
})

const genreSlice = createSlice({
    name:"genre",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getGenres.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(getGenres.fulfilled,(state,action)=>{
            state.loading = false
            state.genres = action.payload
        })
        builder.addCase(getGenres.rejected,(state)=>{
            state.loading = false
            state.isError = true
        })
    }
})

export default genreSlice.reducer
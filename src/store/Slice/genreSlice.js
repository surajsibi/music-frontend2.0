import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axisoInstance from "../../helpers/axiosInstance.js";


const initialState = {
    loading:false,
    isError:false,
    genres:[]
}

export const getGenres = createAsyncThunk("getGenres",async(genre,data)=>{
    try {
        const response = await axisoInstance.post(`/genres/${genre}`,data)
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
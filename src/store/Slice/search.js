import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
    searchData: [],
    searchAll:[],
    searchLoading: false
};


export const searchData = createAsyncThunk("searchData", async () => {
    try {
        const response = await axiosInstance.get("/search/sendData");
        return response.data.data; 
    } catch (error) {
        throw error;
    }
});

export const searchAll = createAsyncThunk("searchAll", async (q) =>{
    try {
        const response = await axiosInstance.get(`/search/all/${q}`);
        return response.data.data
    } catch (error) {
        throw error
    }
})
    

const searchSlice = createSlice({
    name: "search",
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(searchData.fulfilled, (state, action) => {
            state.searchData = action.payload;
        });
        builder.addCase(searchAll.pending, (state, action) => {
            state.searchLoading = true
        });
        builder.addCase(searchAll.fulfilled, (state, action) => {
            state.searchAll = action.payload;
            state.searchLoading = false
        });
    }
   
});

export default searchSlice.reducer;

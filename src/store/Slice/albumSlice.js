import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
  isLoading: false,
  artistTopAlbum: [],
  currentAlbumSongs:[],
  loadingSong:true
};

export const getArtistTopAlbum = createAsyncThunk(
  "getArtistTopAlbum",
  async (albumsId) => {
    try {
      const response = await axiosInstance.post("/albums2/a/getAlbums", {
        albumsId,
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
export const getAlbumSongs = createAsyncThunk(
  "getAlbumSongs",
  async (albumId) => {
    try {
      const response = await axiosInstance.get(`/albums2/${albumId}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtistTopAlbum.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArtistTopAlbum.fulfilled, (state, action) => {
        state.artistTopAlbum = action.payload;
        state.isLoading = false;
      })
      .addCase(getArtistTopAlbum.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAlbumSongs.fulfilled,(state,action)=>{
        state.currentAlbumSongs = action.payload
        state.loadingSong = false
      })
      .addCase(getAlbumSongs.pending,(state)=>{
        state.loadingSong=true
      })
  },

});

export default albumSlice.reducer;

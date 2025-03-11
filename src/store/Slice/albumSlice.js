import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
  isLoading: false,
  artistTopAlbum: [],
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
      });
  },
});

export default albumSlice.reducer;

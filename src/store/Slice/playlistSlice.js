import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";
const initialState = {
    playlists:[],
    loading: false,
    isError:false,
    currentPlaylistId: null

}

export const getAllPlaylist = createAsyncThunk("getAllPlaylist", async (userId) => {
   try {
     const response = await axiosInstance.get(`playlists/p/${userId}`)
     toast.success("Playlist fetched")
     return response.data.data      
   } catch (error) {
    toast.error(error?.response?.data?.error)
    throw error
   }
})

export const addSongToPlaylist = createAsyncThunk("addSongToPlaylist", async ({songId,playlistId}) => {
    try {
        const response = await axiosInstance.patch(`playlists/${playlistId}/${songId}`)
       
        return response.data.data
    } catch (error) {
        toast.error(error?.response?.data?.error)
        throw error
        
    }
})

export const createPlaylist = createAsyncThunk("createPlaylist", async (data) => {
    try {
        const response = await axiosInstance.post("/playlists/create-playlist", data)
        toast.success("Playlist created")
        return response.data.data
    } catch (error) {
        toast.error(error?.response?.data?.error)
        throw error
    }
})

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        savePlaylistId: (state, action) => {
            state.currentPlaylistId = action.payload
        },
        deletePlaylistId: (state, action) => {
            state.currentPlaylistId = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createPlaylist.pending, (state) => {
            state.loading = true
        });
        builder.addCase(createPlaylist.fulfilled, (state, action) => {
            state.loading = false
            state.playlists = [...state.playlists, action.payload]
        });
        builder.addCase(createPlaylist.rejected, (state) => {
            state.isError = true
         });
         builder.addCase(getAllPlaylist.pending,(state)=>{
            state.loading = true
         });
         builder.addCase(getAllPlaylist.fulfilled,(state,action)=>{
            state.loading = false
            state.playlists = [... action.payload]
         });
         builder.addCase(getAllPlaylist.rejected,(state)=>{
            state.isError = true
         });
         builder.addCase(addSongToPlaylist.fulfilled,(state,action)=>{
            state.playlists = state.playlists.map((playlist) => {
                if (playlist.id === action.payload.playlistId) {
                  return {
                    ...playlist,
                    songs: [...playlist.songs, action.payload.songId], // Add song
                  };
                }
                return playlist; // Return the unchanged playlist if ID doesn't match
              });
              toast.success("Song added to playlist")
         })
         

}})
export const { savePlaylistId, deletePlaylistId } = playlistSlice.actions

export default playlistSlice.reducer
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance"
import toast from "react-hot-toast"

const initialState ={
    loading:false,
    status:false,
    userData:null
};

export const createAccount = createAsyncThunk("register",async(data)=>{
    const formData = new FormData()
    formData.append("avatar",data.avatar[0])
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("fullname", data.fullname);

    try {
        const response = await axiosInstance.post("/users/register",formData)
        console.log(response.data);
        toast.success("Registered successfully")
        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error
        
    }  
})

export const userLogin =createAsyncThunk("login",async (data) =>{
    try {
        const response = await axiosInstance.post("/users/login",data);
        
        toast.success("login successfull")
        
        return response.data.data.user

        
    } catch (error) {
        toast.error(error?.response?.data?.error)
        throw error
    }
})

export const refreshAccessToken = createAsyncThunk("refreshAccessToken",async (data = {}, { rejectWithValue }) =>{
    try {
        const response = await axiosInstance.post("/users/access-token", data);
        return response.data
    } catch (error) {
        if (!data?.silent) {
            toast.error(error?.response?.data?.error || "Session expired. Please log in again.")
        }
        return rejectWithValue(error?.response?.data)
    }
})

export const getCurrentUser = createAsyncThunk("getCurrentUser",async (arg) =>{
    const response = await axiosInstance.get("/users/current-user")
    return response.data
})

export const userLogout = createAsyncThunk("logout", async (_, { rejectWithValue }) => {
    try {
        await axiosInstance.post("/users/logout");
        toast.success("Logged out successfully");
        return null;
    } catch (error) {
        // Clear state even if API fails (e.g. already logged out)
        toast.error(error?.response?.data?.message || "Could not log out");
        return rejectWithValue(error?.response?.data);
    }
});

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(createAccount.pending,(state)=>{
            state.loading = true
        });
        builder.addCase(createAccount.fulfilled,(state)=>{
            state.loading = false
        });
        builder.addCase(userLogin.pending,(state)=>{
            state.loading =true
        });
        builder.addCase(userLogin.fulfilled,(state,action)=>{
            state.loading=false
            state.status=true
            state.userData=action.payload
           
            
        })
        builder.addCase(getCurrentUser.pending,(state,action)=>{
            state.loading=true
            state.status=false
            // state.userData =null
        })
        builder.addCase(getCurrentUser.fulfilled,(state,action)=>{
            state.loading=false
            state.status=true
            const data = action.payload?.data
            state.userData = Array.isArray(data) ? data[0] : data ?? state.userData
        })
        builder.addCase(getCurrentUser.rejected,(state, action)=>{
            state.loading=false
            state.status=false
            state.userData=null
            if (!action.meta?.arg?.silent) {
                toast.error("Session expired or invalid. Please log in again.")
            }
        })
        builder.addCase(refreshAccessToken.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(refreshAccessToken.fulfilled,(state)=>{
            state.loading=false
        })
        builder.addCase(refreshAccessToken.rejected,(state)=>{
            state.loading=false
        })
        builder.addCase(userLogout.fulfilled,(state)=>{
            state.loading = false;
            state.status = false;
            state.userData = null;
        })
        builder.addCase(userLogout.rejected,(state)=>{
            state.loading = false;
            state.status = false;
            state.userData = null;
        })
    }
})

export default authSlice.reducer;
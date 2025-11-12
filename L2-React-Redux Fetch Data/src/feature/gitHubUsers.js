

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllData=createAsyncThunk(
    'gitHubUsers/getAllData',
    async(args,{rejectWithValue})=>{
        const response=await fetch('https://api.github.com/users');
        try {
            
            const data=await response.json();
            console.log("data",data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const gitHubUsersSlice = createSlice({
    name: 'gitHubUsers',
    initialState: { 
        users: [],
        loading: false,
        error: null 
    },
   

     extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = gitHubUsersSlice.actions;

export default gitHubUsersSlice.reducer;
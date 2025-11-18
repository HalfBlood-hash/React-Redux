
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const createUser=createAsyncThunk('userDetails/createUser', 
    async (userData,{rejectWithValue})=>{
        try {
            const response=await fetch('https://6915f79a465a9144626e6ac3.mockapi.io/crud',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(userData)

                
            })
            if(!response.ok){
                const err = await response.json();
                return rejectWithValue(err);
            }
            const data=await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

)
export const showUser=createAsyncThunk('userDetails/showUser', 
    async(_,{rejectWithValue})=>{
        try {
            const response=await fetch('https://6915f79a465a9144626e6ac3.mockapi.io/crud',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                },
            });
            if(!response.ok){
                const err = await response.json();
                return rejectWithValue(err);
            }
            const data=await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const deleteUser=createAsyncThunk('userDetails/deleteUser',
    async(Id,{rejectWithValue})=>{
        try{
            const response =await fetch(`https://6915f79a465a9144626e6ac3.mockapi.io/crud/${Id}`,{
                method:'DELETE',
                headers:{   
                    'Content-Type':'application/json',
                },
            }); 
            if(!response.ok){
                const err = await response.json();
                return rejectWithValue(err);
            }
            const data=await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

)
export const updateUser=createAsyncThunk('userDetails/updateUser',
    async(userData,{rejectWithValue})=>{
        try{
            const response =await fetch(`https://6915f79a465a9144626e6ac3.mockapi.io/crud/${userData.id}`,{
                method:'PUT',
                headers:{   
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(userData)
            });
            if(!response.ok){
                const err = await response.json();
                return rejectWithValue(err);
            }
            const data=await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
const userDetailSlice = createSlice({
    name: 'userDetails',
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchUser:''
    },
    reducers: {
        // You can add synchronous reducers here if needed
        searchUser: (state, action) => {
            state.searchUser = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {   
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });  
        builder
            .addCase(showUser.pending, (state) => {   
                state.loading = true;
                state.error = null;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        builder
            .addCase(deleteUser.pending, (state) => {   
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.users=state.users.filter((user) => user.id !== action.payload.id);

                
               
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        builder
                    .addCase(updateUser.pending, (state) => {
                        state.loading = true;
                        state.error = null;
                    })
                    .addCase(updateUser.fulfilled, (state, action) => {
                        state.loading = false;
                        const index = state.users.findIndex((user) => user.id === action.payload.id);   
                        if (index !== -1) {
                            state.users[index] = action.payload;
                        }   
                    })
                    .addCase(updateUser.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.payload;
                    });
        }  

})


 export default userDetailSlice.reducer;
export const {searchUser}=userDetailSlice.actions;
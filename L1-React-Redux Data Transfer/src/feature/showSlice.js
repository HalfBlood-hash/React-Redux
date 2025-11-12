

import { createSlice } from "@reduxjs/toolkit";

const initialState={value:0}
const showSlice=createSlice({
    name:"show",
    initialState,
    reducers:{
        showData:(state)=>{
            state.value=state.value;
        },
        increment:(state)=>{

            state.value+=1
        },
        decrement:(state)=>{
            if( state.value>0){
            state.value-=1
        }
            else{
                state.value=0
            }
        },
        reset:(state)=>{
            state.value=0
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload
        },

    }
})

export const {increment,decrement,reset,incrementByAmount}=showSlice.actions
export default showSlice.reducer
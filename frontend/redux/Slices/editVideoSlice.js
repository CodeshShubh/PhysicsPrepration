import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading:false,
    error:null,
    message:null,
    
}

const EditReducer = createSlice({
    name:'edit',
    initialState,
    reducers:{
             deletedVideoRequest:(state)=>{
                 state.loading=true;
             },
             deletedVideoSuccess:(state,action)=>{
                state.loading=false;
                state.error=null;
                state.message=action.payload.message;
             },
             deleteVideoFail:(state,action)=>{
                 state.loading=false
             },
             addVideoRequest:(state)=>{
                state.loading=true;
             },
             addVideoSuccess:(state,action)=>{
                state.loading=false;
                state.message= action.payload.message;
                state.error=null
             },
             addingVideoFail:(state, action)=>{
                state.loading= false;
                state.message=action.payload;
                state.error=action.payload
             },

             clearError:(state)=>{
                state.error=null
             },
             clearMessage:(state)=>{
                state.message=null
             }
    }
})

export const {deleteVideoFail, deletedVideoRequest,deletedVideoSuccess , addVideoRequest , addVideoSuccess , addingVideoFail} = EditReducer.actions;

export default EditReducer.reducer
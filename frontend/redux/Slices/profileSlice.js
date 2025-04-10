import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    message:null,
    data:null
}

const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
      requestUpdate:(state)=>{
        state.loading=true
      },
      successUpdate:(state,action)=>{
        state.loading=false;
        state.data=action.payload;
        state.message=action.payload.message;
        state.error=null 
      },
      failUpdate:(state,action)=>{
        state.loading=false,
        state.error=action.payload
      },
      clearError: (state) => {
        state.error = null;
      },
      clearMessage: (state) => {
        state.message = null;
      },
    }
})

export const {requestUpdate , successUpdate , failUpdate ,clearError ,clearMessage} = profileSlice.actions;

export default profileSlice.reducer;
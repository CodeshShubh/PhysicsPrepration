import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from './Slices/userSlice';
import videoReducer from './Slices/VideoSlice';
import profileReducer from './Slices/profileSlice';
import EditReducer from './Slices/editVideoSlice';



const store = configureStore({
    reducer:{
        auth:userReducer,
        videos:videoReducer,
        profileUpdate:profileReducer,
        edit:EditReducer
    }
    
})

export default store;

export const server = "https://physicsprepration-backend.onrender.com"
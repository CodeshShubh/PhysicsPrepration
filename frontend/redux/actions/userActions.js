import { server } from "../store";
import {loginSuccess ,loginRequest , loginFail, loadUserRequest, loadUserSuccess, loadUserFail, logoutRequest, logoutSuccess, logoutFail, RegisterRequest, RegisterSuccess, RegisterFail} from '../Slices/userSlice.js';
import axios from 'axios'
import { failUpdate, requestUpdate, successUpdate } from "../Slices/profileSlice.js";

export const login = ({email , password})=> async (dispatch)=>{
    try {
         dispatch(loginRequest())
         const {data} = await axios.post(`${server}/user/login`,{email, password},{
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
         });
          dispatch(loginSuccess(data))
         
    } catch (error) {
           dispatch(loginFail(error.response.data.message || "Login failed"))
    }
}

export const registerUser = ({email, userName , password, })=>async dispatch =>{
         try {
            dispatch(RegisterRequest())

            const {data} = await axios.post(`${server}/user/register`, {email, userName, password}, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials:true
            });
            dispatch(RegisterSuccess(data))
            
         } catch (error) {
            dispatch(RegisterFail(error.response.data.message))
         }
}

export const loadUser = ()=>async (dispatch)=>{
     try{
         dispatch(loadUserRequest());
        const {data} = await axios.get(`${server}/user/me`,{ withCredentials:true})
   dispatch(loadUserSuccess(data))
 
     }catch(error){
        dispatch(loadUserFail(error.response?.data?.message || "Unable to find User"))
     }
}

export const logout =()=>async(dispatch)=>{
    try {
        dispatch(logoutRequest())

        const {data} = await axios.get(`${server}/user/logout`,{
            withCredentials:true
        })
        dispatch(logoutSuccess(data))
        
    } catch (error) {
        dispatch(logoutFail(error.response?.data?.message || "Logout Failed"))
    }
}


export const updateProfile = (myForm)=>async (dispatch)=>{
   try {
    dispatch(requestUpdate())
    const {data} = await axios.put(`${server}/user/updateprofile`, myForm , {
        headers:{
            'Content-Type' : "multipart/form-data"
        },
        withCredentials:true,

    })
     dispatch(successUpdate(data))
   } catch (error) {
     dispatch(failUpdate(error.response?.data?.message))
   }
}


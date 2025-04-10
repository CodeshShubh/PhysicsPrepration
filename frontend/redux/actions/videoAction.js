import axios from "axios";
import { server } from "../store.js";
import {
  allEditableVideosFail,
  allEditableVideosRequest,
  allEditableVideosSuccess,
  fetchCourseVideosRequest,
  fetchCourseVideosSuccess,
  fetchVideoFail,
  fetchVideoRequest,
  fetchVideoSuccess,
} from "../Slices/VideoSlice.js";
import { addingVideoFail, addVideoRequest, addVideoSuccess, deletedVideoRequest, deletedVideoSuccess, deleteVideoFail } from "../Slices/editVideoSlice.js";

export const fetchLatestVideos =
  ({ page = 1, limit = 5 }) =>
  async (dispatch) => {
    try {
      dispatch(fetchVideoRequest());
      const { data } = await axios.get(
        `${server}/courses/getAllVideos?page=${page}&limit=${limit}`,
        {
          withCredentials: true, // 🔥 This ensures authentication works if we use authencated middleware
        }
      );
      dispatch(fetchVideoSuccess(data));
    } catch (error) {
      dispatch(
        fetchVideoFail(
          error.response?.data?.message || "Unable to fetch videos"
        )
      );
    }
  };

export const fetchCouresVideos = () => async (dispatch) => {
  try {
    dispatch(fetchCourseVideosRequest());
    const { data } = await axios.get(`${server}/courses/getCourseVideos`, {
      withCredentials: true,
    });
    dispatch(fetchCourseVideosSuccess(data));
  } catch (error) {
    dispatch(
      fetchVideoFail(error.response?.data?.message || "Unable to fetch videos")
    );
  }
};

export const FetcheditableVideos = () => async (dispatch) => {
  try {
    dispatch(allEditableVideosRequest());
    const { data } = await axios.get(`${server}/courses/allEditableVideos`, {
     
      withCredentials:true,
    });
    dispatch(allEditableVideosSuccess(data));
  } catch (error) {
    dispatch(
      allEditableVideosFail(
        error.response?.data?.message || "Unable to fetch videos"
      )
    );
  }
};


export const deletedVideo = (id)=>async (dispatch)=>{
  try {
    dispatch(deletedVideoRequest())

    const {data}= await axios.delete(`${server}/courses/deleteVideos/${id}`)
    dispatch(deletedVideoSuccess(data))
    
  } catch (error) {
    dispatch(
      deleteVideoFail(
        error.response?.data?.message || "Unable to delete videos"
      )
    );
  }
}


export const addVideoAction =({category , title , description , videoUrl})=> async dispatch =>{
     try {
       dispatch(addVideoRequest())

       const {data} = await axios.post(`${server}/courses/addVideos` ,{category , title , description , videoUrl}, {
        headers:{
          "Content-Type": 'application/json'
       },
       withCredentials:true,
       })

       dispatch(addVideoSuccess(data))
      
     } catch (error) {
       dispatch(addingVideoFail(error.response?.data?.message || "Unable to add videos"))
     }
} 

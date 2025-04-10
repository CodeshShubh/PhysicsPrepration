import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  videos: [],
  totalPage: 1,
  currentPage: 1,
  error: null,
  message: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchVideoRequest: (state) => {
      state.loading = true;
    },
    fetchVideoSuccess: (state, action) => {
      state.loading = false;
      state.videos = action.payload.allVideos;
      state.message = action.payload.message;
      state.totalPage = action.payload.totalPage;
      state.currentPage = action.payload.currentPage;
      state.error = null;
    },
    fetchVideoFail: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    fetchCourseVideosRequest: (state) => {
      state.loading = true;
    },
    fetchCourseVideosSuccess: (state, action) => {
      state.loading = false;
      state.videos = action.payload.FetchedcourseVidoes;
      state.message = action.payload.message;
      state.error = null;
    },
    fetchCourseFailed: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    allEditableVideosRequest: (state) => {
      state.loading = true;
    },
    allEditableVideosSuccess: (state,action) => {
      state.loading = false;
      state.videos = action.payload.videos;
      state.message = action.payload.message;
      state.error = null;
    },
    allEditableVideosFail: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const {
  fetchVideoFail,
  fetchVideoRequest,
  fetchVideoSuccess,
  clearError,
  clearMessage,
  fetchCourseVideosRequest,
  fetchCourseVideosSuccess,
  fetchCourseFailed,
  allEditableVideosRequest,
  allEditableVideosSuccess,
  allEditableVideosFail
} = videoSlice.actions;

export default videoSlice.reducer;

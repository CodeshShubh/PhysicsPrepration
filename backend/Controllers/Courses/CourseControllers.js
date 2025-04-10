import { catchAsyncError } from "../../MiddleWares/catchAsyncError.js";
import Course from "../../Models/Courses/Courses.js";
import ErrorHandler from "../../Utils/errorHandler.js";

export const addVideo = async (req, res) => {
  try {
    const { category, title, description, videoUrl } =req.body;

    if(!category || !title || !description || !videoUrl ){
        return res.status(400).json({status:'Failure' , Message: 'Please Enter All fields'})
    }

     const course =  await Course.create({category, title, description, videoUrl})



     res.status(201).json({
        status: 'Success',
        Message: 'Video added Succesfully',
        Data : course
     })

  } catch (error) {
     res.status(500).json({
        status: 'Failure',
        Message: error.message || 'Internal server error'
     })
  }
};

// thisi for latestes videos
export const getPagenetedVideos = catchAsyncError(async(req, res, next)=>{
    // const {page=1 , limit=5} = req.query;
     const page = Number(req.query.page) || 1;
     const limit = Number(req.query.limit) || 5;
    // initalily api not triggerd so we take page 1 and limit=5 so initally in first page 
    // we go the 5 documents because skip((page-1)*limit) which means when page render (1-1 *limit) = 0 so not skip any document first rendering

    const totalVideoCount = await Course.countDocuments();



    const allVideos = await  Course.find().skip((page-1)*limit).limit(limit)

     if(allVideos.length===0 ) // THE CORRECT WAY IS allvideos.length ===0 ( because if no data so it will return empty arry this will not reutn null or undefined)
        return next (new ErrorHandler( "No Videos Available Right Now", 404));

     res.status(200).json({
         success: true,
         message: "Videos retrieved Succesfully",
         allVideos,
         totalVideoCount,
         totalPage: Math.ceil(totalVideoCount/limit),
         currentPage:page
     })
})

export const deleteVideoById = catchAsyncError(async(req,res,next)=>{
    
     const videoId = req.params.id;

    const video = await Course.findByIdAndDelete(videoId)

    if(!video)
        return next(new ErrorHandler('Video not deleted because id not Matched', 404))

    res.status(200).json({
        success:true,
        message: 'Video Deleted succesfully',
        video,
    })
})


export const courseVideos = catchAsyncError(async(req,res,next)=>{

    const FetchedcourseVidoes = await Course.find({category:'course'}) 

    if(!courseVideos)
        return next (new ErrorHandler("Course Videos not Available" , 404))

    res.status(200).json({
        success:true,
        message:"course Videos fetched succesFully",
        FetchedcourseVidoes
    })
})


export const allEditableVideos = catchAsyncError(async(req,res,next)=>{
    const videos = await Course.find()

    if(!videos)
        return next(new ErrorHandler('No videos Add till now', 404))

    res.status(200).json({
        success:true,
        message:"course Videos fetched succesFully",
        videos
    })
})

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addVideoAction } from '../../../../redux/actions/videoAction'
import toast from 'react-hot-toast'
import { clearError, clearMessage } from '../../../../redux/Slices/editVideoSlice'

const AddVideos = () => {
  const [data, setdata] = useState({
    category:'',
    title:'',
    description:'',
    videoUrl:''
  })

  const dispatch = useDispatch()

  const {  message ,error } = useSelector((state) => state.edit);


  const onChangeHandler = (e)=>{
     setdata({...data , [e.target.name]:e.target.value })
  }
  const youtubeEmbedRegex =
  /^https?:\/\/(www\.)?youtube\.com\/embed\/[a-zA-Z0-9_-]+(\?.*)?$/ ;
  const submitHandler = (e)=>{
    e.preventDefault();
    if(data.category =="" || data.title=="" || data.description=="" || data.videoUrl=="" ){
      return alert("Please Enter All fields")
    }else if(!youtubeEmbedRegex.test(data.videoUrl.trim())){
       return alert('Enter Valid youtube embeded Url')
    }else if(data.description.length<10){
      return alert('please Enter 10 letter in Description')
    }
       const {category , title , description , videoUrl   } = data
    console.log(category , title , description , videoUrl)
    dispatch(addVideoAction({category , title , description , videoUrl}))
    
    setdata({
    category:"",
    title:"",
    description:"" ,
    videoUrl:"" ,
    })
  }
  const categories = ["questions", "course", "doubts", "others"];

  useEffect(() => {
   if(message){
     toast.success(message)
     dispatch(clearMessage())
   }

   if(error){
    toast.error(error)
    dispatch(clearError())
   }
  }, [error , message])
  

  return (
    <div className="h-fit">
      <form>
        <div className="w-[40%] mx-auto m-[12%]  text-center space-y-5">
          <h1 className="font-extrabold text-2xl uppercase">Add Videos</h1>
          <div className="flex flex-col justify-center gap-5 w-full">
            <select className='outline-none border p-1.5 text-gray-500'  name='category'
              value={data.category} onChange={onChangeHandler}>
              <option value={''} disabled>Select...</option>
                {
                  categories.map((items , index)=>{
                    return(
                      <option key={index}>{items}</option>
                    )
                  })
                }
            </select>
            <input
              type="text"
              placeholder="title"
              className="outline-none border p-1.5"
              name='title'
              value={data.title}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              placeholder="Description"
              className="outline-none border p-1.5"
              name='description'
              value={data.description}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              placeholder="Embeded Video url"
              className="outline-none border p-1.5"
              name='videoUrl'
              value={data.videoUrl}
              onChange={onChangeHandler}
            />
            <button className="bg-blue-700 p-1 rounded" onClick={submitHandler}>Submit</button>
            <Link to={'/edit'} className="bg-blue-700 p-1 rounded">Edit All videos</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddVideos
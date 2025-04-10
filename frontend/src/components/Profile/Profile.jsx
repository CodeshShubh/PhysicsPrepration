import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./logout";
import { useDispatch, useSelector  } from "react-redux";
import {updateProfile } from "../../../redux/actions/userActions";
import toast, {Toaster} from 'react-hot-toast' 
import { clearError, clearMessage } from "../../../redux/Slices/profileSlice";


const Profile = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.auth)
  const { error , message, loading } = useSelector((state)=>state.profileUpdate)
  console.log(user.role)
  
  const [userName, setuserName] = useState(user?.userName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [imgPrev, setImgPrv] = useState(user?.avatar?.url || "https://placehold.co/80x80");
  const [imageInput, setImageInput] = useState("");


  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageInput(file);
      setImgPrv(URL.createObjectURL(file));
    }
  };
  
  useEffect(() => {
    if (error) {
      toast.error('Unable to update profile');
      dispatch(clearError())
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage())
    }
  }, [error, message, loading]);

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("userName", userName);
    myForm.append("email", email);
    myForm.append("file", imageInput);

    dispatch(updateProfile(myForm))
  
  };

  return (
    <div className="h-screen">
      <Toaster position="top-center"/>
      <form
        className=" w-[80%] lg:w-[40%] mx-auto mt-20 flex flex-col gap-10"
        onSubmit={submitHandler}
      >
        <h1 className="font-extrabold text-2xl uppercase w-full text-center ">
          Edit Profile
        </h1>
        <div className=" flex flex-col gap-5 items-center">
          <div className="w-[80px] h-[80px]">
            <img
              src={imgPrev}
              alt="userProfile"
              className="rounded-full w-full h-full  shadow-2xl object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={imageHandler}
            className=" text-sm text-gray-500 
             file:mr-4 file:py-2 file:px-4 
             file:rounded-lg 
             file:text-sm file:font-semibold 
             file:bg-blue-50 file:text-orange-400 
             hover:file:bg-blue-100"
          />
        </div>
        <div className="flex flex-col gap-5">
          <input
            value={userName}
            placeholder="Enter Name"
            className=" w-full outline-none border rounded text-center p-1"
            onChange={(e) => setuserName(e.target.value)}
          />
          <input
            value={email}
            placeholder="Enter Email"
            className=" w-full outline-none border rounded text-center p-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 rounded p-1 cursor-pointer hover:bg-blue-600 transform duration-300 hover:scale-101"
        >
          Save
        </button>
        {
          user.role =='Admin' && <Link to={'/dashboard'}
          className="bg-blue-700 rounded p-1 text-center cursor-pointer hover:bg-blue-600 transform duration-300 hover:scale-101"
        >
          Admin
        </Link>
        }
        <Logout />
        <Link to={"/resetpassword"} className="text-orange-400 text-center">
          Reset Password
        </Link>
      </form>
    </div>
  );
};

export default Profile;

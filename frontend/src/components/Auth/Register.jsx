import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from '../../../redux/actions/userActions'
import { clearError, clearMessage } from '../../../redux/Slices/userSlice';

const Register = () => {

  const {error,message } = useSelector((state)=>state.auth)

  const [isClick, setIsClick] = useState({
    password: false,
    confirm_password:false
  })
  const [formData, setformData] = useState({
    email: '',
    userName:'',
    password:'',
    confirm_password:''
  })
  const dispatch = useDispatch();

  const onChangeHandler = (e)=>{
       setformData({...formData , [e.target.name]:e.target.value})
  }


    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearError());
      }
      if (message) {
        toast.success(message);
        dispatch(clearMessage());
      }
    }, [error, message, dispatch]);
    

 const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
  
    const { email, userName, password, confirm_password } = formData;
  
    if (!email.trim() || !userName.trim() || !password.trim() || !confirm_password.trim()) {
      toast.error('Please Enter All Details First');
      return;
    }
  
    if (password.trim() !== confirm_password.trim()) {
      toast.error('Confirm Password Does Not Match');
      return;
    }
  
    // Dispatch the action
    dispatch(registerUser({ email, userName, password }));
    navigate('/login')
  };
  

  return (
    <div className=' mt-10 '>
       <form className='bg-orange-50 flex flex-col gap-5  items-left w-[90%] lg:w-[50%] mx-auto p-5 rounded shadow-2xl' onSubmit={submitHandler}>
        <Toaster position='top-center' reverseOrder={false}/>
         <h1 className='  font-extrabold text-2xl p-5'>Register</h1>
         <input type='email' name='email' placeholder='Email' className='border p-3 rounded outline-none' value={formData.email} onChange={onChangeHandler}/>
         <input type='text' name='userName' placeholder='User Name' className='border p-3 rounded outline-none' value={formData.userName}  onChange={onChangeHandler}/>
         <div className='border p-2 rounded flex justify-center items-center'>
         <input type={isClick.password ? 'text' : 'password' } name='password' placeholder='Password' className=' w-full outline-none' value={formData.password}  onChange={onChangeHandler}/> {
          isClick.password ? (
            <IoEyeSharp className='inline w-[30px] h-[30px] cursor-pointer ' onClick={()=>setIsClick((prev)=>({...prev , password: !prev.password}))}/>
          ):(
            <FaEyeSlash className='inline w-[30px] h-[30px] cursor-pointer' onClick={()=>setIsClick((prev)=>({...prev , password: !prev.password}))}/>
          )
         }
         </div>
         <div className='border p-2 rounded flex justify-center items-center'>
         <input type={isClick.confirm_password ? 'text' : 'password' } name='confirm_password' placeholder='Confirm Password' className=' w-full outline-none' value={formData.confirm_password}  onChange={onChangeHandler}/> {
          isClick.confirm_password ? (
            <IoEyeSharp className='inline w-[30px] h-[30px] cursor-pointer' onClick={()=>setIsClick((prev)=>({...prev , confirm_password: !prev.confirm_password}))}/>
          ):(
            <FaEyeSlash className='inline w-[30px] h-[30px] cursor-pointer' onClick={()=>setIsClick((prev)=>({...prev , confirm_password: !prev.confirm_password}))}/>
          )
         }
         </div>

         <button type='submit' className='cursor-pointer bg-orange-500 p-1 font-extrabold text-xl rounded'>Register</button>
         <p className='text-center'>I have already an account. <Link to={'/login'} className='text-blue-600'>Login...</Link></p>
       </form>
    </div>
  )
}

export default Register
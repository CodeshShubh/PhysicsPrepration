import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
  const [isClick, setIsClick] = useState({
    password: false,
    confirm_password:false
  })
  const [formData, setformData] = useState({
    email: '',
    username:'',
    password:'',
    confirm_password:''
  })

  const onChangeHandler = (e)=>{
       setformData({...formData , [e.target.name]:e.target.value})
  }

  const submitHandler =(e)=>{
    e.preventDefault()
      if( formData.email.trim()==='' || formData.username.trim()=== '' || formData.password.trim()==='' || formData.confirm_password.trim()==='' ){
         toast.error('Please Enter All Details First')
         return
      }else if(formData.password.trim()!==formData.confirm_password.trim()){
         toast.error('Comfirm Password Not Match')
      }else{
        toast.success('Register Succesfully');
        console.log(formData)
      }
  }

  return (
    <div className=' mt-10 '>
       <form className='bg-orange-50 flex flex-col gap-5  items-left w-[90%] lg:w-[50%] mx-auto p-5 rounded shadow-2xl' onSubmit={submitHandler}>
        <Toaster position='top-center' reverseOrder={false}/>
         <h1 className='  font-extrabold text-2xl p-5'>Register</h1>
         <input type='email' name='email' placeholder='Email' className='border p-3 rounded outline-none' value={formData.email} onChange={onChangeHandler}/>
         <input type='text' name='username' placeholder='User Name' className='border p-3 rounded outline-none' value={formData.username}  onChange={onChangeHandler}/>
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
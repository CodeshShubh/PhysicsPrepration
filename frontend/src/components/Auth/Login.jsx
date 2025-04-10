import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import {Toaster ,toast} from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/userActions";

const Login = () => {
  const [isClick, setisClick] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });


  const dispatch = useDispatch();
 
  const HandleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if(loginData.email.trim()==="" || loginData.password.trim() === ""){
         toast.error('Please Enter Email and Password')
         return;
    }
     dispatch(login(loginData))
    
  };
 

  return (
    <div className="rounded lg:h-fit flex flex-col  items-center  m-3 ">
       {/* toaster */}
      <Toaster position="top-center" reverseOrder={false}/>
      <form onSubmit={HandleSubmit}
       className=" w-[90%] lg:w-[50%] p-5 space-y-5 bg-orange-50 shadow-2xl lg:mt-18 lg:mb-5">
        <h1 className=" font-extrabold text-2xl mt-5 mb-5">Login</h1>
        <input
        className="w-full border rounded outline-0 p-3"
          type="Email"
          name="email"
          value={loginData.email}
          placeholder="Email"
          onChange={HandleChange}
        />

        <div className="border rounded flex justify-center items-center">
          <input
          className="w-full   outline-0 p-3"
            type={isClick ? "text" : "password"}
            name="password"
            value={loginData.password}
            placeholder="Password"
            onChange={HandleChange}
          />
          {isClick ? (
            <IoEyeSharp
              onClick={() => setisClick((prev) => !prev)}
              className="inline cursor-pointer w-[30px] h-[30px] mr-1"
            />
          ) : (
            <FaEyeSlash
              className="inline cursor-pointer w-[30px] h-[30px] mr-1"
              onClick={() => setisClick((prev) => !prev)}
            />
          )}
        </div>
        <button type="submit" className="cursor-pointer bg-orange-500 w-full rounded font-bold text-xl p-1">
          Login
        </button>
        <p className="text-center"> Create an Account. <Link to={'/register'} className="text-blue-600">Register...</Link></p>
        <Link to={'/resetpassword'}>Reset Password</Link>
      </form>
    </div>
  );
};

export default Login;

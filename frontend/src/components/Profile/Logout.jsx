import React from "react";
import {useDispatch} from 'react-redux'
import { logout } from "../../../redux/actions/userActions";

const Logout = () => {

const dispatch = useDispatch()

  return (
    <button className="bg-blue-700 rounded p-1 cursor-pointer  hover:bg-blue-600 transform duration-300 hover:scale-101 " 
     onClick={()=>dispatch(logout())} >
      Logout
    </button>
  );
};

export default Logout;

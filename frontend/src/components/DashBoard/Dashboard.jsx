import React from "react";
import AddVideos from "./components/AddVideos";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const { user ,loading } = useSelector((state) => state.auth);
  
  return (
    <div>
       {
         loading ? <h1>Loading....</h1> : (
          user.role=="Admin" ? (
            <AddVideos/>
            
          ): <h1 className="h-[40vw] flex justify-center items-center font-extrabold text-5xl">You Are not admin</h1>
         )
       }
       
    </div>
  );
};

export default Dashboard;

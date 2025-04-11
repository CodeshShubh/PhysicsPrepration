import React from 'react'
import { ImCross } from "react-icons/im";

import { Link } from 'react-router-dom';


const SideBar = ({setisOpen ,isOpen , user}) => {


  return (
    // container
 <>
  {
    isOpen ? (
      <div className={` rounded shadow-lg w-[23.5rem] h-[30rem] lg:w-[20rem] lg:h-[44rem] flex justify-between  z-[1000] bg-orange-100`}>
          <Link to={'/profile'} onClick={()=>setisOpen(false)}
           className=" absolute m-2">
              <div className="w-[40px] h-[40px] border rounded-full overflow-hidden mx-auto">
              <img src={user?.avatar?.url || 'https://placehold.co/80x80'}alt="photo"/>
              </div>
            </Link>
      <div className=' w-full p-2'>
        
        {/* nav links */}
      <div className=''>
        <ul className="  flex flex-col text-center [&>li]:shadow-xl gap-5 lg:gap-10 mt-18 text-xl lg:text-2xl tracking-wide [&>li]:bg-orange-400
        [&>li>a]:block [&>li>a]:w-full [&>li>a]:h-full [&>li>a]:text-inherit [&>li]:rounded">
              <li> <Link to={'/'} onClick={()=>setisOpen(false)}>Home</Link></li>

              <li> <Link to={'/latestVideos'} onClick={()=>setisOpen(false)} >Latest Videos</Link></li>

              <li> <Link to={'/allCourse'} onClick={()=>setisOpen(false)} >All-Course</Link></li>

              <li> <Link to={'/contactUs'} onClick={()=>setisOpen(false)} > Contact us</Link></li>

              <li> <Link to={'/faq'} onClick={()=>setisOpen(false)} >  FAQ's </Link></li>
            </ul>
      </div>
          <div className=" w-full p-1 mt-3 flex flex-col gap-5 text-center [&>a]shadow">
           <Link to={'/login'} className='px-6 py-2 rounded bg-blue-800 text-xl'  onClick={()=>setisOpen(false)} >  Log in </Link>

           <Link to={'/register'} className='px-6 py-2 rounded bg-blue-800 text-xl' onClick={()=>setisOpen(false)}> Register </Link>
        </div>
      </div>
      
    {/* close button */}
      <div>
          <ImCross className='p-0.5 size-7 m-2 absolute top-1 right-1' onClick={()=>setisOpen(false)}/>
      </div>
  </div>
    ) :(
      null
    )
  }
 </>
  )
}

export default SideBar


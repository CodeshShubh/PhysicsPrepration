  import React, { useEffect, useRef, useState } from 'react'
  import { LuSearch } from "react-icons/lu";
  import Pagination from './CourseComponents/Pagination';
  import CardContainer from './CourseComponents/CardContainer';
  import Aside from './CourseComponents/Aside';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestVideos } from '../../../redux/actions/videoAction';




  const LatestVideos = () => {
    const inputRef = useRef();
    const [page, setpage] = useState(1);

    const {videos , totalPage , currentPage } =   useSelector((state)=>state.videos);
 
  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(fetchLatestVideos({page}))
 }, [dispatch, page])
 
if (!videos || videos.length === 0) {
  return (
    <div className="flex justify-center items-center h-[450px]">
      <h1 className="text-xl font-semibold text-gray-700 bg-orange-100 px-6 py-3 rounded shadow">
        🚫 No Videos Found
      </h1>
    </div>
  );
}

    return (
      <section className='flex justify-evenly mt-10'>
          {/* main */}
          <main className=''>
            <div className='flex justify-between'>
                <h1 className='font-extrabold  lg:text-3xl'>All Topics</h1>
                <div className='border rounded-2xl flex justify-center items-center'>
                <input type='text' ref={inputRef}  placeholder='Search' className='outline-none p-[-1] lg:p-1'/> <LuSearch onClick={()=>inputRef.current.focus()} className='inline size-5 mr-1 cursor-pointer' />
                </div>
            </div>
              
              {/* cardContainer */}
            <CardContainer videos={videos}/>

              {/* pagination */}
            <Pagination setpage={setpage} totalPage={totalPage} currentPage={currentPage}/>
          </main>


          {/* aside */}
          <aside className=' w-[15%] p-5 h-fit rounded bg-orange-50'>
              <Aside/>
          </aside>
      </section>
    )
  }

  export default LatestVideos